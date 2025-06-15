<template>
  <NuxtLayout>
    <div class="top-menu">
      <BasicIcon 
        src="/icons/chevron_left.svg" 
        width="40px" 
        height="40px" 
        style="margin-right: 10px;" 
        @click="__useRouter.push('/pokemon')"
      />
      <CompoundFilter 
        class="filter" 
        :categories="['전체', '수집필요', '수집완료']"
        :selected="_selected"
        @click="f_clickFilter"
      />
      <div class="showing-style">
        <div class="showing-btn" :class="{ selected: _showingStyle === 'minimum' }" @click="f_clickShowingFilter('minimum')">
          <BasicIcon src="/icons/hide.svg" width="20px" height="20px" />
        </div>
        <div class="showing-btn" :class="{ selected: _showingStyle === 'maximum' }" @click="f_clickShowingFilter('maximum')">
          <BasicIcon src="/icons/open_in_full.svg" width="20px" height="20px" />
        </div>
        <div class="showing-btn" :class="{ selected: _showingStyle === 'list' }" @click="f_clickShowingFilter('list')">
          <BasicIcon src="/icons/list_alt.svg" width="20px" height="20px" />
        </div>
      </div>
    </div>
    <div 
      v-if="_showingStyle !== 'list'" 
      class="seals"
      :style="{ 'grid-template-columns': c_showingStyle === 'minimum' ? 'repeat(auto-fill, minmax(80px, 1fr))' : 'repeat(auto-fill, minmax(138px, 1fr))' }"
    >
      <template v-for="({ number, name, all, data }, idx) in _listData">
        <div
          v-if="c_listData.includes(idx) && !all"
          class="seal"
          :class="{ clicked: _selectedSeal?.[`${c_path?.genre}_${c_serise}_${idx}`]  }"
          @click="f_clickSeal(idx)"
        >
          <BasicImage :src="`/seal/pokemon/${c_serise}/${c_serise}_${idx}.webp`" />
        </div>
        <template v-else>
          <div
            v-for="({ number: dataNumber, name: dataName }, dataIdx) in data"
            class="seal"
            :class="{ clicked: _selectedSeal?.[`${c_path?.genre}_${idx}_${dataIdx}`]  }"
            @click="f_clickSeal(dataIdx, idx)"
          >
            <BasicImage :src="`/seal/pokemon/${idx}/${idx}_${dataIdx}.webp`" />
          </div>
        </template>
      </template>
    </div>
    <div v-else class="seal-list">
      <template v-for="({ number, name, all, data }, idx) in _listData">
        <div
          v-if="c_listData.includes(idx) && !all"
          class="seal"
          :class="{ clicked: _selectedSeal?.[`${c_path?.genre}_${c_serise}_${idx}`]  }"
          @click="f_clickSeal(idx)"
        >
          {{ idx }}.
          <div class="name">{{ name }}</div> &nbsp;
          <div class="number">({{ number }})</div>
          <img :src="`/seal/pokemon/${c_serise}/${c_serise}_${idx}.webp`">
        </div>
        <template v-else>
          <div 
            v-for="({ number: dataNumber, name: dataName }, dataIdx) in data"
            class="seal"
            :class="{ clicked: _selectedSeal?.[`${c_path?.genre}_${idx}_${dataIdx}`]  }"
            @click="f_clickSeal(dataIdx, idx)"
          >
            {{ dataIdx }}.
            <div class="name">{{ dataName }}</div> &nbsp;
            <div class="number">({{ dataNumber }})</div>
            <img :src="`/seal/pokemon/${idx}/${idx}_${dataIdx}.webp`">
          </div>
        </template>
      </template>
    </div>
  </NuxtLayout>
</template>

<script setup>
const __useRoute = useRoute()
const __useRouter = useRouter()
const c_path = computed((route) => {
  const [ empty, genre, serise ] = (__useRoute?.fullPath || "/").split("/")
  return {
    genre,
    serise
  }
})

const c_serise = computed((route) => __useRoute.params?.id)
let s_collected
if (typeof window != 'undefined') {
  if (!getLocalStorageItem("ddibu_log")) localStorage.setItem("ddibu_log", "{}")
  s_collected = useState('ddibu_log', () => ref(localStorage.getItem('ddibu_log') || {}))
}

onMounted(() => {
  const collectedData = getLocalStorageItem('ddibu_log') || "{}"
  const data = collectedData || {}
  _selected.value = data?.filter || ['전체']
  _showingStyle.value = data?.show || 'minimum'
  if (c_serise.value === 'all') {
    [
      "serise_2022_1",
      "serise_2022_2",
      "serise_2022_3",
      "serise_2022_4",
      "serise_2023_1",
      "serise_2023_2",
      "serise_2023_3",
      "serise_2024_1",
      "serise_2024_2",
      "serise_2024_3",
      "serise_2024_4",
      "serise_2025_1",
    ].map((v) => _listData.value[v] = { all: true, data: getSeriseData(v) })
  } else _listData.value = getSeriseData(c_serise.value)
  

  if (!data?.data) data['data'] = {}
  _selectedSeal.value = Object.keys(data?.data).reduce((acc, key) => {
    if (!data['data']?.[key]) return acc
    acc[key] = data['data'][key]
    return acc
  }, {})
})

watch(s_collected, (v) => {
  if (!v?.data) return
  _selectedSeal.value = Object.keys(v?.data).reduce((acc, key) => {
    if (!v['data']?.[key]) return acc
    acc[key] = v['data'][key]
    return acc
  }, {})
}, { immediate: true })

const _listData = ref({})
const c_listData = computed(() => {
  const data = getSeriseData('serise_2022_1')
  let tmpData = []

  if (_selected.value.includes('전체')) tmpData = Object.keys(data)
  if (_selected.value.includes('수집완료')) {
    tmpData = [ ...Object.keys(_selectedSeal.value).map(v => {
      const selectedNumber = v?.split('_')?.pop() || ''
      return selectedNumber
    })]
  }
  if (_selected.value.includes('수집필요')) {
    const existsSeal = Object.keys(_selectedSeal.value).map(v => {
      const selectedNumber = v?.split('_')?.pop() || ''
      return selectedNumber
    })

    tmpData = [ ...tmpData, ...Object.keys(_listData.value).filter(v => !existsSeal.includes(v)) ]
  }

  return tmpData
})

const _selectedSeal = ref({})
const _collected = ref({})

const f_clickSeal = (key, serise = '') => {
  if (c_path.value.serise === 'all') {
    if (_selectedSeal.value?.[`${c_path.value.genre}_${serise}_${key}`]) {
      delete _selectedSeal.value[`${c_path.value.genre}_${serise}_${key}`]
      setLocalStorageItem(`${c_path.value.genre}_${serise}_${key}` , true)
      return
    }

    if (!c_path.value?.genre || !serise) return
    setLocalStorageItem(`${c_path.value.genre}_${serise}_${key}` , true)
    _selectedSeal.value[`${c_path.value.genre}_${serise}_${key}`] = true
    return
  }

  if (_selectedSeal.value?.[`${c_path.value.genre}_${c_path.value.serise}_${key}`]) {
    delete _selectedSeal.value[`${c_path.value.genre}_${c_path.value.serise}_${key}`]
    setLocalStorageItem(`${c_path.value.genre}_${c_path.value.serise}_${key}` , true)
    return
  }

  if (!c_path.value?.genre || !c_path.value?.serise) return
  setLocalStorageItem(`${c_path.value.genre}_${c_path.value.serise}_${key}` , true)
  _selectedSeal.value[`${c_path.value.genre}_${c_path.value.serise}_${key}`] = true
}

const _showingStyle = ref("list")
const c_showingStyle = computed(() => _showingStyle.value)
const f_clickShowingFilter = (type) => {
  _showingStyle.value = type
  setLocalStorageItem('show', _showingStyle.value)
}

const _selected = ref(["전체"])
const f_clickFilter = (item) => {
  if (item.target.className !== "menu") return
  const target = item.target.innerText

  if (target === "전체") {
    _selected.value = ["전체"]
    setLocalStorageItem('filter', _selected.value)
    return
  } else if (_selected.value?.includes(target)) {
    _selected.value = _selected.value.filter(v => (v !== "전체" && v !== target))

    if (!_selected.value?.length) _selected.value = ["전체"]
    setLocalStorageItem('filter', _selected.value)
    return
  } else _selected.value = _selected.value.filter(v => (v !== "전체"))
  
  _selected.value.push(target)
  setLocalStorageItem('filter', _selected.value)
}
</script>

<style lang="scss" scoped>
.top-menu {
  display: flex;
  align-items: center;

  .showing-style {
    border-radius: 20px;
    background: rgba(154, 156, 154, 0.5);
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    padding: 5px 10px;

    .showing-btn {
      box-sizing: border-box;
      padding: 3px;
    }

    .selected {
      background: rgba(154, 156, 154, 0.9);
      border-radius: 10px;
    }
  }
}

.seals {
  width: 100%;
  // grid-template-columns: repeat(auto-fill, minmax(v-bind('c_showingStyle'), 1fr));
  display: grid;
  gap: 15px;
  margin-top: 20px;

  .seal {
    position: relative;
    aspect-ratio: 3 / 4;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px solid #606060;
      pointer-events: none;
      z-index: 1;
    }

    &.clicked {
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        pointer-events: none;
        z-index: 1;
      }
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
    }
  }
}

.seal-list {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;

  .seal {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 5px 20px;
    color: rgba(8, 14, 11, 0.8);
    border-bottom: 1px solid black;
    height: 70px;

    .number {
      font-size: 16px;
      margin-right: auto;
      min-width: 40px;
    }

    .name {
      margin-left: 20px;
      margin-right: 5px;
      min-width: 100px;
      min-width: 40px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    img {
      width: 50px;
      aspect-ratio: 3 / 4;
      margin-left: auto;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
    }

    &.clicked {
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        pointer-events: none;
        z-index: 1;
      }
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
    }
  } 
}
</style>