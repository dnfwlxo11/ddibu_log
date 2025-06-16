<template>
  <NuxtLayout name="wrong">
    <div class="wrong-page">
      <div class="wrong-notice">올바르지않은 접근입니다.</div>
      <div class="redirect-btn" @click="__useRouter.push('/')">
        메인화면으로 돌아가기
      </div>
    </div>
    
  </NuxtLayout>
</template>

<script setup>
const __useRouter = useRouter()
</script>

<style lang="scss">
.wrong-page {
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
  height: 600px;
  align-items: center;
  justify-content: center;
  
  .redirect-btn {
    display: flex;
    align-items: center;
    height: 50px;
    margin-top: 30px;
    font-size: 16px;
    box-sizing: border-box;
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    cursor: pointer;
  }
}
</style>