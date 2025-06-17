<template>
  <div class="default-layout">
    <div class="navi">
      <div class="left-side">
        <img class="logo" src="/logo.png" @click="__useRouter.push('/')">
      </div>
      <div class="middle-side"></div>
      <div class="right-side">
        <BasicIcon src="/icons/settings.svg" width="34px" height="34px" @click="isSetting=true" />
      </div>
    </div>
    <div v-if="isReady" class="content" :class="{ visible: isReady }">
      <slot />
    </div>
    <div v-else class="content">
      데이터 로딩 중
    </div>
    <BasicModal
      v-if="isSetting"
      title="설정" 
      @close="isSetting=false"
    >
      <div class="data-extract">
        데이터 내보내기  
        <button class="btn" @click="f_extractData">내보내기</button>
      </div>
      <div class="data-import">
        데이터 읽어오기
        <button class="btn" @click="f_importData">읽어오기</button>
        <input ref="r_input" class="file-input" type="file" accept=".txt" @change="h_handleFile">
      </div>
      
    </BasicModal>
  </div>
</template>

<script setup>
const __useRouter = useRouter()

const isReady = ref(false)
const isSetting = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    isReady.value = true
  })
})

const f_extractData = () => {
  const data = getLocalStorageItem('ddibu_log')
  const jsonString = JSON.stringify(data, null, 2)
  const extractData = jsonToBase64(jsonString)

  const blob = new Blob([extractData], { type: "text/plain" })
  const url = URL.createObjectURL(blob)

  const downloadTag = document.createElement('a')
  downloadTag.href = url
  downloadTag.download = `${new Date().getTime()}_extractData.txt`
  document.body.appendChild(downloadTag)
  downloadTag.click()

  document.body.removeChild(downloadTag)
  URL.revokeObjectURL(url)
}

const r_input = useTemplateRef('r_input')
const f_importData = () => {
  r_input.value.click()
}

const h_handleFile = (evt) => {
  const file = evt.target.files[0]
  
  if (!file) return
  if (file.type !== 'text/plain') return

  const reader = new FileReader()

  reader.onload = (e) => {
    const stringData = e.target.result
    const jsonData = base64ToJson(stringData)

    try {
      const parsedData = JSON.parse(jsonData)
      localStorage.setItem('ddibu_log', JSON.stringify(parsedData))
      isSetting.value = false
      window.location.reload(true)
    } catch (err) {}
  }

  reader.onerror = () => {}
  reader.readAsText(file)
}
</script>

<style lang="scss">
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F7F8FA;
  overflow: auto;
  min-width: 280px;

  .content {
    opacity: 0;
    transition: opacity 0.5s ease;
    height: 100%;
    width: calc(100% - 160px);
    padding: 40px 0;
    box-sizing: border-box;

    @media screen and (max-width: 640px) {
      width: calc(100% - 80px);
    }

    @media screen and (max-width: 360px) {
      width: calc(100% - 40px);
    }
  }

  .content {
    &.visible {
      opacity: 1;
    }
  }

  .navi {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    width: 100%;
    min-height: 80px;
    top: 0;
    z-index: 2;
    box-sizing: border-box;
    padding: 0 80px;
    background: #F7F8FA;

    @media screen and (max-width: 640px) {
      padding: 0 40px;
    }

    @media screen and (max-width: 360px) {
      padding: 0 20px;
    }
    
    .left-side {
      display: flex;
      align-items: center;
      margin-right: auto;
      font-size: 16px;

      .logo {
        width: 100px;
        margin-right: 10px;

        cursor: pointer;
      }
    }
  }
}

.data-extract,
.data-import {
  display: flex;
  align-items: center;
  height: 50px;

  .btn {
    margin-left: auto;
    border: none;
    
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 8px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
  }
}

.data-extract {
  .btn {
    background: lightcoral;
  }
}

.data-import {
  .btn {
    background: lightblue;
  }
}

.file-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 0px;
  height: 0px;
  visibility: hidden;
}
</style>