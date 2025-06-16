<template>
  <NuxtLayout>
    <div class="title">
      "{{ c_keyword }}" 에 대한 검색 결과입니다.
    </div>
    <div class="result">
      <div v-for="(data, idx) of _result">
        <div v-for="({ number, name }, key) in data">
          {{ key }}. {{ number }} {{ name }}
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const __useRoute = useRoute()
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
    acc = [ ...acc, ...Object.entries(data[seriseName]).filter(([ key, {number, name} ]) => ((number === c_keyword.value) || (name === c_keyword.value))).map(([serise, data]) => ({ [serise]: data })) ]
    return acc
  }, [])
}
</script>

<style lang="scss">
.title {
  font-size: 18px;
  font-weight: 500;
}
</style>