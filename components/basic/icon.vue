<template>
  <div 
    class="btn"
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
    default: "black",
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
.btn {
  mask-repeat: no-repeat;
  mask-size: contain;
}
</style>
