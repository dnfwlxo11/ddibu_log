<template>
  <div class="seals">
    <div 
      class="seal"
      :class="{ clicked: _selectedSeal.includes(number)  }"
      v-for="(number, idx) of (1, 159)" 
      @click="f_clickSeal(number)"
    >
      <img :src="`/seal/pokemon/serise_2022_1/pokemon_seal_serise_2022_1_${number}.png`" alt="">
    </div>
  </div>
</template>

<script setup>
const _selectedSeal = ref([])
const f_clickSeal = (number) => {
  console.log(_selectedSeal.value.includes(number))
  if (_selectedSeal.value.includes(number)) {
    _selectedSeal.value = _selectedSeal.value.filter(e => e !== number)
    console.log(_selectedSeal.value)
    return
  }

  _selectedSeal.value.push(number)
  console.log(_selectedSeal.value)
}
</script>

<style lang="scss">
.seals {
  width: 100%;
  grid-template-columns: repeat(auto-fill, 138px);
  display: grid;
  gap: 15px;

  .seal {
    position: relative;
    width: 138px;
    height: 180px;
    aspect-ratio: 9 / 16;
    
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px solid #606060;
      pointer-events: none;
      z-index: 1;
    }

    &.clicked {
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        pointer-events: none;
        z-index: 1;
      }
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
    }
  }
}
</style>