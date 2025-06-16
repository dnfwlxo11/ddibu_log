<template>
  <Teleport to="body">
    <div class="modal-wrapper" @click.self="emits('close')">
      <div class="modal-content">
        <div class="modal-header">
          {{ p_title }}
          <BasicIcon class="icon" src="/icons/close.svg" width="24px" height="24px" @click="emits('close')" />
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  }
})

const emits = defineEmits([ 'close' ])

const {
  title: p_title
} = toRefs(props)
</script>

<style lang="scss" scoped>
.modal-wrapper {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;

  .modal-content {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-height: 800px;
    max-width: 1440px;
    background: rgba(255, 255, 255, 1);

    .modal-header {
      display: flex;
      align-items: center;
      height: 50px;
      width: 100%;
      box-sizing: border-box;
      padding: 15px;
      font-size: 16px;
      font-weight: 600;

      .icon {
        margin-left: auto;
      }
    }

    .modal-body {
      box-sizing: border-box;
      padding: 0 15px;
    }

    .modal-footer {
      box-sizing: border-box;
      padding: 0 15px 15px 15px;
    }
  }
}
</style>