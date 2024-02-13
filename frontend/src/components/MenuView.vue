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
  font-weight: bold;
}

.el-submenu__title i {
  color: #FFFFFF;
}

.el-menu-item:hover,
.el-submenu__title:hover,
.el-menu-item:hover .menu-icon,
.el-submenu__title:hover .menu-icon {
  color: #F1D792 !important;
}

.el-menu-item.is-active {
  background-color: #1890FF !important;
  font-weight: bolder;
  border-radius: 6px;
  margin: 4px;
}

.el-menu-item.is-active .menu-icon {
  margin-left: -4px;
  color: #FFFFFF;
}
</style>