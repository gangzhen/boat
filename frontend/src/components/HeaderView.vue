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
    $route(to, from) {
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

        <span class="header-user-item">admin</span>
        <el-dropdown-menu slot="dropdown" style="color: #000000">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style>
.header-area {
  display: flex;
  height: 100%;
}

.header-breadcrumb {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
}

.header-user {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}

.header-user-item {
  color: #000000;
  font-size: 16px;
  font-weight: bolder;
}

.el-breadcrumb__inner.is-link:hover {
  color: #F1D792;
}

.el-dropdown-menu__item {
  color: #000000;
}
</style>