<template>
  <div 
    class="icon"
    :style="{
      width : p_width,
      height : p_height,
      'mask-image': `url(${p_src})`,
      '-webkit-mask-image': `url(${p_src})`,
      'background-color': p_color
    }">
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "24px"
  },
  height: {
    type: String,
    default: "24px"
  },
  src: {
    type: String,
  },
  color: {
    type: String,
    default: "rgba(8, 14, 11, 0.8)",
  }
})

const {
  width: p_width,
  height: p_height,
  src: p_src,
  color: p_color,
} = toRefs(props)
</script>

<style lang="scss" scoped>
.icon {
  mask-repeat: no-repeat;
  mask-size: contain;
  cursor: pointer;
}
</style>
