<template>
  <div class="default-layout">
    <div class="navi">
      qwe
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.default-layout {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(242, 244, 243);

  .content {
    height: calc(100% - 60px);
    padding: 30px 0;
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
  }

  .navi {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    width: 100%;
    min-height: 60px;
    top: 0;
    z-index: 1;
    background: rgba(255, 255, 255, 1);
  }
}
</style>