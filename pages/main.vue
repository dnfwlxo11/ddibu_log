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
        <div v-for="({ title, desc, src, alt, name, type }, idx) of _menus">
          <div :class="`${name}-seal seal`">
            <div class="title">
              <div>{{ title }}</div>
              <div class="desc">{{ desc }}</div>
            </div>
            <img v-if="type === 'img'" :class="`${name} seal-icon`" :src="src" alt="공식 포켓몬스터 로고">
            <BasicIcon v-else :class="`${name} seal-icon`" :src="src" width="40px" height="40px" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const __useRouter = useRouter()

const _menus = [
  { title: "포켓몬 띠부씰", desc: "다양하고 귀여운 포켓몬스터 띠부씰", src: "/International_Pokemon_logo.svg", alt: "공식 포켓몬스터 로고", name: "pokemon", type: "img" },
  { title: "거래하기", desc: "여러 유저들과 거래를 통해 수집을 손쉽게 해보세요!", src: "/icons/partner_exchange.svg", alt: "거래 아이콘", name: "trade", type: "icon" },
  { title: "야구 띠부씰", desc: "내가 좋아하는 선수들이 스티커로", src: "/kbo.png", alt: "공식 KBO 로고", name: "kbo", type: "img" },
  { title: "그 밖의 띠부씰", desc: "남들모르게 나만 알고싶은 씰씰", src: "/icons/more_horiz.svg", alt: "더보기 아이콘", name: "other", type: "icon" },
]
</script>

<style lang="scss">
.main-page {
  margin: 0 auto;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .seal {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      min-width: 200px;
      height: 260px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 1);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      box-sizing: border-box;
      padding: 20px 30px;
      transition: all ease-in-out 0.2s;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
      }

      .title {
        color: rgba(8, 14, 11, 0.8);
        font-size: 28px;
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 50px;

        & .desc {
          color: rgb(83, 85, 88);
          font-size: 16px;
          margin-top: 10px;
        }
      }

      .seal-icon {
        margin-left: auto;
      }
    }

    .pokemon-seal {
      background: rgba(243, 238, 219, 1);
    }

    .kbo-seal {
      background: rgba(227, 238, 224, 1);
    }

    .trade-seal {
      background: rgba(244, 230, 227, 1);
    }

    .other-seal {
      background: rgba(223, 239, 238, 1);
    }

    .kbo {
      width: 120px;
      margin-top: auto;
      margin-left: auto;
    }
    
    .pokemon {
      width: 140px;
      margin-top: auto;
      margin-left: auto;
    }

    .trade, .other {
      margin-top: auto;
    }
  }
}
</style>