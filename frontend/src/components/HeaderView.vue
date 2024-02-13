<script>
export default {
  name: "HeaderView"
}
</script>

<template>
  <div class="header-area">
    <div class="header-breadcrumb">
      面包屑
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

<style scoped>
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
  font-family: "SourceHanSerif-Heavy", serif;
}

.el-dropdown-menu__item {
  color: #000000;
}
</style>