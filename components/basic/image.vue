<template>
  <div class="skeleton" v-if="_isLoading"></div>
  <img v-show="!_isLoading" :src="p_src" @load="f_onLoad" @error="onError">
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
  }
})

const _isLoading = ref(true)
const f_onLoad = () => {
  _isLoading.value = false
}

const onError = () => console.error('이미지 로딩 중 에러가 발생했습니다.\n일부 이미지가 올바르게 표시되지 않을 수 있습니다.')

const { src: p_src } = toRefs(props)
</script>

<style lang="scss">

.skeleton {
  width: 100%;
  height: 100%;
  background: #EEEEEE;
  animation: pulse 1.5s infinite;
  border-radius: 8px;
}

img {
  width: 100%;
  height: 100%;
}

@keyframes pulse {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #ddd;
  }
  100% {
    background-color: #eee;
  }
}
</style>