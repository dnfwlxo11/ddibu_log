<template>
  <div class="default-layout">
    <div class="navi">
      <div class="left-side">
        <img class="logo" src="/logo.png" @click="__useRouter.push('/')">
      </div>
      <div class="middle-side"></div>
      <div class="right-side">
        <BasicIcon src="/icons/settings.svg" width="34px" height="34px" />
      </div>
    </div>
    <div v-if="isReady" class="content" :class="{ visible: isReady }">
      <slot />
    </div>
    <div v-else class="content">
      데이터 로딩 중
    </div>
  </div>
</template>

<script setup>
const __useRouter = useRouter()

const isReady = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isReady.value = true
  })
})
</script>

<style lang="scss">
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F7F8FA;
  overflow: auto;
  min-width: 280px;

  .content {
    opacity: 0;
    transition: opacity 0.5s ease;
    height: 100%;
    width: calc(100% - 160px);
    padding: 40px 0;
    box-sizing: border-box;

    @media screen and (max-width: 640px) {
      width: calc(100% - 80px);
    }

    @media screen and (max-width: 360px) {
      width: calc(100% - 40px);
    }
  }

  .content {
    &.visible {
      opacity: 1;
    }
  }

  .navi {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    width: 100%;
    min-height: 80px;
    top: 0;
    z-index: 2;
    box-sizing: border-box;
    padding: 0 80px;
    background: #F7F8FA;

    @media screen and (max-width: 640px) {
      padding: 0 40px;
    }

    @media screen and (max-width: 360px) {
      padding: 0 20px;
    }
    
    .left-side {
      display: flex;
      align-items: center;
      margin-right: auto;
      font-size: 16px;

      .logo {
        width: 100px;
        margin-right: 10px;

        cursor: pointer;
      }
    }
  }
}
</style>