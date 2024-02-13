<script>
import SvgIconView from "@/components/SvgIconView.vue";

export default {
  name: "MenuView",
  components: {SvgIconView},
  props: {
    data: {
      type: Array,
      default: [],
    },
  }
}
</script>

<template>
  <div>
    <template v-for="(item, index) in data">
      <!-- 因为有子集和无子集渲染html标签不一样，所以要分为两种情况
           情况一：有子集的情况：                         -->
      <el-submenu
          :key="index"
          :index="item.path"
          v-if="item.children.length > 0"
      >
        <template slot="title">
          <svg-icon-view class="menu-icon" :icon-file-name=item.icon color="#FFFFFF" />
          <span>{{ item.name }}</span>
        </template>
        <MenuView :data="item.children"></MenuView>
      </el-submenu>
      <!-- 情况二：没子集的情况： -->
      <el-menu-item :key="index" v-else :index="item.path">
        <svg-icon-view class="menu-icon" :icon-file-name=item.icon color="#FFFFFF" />
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<style>

.menu-icon {
  margin-right: 5px;
}

.el-submenu span, .el-menu-item  span{
  font-family: "SourceHanSerif-SemiBold", serif;
}

.el-submenu__title i {
  color: #ffffff;
}

.el-menu-item.is-active {
  background-color: #F1D792 !important;
  font-family: "SourceHanSerif-Bold", serif;
  border-radius: 6px;
  margin: 4px;
}

.el-menu-item.is-active .menu-icon {
  margin-left: -4px;
  color: #FC0E31;
}

.el-menu-item.is-active span {
  font-family: "SourceHanSerif-Heavy", serif;
}
</style>