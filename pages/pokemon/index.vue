<template>
  <NuxtLayout>
    <div class="top-side">
      <div class="title">
        포켓몬 띠부씰 <div class="title-desc">아기자기한 포켓몬들이 모여있어요</div>
      </div>
      <div class="search">
        <BasicIcon src="/icons/search.svg" width="24px" height="24px" />
        <input type="text" placeholder="이름이나 번호를 검색하세요!" v-model="_keyword" @keypress.enter="!_keyword ? () => {} : __useRouter.push(`/pokemon/search/${_keyword}`)">
      </div>
    </div>
    <div class="all" @click="__useRouter.push('/pokemon/all')">
      전체보기
    </div>
    <div class="serises">
      <div 
        class="serise" 
        v-for="({ name, period, id, src }, idx) of serises"
        @click="__useRouter.push(`/pokemon/${id}`)"
        :style="{ 
          'background-image': `url(${src})`,
          'background-repeat': 'no-repeat',
          'background-size': '100% 100%',
          'background-origin': 'content-box',
          'box-sizing': 'border-box',
          'padding': '10px',
        }"
      >
        <div class="serise-title">
          <div class="name">
            {{ name }}
          </div>
          <div class="period">
            {{ period }}
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const serises = [
  { name: "2022년 1세대 띠부씰 도감", period: "2022.02.23", id: "serise_2022_1", src: "/seal/pokemon/poster/2022_띠부씰_도감_1세대_159종.png" },
  { name: "2022년 2세대 띠부씰 도감", period: "2022.07.07", id: "serise_2022_2", src: "/seal/pokemon/poster/2022_띠부씰_도감_2세대_116종.png" },
  { name: "2022년 할로윈 띠부씰 도감", period: "2022.09.29", id: "serise_2022_3", src: "/seal/pokemon/poster/2022_할로윈_띠부씰_도감_27종.png" },
  { name: "2022년 윈터 띠부씰 도감", period: "2022.12.06", id: "serise_2022_4", src: "/seal/pokemon/poster/2022_윈터_띠부씰_도감_30종.png" },
  { name: "2023년 러블리 띠부씰 도감", period: "2023.01.26", id: "serise_2023_1", src: "/seal/pokemon/poster/2023_러블리_띠부씰_도감_30종.png" },
  { name: "2023년 NEW 띠부씰 도감", period: "2023.05.12", id: "serise_2023_2", src: "/seal/pokemon/poster/2023_NEW_띠부씰_도감_55종.png" },
  { name: "2023년 NEW 시즌1 띠부씰 도감", period: "2023.10.30", id: "serise_2023_3", src: "/seal/pokemon/poster/2023_NEW_시즌1_띠부씰_도감_139종.png" },
  { name: "2024년 NEW 시즌2 띠부씰 도감", period: "2024.04.19", id: "serise_2024_1", src: "/seal/pokemon/poster/2024_NEW_시즌2_띠부씰_도감_163종.png" },
  { name: "2024년 메가진화 띠부씰 도감", period: "2024.05.03", id: "serise_2024_2", src: "/seal/pokemon/poster/2024_메가띠부씰_도감_53종.png" },
  { name: "2024년 픽셀아트 띠부씰 도감", period: "2024.07.25", id: "serise_2024_3", src: "/seal/pokemon/poster/2024_픽셀아트_도감_151종.png" },
  { name: "2024년 NEW 시즌3 띠부씰 도감", period: "2024.11.27", id: "serise_2024_4", src: "/seal/pokemon/poster/2024_NEW_시즌3_띠부씰_도감_154종.png" },
  { name: "2025년 포켓피스 띠부씰 도감", period: "2025.02.21", id: "serise_2025_1", src: "/seal/pokemon/poster/2025_포켓몬_포켓피스_도감_114종.png" },
]

const __useRouter = useRouter()
const _keyword = ref('')
</script>

<style lang="scss">
.top-side {
  display: flex;
  align-items: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: 600;

    @media screen and (max-width: 640px) {
      flex-direction: column;
    }

    .title-desc {
      font-size: 16px;
      margin-left: 10px;
    }
  }

  .search {
    display: flex;
    align-items: center;
    margin-left: auto;
    background: #FFFFFF;
    min-width: 140px;
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 12px;

    input {
      height: 100%;
      margin-left: 5px;
      outline: none;
      border: none;
      font-weight: 500;
    }

    @media screen and (max-width: 640px) {
      min-width: 100%;
      margin: 0 auto;
      margin-top: 30px;
    }
  }
}


.all {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  height: 60px;
  margin-top: 20px;
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
  }
}

.serises {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  display: grid;
  gap: 20px;
  margin-top: 20px;

  .serise {
    background: rgba(255, 255, 255, 1);
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: end;
    width: 100%;
    aspect-ratio: 3 / 4;
    text-align: left;
    cursor: pointer;

    .serise-title {
      width: 100%;
      height: 70px;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      margin-top: auto;
      margin-left: auto;
      box-sizing: border-box;
      padding: 5px 15px;

      .name {
        font-size: 18px;
        font-weight: 700;
      }

      .period {
        margin-top: 10px;
        font-size: 14px;
        font-weight: 600;
      }
    }

    &:hover {      
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(241, 243, 245, 0.2);
        pointer-events: none;
        z-index: 1;
      }
    }
  }
}
</style>
