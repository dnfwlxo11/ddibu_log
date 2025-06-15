<template>
  <div class="filter">
    <div 
      class="filter-item" 
      :class="{ selected: _selected.includes(category) }"
      v-for="(category, idx) of c_categories"
    >
      <BasicRBox 
        :background="_selected.includes(category) ? '#A6DAF4' : 'rgba(241, 243, 245)'" 
        color="rgba(0, 0, 0, 0.8)"
      >
        {{ category }}
      </BasicRBox>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  },
  selected: {
    type: Array,
    default: () => []
  }
})

const {
  categories: p_categories,
  selected: p_selected,
} = toRefs(props)

const c_categories = computed((categories) => Array.from(new Set(p_categories.value)))

const _selected = ref([])
watch(p_selected, (v) => {
  _selected.value = v
}, { immediate: true })
</script>

<style lang="scss">
.filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .filter-item {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
  
  .selected {

  }
}
</style>