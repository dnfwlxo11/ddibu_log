<template>
  <div @click="__useRouter.push('main')">
    <NuxtLayout>
      <div class="start">
        <img class="logo" src="/ddibu_logo.png"></img>
        <span class="logo-text">화면을 눌러 시작하세요.</span>
      </div>
    </NuxtLayout>  
  </div>
</template>

<script setup>
const __useRouter = useRouter()
</script>

<style lang="scss">
.start {
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  width: 400px;
  height: 100%;
  margin: auto;

  img {
    width: 100%;
  }

  .logo-text {
    font-weight: 600;
  }
}
</style>