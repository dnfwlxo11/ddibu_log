<template>
  <div class="default-layout">
    <slot />
  </div>
</template>

<style lang="scss">
.default-layout {
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
}
</style>