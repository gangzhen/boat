<script>
export default {
  name: "MainView"
}
</script>

<template>
  <div class="main-view-area">
    <router-view/>
  </div>
</template>

<style scoped>
.main-view-area {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
}
</style>