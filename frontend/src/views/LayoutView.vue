<script>
import AsideView from "@/components/AsideView.vue";
import HeaderView from "@/components/HeaderView.vue";
import MainView from "@/views/main/MainView.vue";

export default {
  name: 'LayoutView',
  components: {MainView, HeaderView, AsideView}
}
</script>

<template>
  <div class="b-layout">
    <el-container>
      <el-aside width="300px">
        <AsideView/>
      </el-aside>
      <el-container>
        <el-header>
          <HeaderView/>
        </el-header>
        <el-main>
          <MainView/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.b-layout {
  width: 100%;
  height: 100vh;
}

.el-container {
  height: 100vh;
}

.el-aside {
  height: 100vh;
  background-color: #FC0E31;
}

.el-header {
  border-bottom: solid 1px #31170D;
}

.el-main {
  width: 100%;
}

</style>
