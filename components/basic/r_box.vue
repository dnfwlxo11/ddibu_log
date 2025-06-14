<template>
  <div class="menu">
    <slot />
    asd
  </div>
</template>

<script setup>
const props = defineProps({
  opacity: {
    type: Number,
    default: 0.8
  },
  color: {
    type: String,
    default: "#343A40"
  },
  background: {
    type: String,
    default: "#F1F3F5"
  },
  radius: {
    type: Number,
    default: 24,
  }
})

const {
  opacity: p_opacity,
  color: p_color,
  background: p_background,
  radius: p_radius,
} = toRefs(props)
</script>

<style lang="scss">
.menu {
  padding: 5px 10px;
  color: v-bind("p_color");
  background: v-bind("p_background");
  border-radius: v-bind("`${p_radius}px`");
}
</style>