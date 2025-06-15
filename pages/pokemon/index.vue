<template>
  <NuxtLayout>
    <div class="title">
      포켓몬 띠부씰 <div class="title-desc">아기자기한 포켓몬들이 모여있어요</div>
    </div>
    <div class="all" @click="__useRouter.push('/pokemon/all')">
      전체보기
    </div>
    <div class="serises">
      <div 
        class="serise" 
        v-for="({ name, period, id }, idx) of serises"
        @click="__useRouter.push(`/pokemon/${id}`)"
      >
        <div class="name">
          {{ name }}
        </div>
        <div class="period">
          {{ period }}
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const serises = [
  { name: "2022년 1세대 띠부씰 도감", period: "2022.02.23", id: "serise_2022_1" },
  { name: "2022년 2세대 띠부씰 도감", period: "2022.07.07", id: "serise_2022_2" },
  { name: "2022년 할로윈 띠부씰 도감", period: "2022.09.29", id: "serise_2022_3" },
  { name: "2022년 윈터 띠부씰 도감", period: "2022.12.06", id: "serise_2022_4" },
  { name: "2023년 러블리 띠부씰 도감", period: "2023.01.26", id: "serise_2023_1" },
  { name: "2023년 NEW 띠부씰 도감", period: "2023.05.12", id: "serise_2023_2" },
  { name: "2023년 NEW 시즌1 띠부씰 도감", period: "2023.10.30", id: "serise_2023_3" },
  { name: "2024년 NEW 시즌2 띠부씰 도감", period: "2024.04.19", id: "serise_2024_1" },
  { name: "2024년 메가진화 띠부씰 도감", period: "2024.05.03", id: "serise_2024_2" },
  { name: "2024년 픽셀아트 띠부씰 도감", period: "2024.07.25", id: "serise_2024_3" },
  { name: "2024년 NEW 시즌3 띠부씰 도감", period: "2024.11.27", id: "serise_2024_4" },
  { name: "2025년 포켓피스 띠부씰 도감", period: "2025.02.21", id: "serise_2025_1" },
]

const __useRouter = useRouter()
</script>

<style lang="scss">
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
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;

    .name {
      margin-left: auto;
      margin-top: auto;
      font-size: 18px;
      font-weight: 700;
    }

    .period {
      margin-left: auto;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 600;
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
