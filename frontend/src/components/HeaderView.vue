<script>
export default {
  name: "HeaderView",
  data() {
    return {
      breadcrumbList: []
    }
  },
  mounted() {
    this.breadcrumbList = this.$route.matched;
  },
  watch: {
    $route() {
        this.breadcrumbList = this.$route.matched;
    }
  },
}
</script>

<template>
  <div class="header-area">
    <div class="header-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in breadcrumbList" v-if="item.meta.title && item.meta.title === '首页'" :to="{ path: '/' }" :key="item.path">
          {{ item.meta.title }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in breadcrumbList" v-if="item.meta.title && item.meta.title !== '首页'" :key="item.path">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-user">
      <el-dropdown placement="bottom" trigger="click">
        <div class="header-user-area">
          <svg-icon-view class="header-user-icon" icon-file-name="user" color="#000000" />
          <span class="header-user-item">admin</span>
        </div>
        <el-dropdown-menu slot="dropdown" style="color: #000000">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>

</style>