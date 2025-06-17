<template>
  <div class="app">
    <NuxtPage />
  </div>
</template>

<style>
@import url('./assets/fonts.css');

input[type="date"], textarea, button {
  font-family: "Pretendard";
}

input[type="text"] {
  transform: scale(0.75);
  transform-origin: left top;

  margin-bottom: -10px;
  margin-right: -33.33%;
}

#__nuxt {
  display: contents;
}

body {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  margin: 0;
  background: rgb(242, 241, 246);
  overscroll-behavior-y: contain;
  font-family: "Pretendard";
}

.app {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
