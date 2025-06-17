<template>
  <NuxtLayout>
    <div class="main-page">
      <div class="desc-service">
        <img class="logo" src="/logo.png">
        <div class="desc-title">띠부씰 좋아하세요? 저도요!</div>
        수집한 씰을 기록하고, 자랑하고, 함께 얘기해요. <br>
        모두의 띠부씰 도감, 지금 시작해봐요! <br>
      </div>
      <div class="recent-menu">
        <div class="title">최근 방문 메뉴</div>
        <div class="menus">
          <BasicRBox 
            v-for="({ serise, name, genre }, idx) of _recentMenus"
            @click="__useRouter.push(`/${genre}/${serise}`)"
          >
            {{ name }}
          </BasicRBox>
        </div>
      </div>
      <div class="seals">
        <template v-for="({ title, desc, src, alt, name, type }, idx) of _menus">
          <div :class="`${name}-seal seal`" @click="f_clickCard(name)">
            <div class="title">
              <div>{{ title }}</div>
              <div class="desc">{{ desc }}</div>
            </div>
            <img v-if="type === 'img'" :class="`${name} seal-icon`" :src="src" :alt="alt">
            <BasicIcon v-else :class="`${name} seal-icon`" :src="src" width="40px" height="40px" />
          </div>
        </template>
      </div>
    </div>
    <BasicModal v-if="_isModal" @close="_isModal=false">
      <div class="modal">
        추후 추가 예정입니다.
      </div>
    </BasicModal>
  </NuxtLayout>
</template>

<script setup>
let s_collected
if (typeof window != 'undefined') {
  if (!getLocalStorageItem("ddibu_log")) localStorage.setItem("ddibu_log", "{}")
  s_collected = useState('ddibu_log', () => ref(localStorage.getItem('ddibu_log') || {}))
}

const __useRouter = useRouter()

const _menus = [
  { title: "포켓몬 띠부씰", desc: "다양하고 귀여운 포켓몬스터 띠부씰", src: "/international_Pokemon_logo.svg", alt: "공식 포켓몬스터 로고", name: "pokemon", type: "img" },
  { title: "야구 띠부씰", desc: "내가 좋아하는 선수&캐릭터들이 띠부씰로", src: "/kbo.png", alt: "공식 KBO 로고", name: "sports", type: "img" },
  { title: "소통하기", desc: "여러 유저들과 소통하며 수집을 더욱 즐겁게 해보세요!", src: "/icons/partner_exchange.svg", alt: "거래 아이콘", name: "trade", type: "icon" },
  { title: "그 밖의 띠부씰", desc: "남들모르게 나만 알고싶은 씰", src: "/icons/more_horiz.svg", alt: "더보기 아이콘", name: "other", type: "icon" },
]

const _isModal = ref(false)
const f_clickCard = (name) => {
  if (name === "trade" || name === "other") {
    _isModal.value = true
    return
  }
  __useRouter.push(`/${name}`)
}

const _recentMenus = ref([])
onMounted(() => {
  _recentMenus.value = JSON.parse(localStorage?.getItem('ddibu_recent_menu') || '[]')
})
</script>

<style lang="scss">
.main-page {
  margin: 0 auto;
  width: 100%;

  .recent-menu {
    margin-bottom: 20px;

    .title {
      font-size: 14px;
      font-weight: 600;
    }

    .menus {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      gap: 10px;

      & .menu {
        white-space: nowrap;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }
      }
    } 
  }

  .desc-service {
    height: 400px;
    background: #F9F9F9;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 18px;
    text-align: center;
    line-height: 24px;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .logo {
      width: 300px;
      margin-bottom: 30px;
    }

    .desc-title {
      font-size: 24px;
      line-height: 54px;
      font-weight: 600;
    }
  }

  .seals {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(138px, 1fr));
    gap: 20px;

    @media screen and (max-width: 640px) {
      grid-template-columns: repeat(1, minmax(138px, 1fr));
    }

    .seal {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      min-width: 200px;
      height: 260px;
      background: rgba(255, 255, 255, 1);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      box-sizing: border-box;
      padding: 20px 30px;
      transition: all ease-in-out 0.2s;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
        cursor: pointer;
      }

      .title {
        display: block;
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

    .sports-seal {
      background: rgba(227, 238, 224, 1);
    }

    .trade-seal {
      background: rgba(244, 230, 227, 1);
    }

    .other-seal {
      background: rgba(223, 239, 238, 1);
    }

    .sports {
      width: 100px;
      margin-top: auto;
      margin-left: auto;
    }
    
    .pokemon {
      width: 120px;
      margin-top: auto;
      margin-left: auto;
    }

    .trade, .other {
      margin-top: auto;
    }
  }
}

.modal {
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>