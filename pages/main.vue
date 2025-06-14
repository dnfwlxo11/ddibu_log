<template>
  <NuxtLayout>
    <div class="main-page">
      <div class="recent-menu">
        <small>최근 방문 메뉴</small>
        <div class="menus">
          <BasicRBox>포켓몬 띠부씰</BasicRBox>
          <BasicRBox>포켓몬 띠부씰</BasicRBox>
        </div>
      </div>
      <div class="seals">
        <div class="pokemon-seal seal">
          <div class="title">
            <span>포켓몬 띠부씰</span>
          </div>
        </div>
        <div class="trade-seal seal">
          trade
        </div>
        <div class="other-seal seal">
          
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const __useRouter = useRouter()
</script>

<style lang="scss">
.main-page {
  width: 80%;

  .recent-menu {
    margin-bottom: 20px;

    .menus {
      margin-top: 5px;
      display: flex;
      font-weight: 600;

      & .menu {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    } 
  }

  .seals {
    width: 100%;
    margin: 0 auto;
    display: grid;
    text-align: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .seal {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-width: 200px;
      min-height: 200px;
      border-radius: 8px;
      background: #D3E2FE;
      opacity: 0.8;
      box-sizing: border-box;
      padding: 20px;

      .title {
        color: #080E0B;
        font-weight: 700;
        margin-right: auto;
      }
    }

    .pokemon-seal {
      grid-row: 1 / span 2;
    }
  }
}
</style>