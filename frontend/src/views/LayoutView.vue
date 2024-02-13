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
      <el-aside width="280px">
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
  background-color: #CE111A;
}

.el-header {
  box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
}

.el-main {
  width: 100%;
  height: 100%;
}

</style>
