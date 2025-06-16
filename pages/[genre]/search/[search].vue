<template>
  <NuxtLayout>
    <div class="backbtn" @click="__useRouter.push(`/${c_genre}`)">
      <BasicIcon 
        src="/icons/chevron_left.svg" 
        width="32px" 
        height="32px" 
      />
      뒤로가기
    </div>
    <div class="title">
      "{{ c_keyword }}" 에 대한 검색 결과입니다.
    </div>
    <div class="result">
      <template v-for="(data, idx) of _result">
        <div class="item" v-for="({ number, serise, seriseName, name }, key) in data">
          <div class="image-area">
            <BasicImage :src="`/seal/${c_genre}/${serise}/${key}.webp`" />
          </div>
          <div class="item-desc">번호: <span>{{ number }}</span></div>
          <div class="item-desc">이름: <span>{{ name }}</span></div>
          <div class="item-desc">시리즈명: <span>{{ seriseName }}</span></div>
          <div class="move-serise" @click="__useRouter.push(`/${c_genre}/${serise}`)">
            해당 시리즈<br> 이동
          </div>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>

<script setup>
const __useRoute = useRoute()
const __useRouter = useRouter()

const c_genre = computed(() => __useRoute.params?.genre)
const c_keyword = computed(() => __useRoute?.params?.search)

const _result = ref()
const _allSeriseData = ref()
onMounted(() => {
  _allSeriseData.value = getSeriseData()
  f_searchKeyword(_allSeriseData.value)
})

const f_searchKeyword = (data) => {
  const seriseNames = Object.keys(data)
  
  _result.value = seriseNames.reduce((acc, seriseName) => {
    acc = [ ...acc, ...Object.entries(data[seriseName]).filter(([ key, {number, name} ]) => ((String(number) === c_keyword.value) || (String(name) === c_keyword.value))).map(([serise, data]) => ({ [serise]: data })) ]
    return acc
  }, [])
}
</script>

<style lang="scss" scoped>
.backbtn {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
}

.title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 30px;
}

.result {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 20px;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
  }

  .item {
    display: flex;
    flex-direction: column;

    .image-area {
      aspect-ratio: 3 / 4;

      img {
        width: 100%;
        // height: 100%;
        object-fit: cover;
      }
    }

    .item-desc {
      font-size: 14px;
      font-weight: 500;
      box-sizing: border-box;
      padding: 5px 0;
      border-bottom: 0.5px solid black;

      span {
        font-size: 16px;
      }

      &:nth-last-child(2) {
        margin-bottom: 10px;
      }
    }

    .move-serise {
      text-align: center;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      box-sizing: border-box;
      padding: 5px;
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
      margin-top: auto;
    }
  }
}
</style>