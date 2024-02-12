<script>
export default {
  name: "HomeView"
}
</script>

<template>
  <div class="home-area">
    <span class="home-title-zh">赛艇皮划艇赛事管理系统</span>
    <span class="home-title-en">Rowing and Kayaking Event Management System</span>
  </div>
</template>

<style scoped>
.home-area {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.home-title-zh {
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: flex-end;
  font-size: 40px;
}

.home-title-en {
  display: flex;
  flex: 5;
  justify-content: center;
  align-items: flex-start;
  font-size: 16px;
}
</style>