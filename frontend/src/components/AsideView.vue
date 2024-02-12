<script>
import MenuView from "@/components/MenuView.vue";

export default {
  name: "AsideView",
  components: {MenuView},
  data() {
    return {
      activeIndex: this.$route.path,
      menuArr: [
        {
          name: "教练员",
          path: "教练员",
          icon: "el-icon-s-home",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "年度注册",
                  path: "/coach/rowing/annual-register",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "培训信息",
                  path: "/coach/rowing/train-information",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "教练员信息",
                  path: "/coach/rowing/coach-information",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "年度注册",
                  path: "/coach/kayaking/annual-register",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "培训信息",
                  path: "/coach/kayaking/train-information",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "教练员信息",
                  path: "/coach/kayaking/coach-information",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "裁判员",
          path: "裁判员",
          icon: "el-icon-s-cooperation",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "年度注册",
                  path: "/referee/rowing/annual-register",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "培训信息",
                  path: "/referee/rowing/train-information",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "比赛派遣",
                  path: "/referee/rowing/competition-dispatch",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "年度注册",
                  path: "/referee/kayaking/annual-register",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "培训信息",
                  path: "/referee/kayaking/train-information",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "比赛派遣",
                  path: "/referee/kayaking/competition-dispatch",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "运动员",
          path: "运动员",
          icon: "el-icon-s-cooperation",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "年度注册",
                  path: "/athlete/rowing/annual-register",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "年度注册",
                  path: "/athlete/kayaking/annual-register",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "赛事信息",
          path: "赛事信息",
          icon: "el-icon-s-cooperation",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "年度赛事日历公告",
                  path: "/information/rowing/competition-calendar",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "赛事信息与报名",
                  path: "/information/rowing/competition-sign-up",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "年度赛事日历公告",
                  path: "/information/kayaking/competition-calendar",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "赛事信息与报名",
                  path: "/information/kayaking/competition-sign-up",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "竞赛成绩公告",
          path: "竞赛成绩公告",
          icon: "el-icon-s-cooperation",
          children: [
            {
              name: "赛艇",
              path: "/results-notice/rowing",
              icon: "el-icon-star-off",
              children: [],
            },
            {
              name: "皮划艇",
              path: "/results-notice/kayaking",
              icon: "el-icon-star-off",
              children: [],
            },
          ],
        },
        {
          name: "积分赛事信息",
          path: "积分赛事信息",
          icon: "el-icon-s-cooperation",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "积分排行榜",
                  path: "/points/rowing/ranking",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "运动员信息",
                  path: "/points/rowing/athlete-information",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "运动员参赛人数统计（年）",
                  path: "运动员参赛人数统计（年）",
                  icon: "el-icon-star-off",
                  children: [
                    {
                      name: "留榜运动员相关信息",
                      path: "留榜运动员相关信息",
                      icon: "el-icon-star-off",
                      children: [
                        {
                          name: "留榜运动员名单",
                          path: "/points/rowing/statistic/entry/name-list",
                          icon: "el-icon-star-off",
                          children: []
                        },
                        {
                          name: "留榜人数统计",
                          path: "/points/rowing/statistic/entry/number",
                          icon: "el-icon-star-off",
                          children: []
                        },
                        {
                          name: "留榜率",
                          path: "/points/rowing/statistic/entry/rate",
                          icon: "el-icon-star-off",
                          children: []
                        },
                      ]
                    },
                    {
                      name: "新入榜运动员相关信息",
                      path: "新入榜运动员相关信息",
                      icon: "el-icon-star-off",
                      children: [
                        {
                          name: "新入榜运动员名单",
                          path: "/points/rowing/statistic/retention/name-list",
                          icon: "el-icon-star-off",
                          children: []
                        },
                        {
                          name: "新入榜人数统计",
                          path: "/points/rowing/statistic/retention/number",
                          icon: "el-icon-star-off",
                          children: []
                        },
                        {
                          name: "新入榜率",
                          path: "/points/rowing/statistic/retention/rate",
                          icon: "el-icon-star-off",
                          children: []
                        },
                      ]
                    }
                  ]
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "积分排行榜",
                  path: "/points/kayaking/ranking",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "运动员信息",
                  path: "/points/kayaking/athlete-information",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "运动员参赛人数统计（年）",
                  path: "运动员参赛人数统计（年）",
                  icon: "el-icon-star-off",
                  children: [
                    {
                      name: "留榜运动员相关信息",
                      path: "留榜运动员相关信息",
                      icon: "el-icon-star-off",
                      children: [
                        {
                          name: "留榜运动员名单",
                          path: "/points/kayaking/statistic/entry/name-list",
                          icon: "el-icon-star-off",
                          children: []
                        },
                        {
                          name: "留榜人数统计",
                          path: "/points/kayaking/statistic/entry/number",
                          icon: "el-icon-star-off",
                          children: []
                        },
                        {
                          name: "留榜率",
                          path: "/points/kayaking/statistic/entry/rate",
                          icon: "el-icon-star-off",
                          children: []
                        },
                      ]
                    },
                    {
                      name: "新入榜运动员相关信息",
                      path: "新入榜运动员相关信息",
                      icon: "el-icon-star-off",
                      children: [
                        {
                          name: "新入榜运动员名单",
                          path: "/points/kayaking/statistic/retention/name-list",
                          icon: "el-icon-star-off",
                          children: []
                        },
                        {
                          name: "新入榜人数统计",
                          path: "/points/kayaking/statistic/retention/number",
                          icon: "el-icon-star-off",
                          children: []
                        },
                        {
                          name: "新入榜率",
                          path: "/points/kayaking/statistic/retention/rate",
                          icon: "el-icon-star-off",
                          children: []
                        },
                      ]
                    }
                  ]
                },
              ]
            },
          ],
        },
        {
          name: "中国皮划艇协会管理相关公告",
          path: "中国皮划艇协会管理相关公告",
          icon: "el-icon-s-cooperation",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "裁判员相关公告",
                  path: "/manage-notice/rowing/referee-notice",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "教练员相关公告",
                  path: "/manage-notice/rowing/coach-notice",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "运动员相关公告",
                  path: "/manage-notice/rowing/athlete-notice",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "管理制度与政策相关公告",
                  path: "/manage-notice/rowing/policy-notice",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "el-icon-star-off",
              children: [
                {
                  name: "裁判员相关公告",
                  path: "/manage-notice/kayaking/referee-notice",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "教练员相关公告",
                  path: "/manage-notice/kayaking/coach-notice",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "运动员相关公告",
                  path: "/manage-notice/kayaking/athlete-notice",
                  icon: "el-icon-star-off",
                  children: []
                },
                {
                  name: "管理制度与政策相关公告",
                  path: "/manage-notice/kayaking/policy-notice",
                  icon: "el-icon-star-off",
                  children: []
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    menuSelect(index) {
      this.activeIndex = index;
    },
  }
}
</script>

<template>
  <div class="aside-area">
    <div class="aside-logo">
      <img src="@/assets/img/logo.png" alt="" style="width: 70px; height: 70px">
    </div>
    <div class="aside-title">
      <span>赛艇皮划艇赛事管理系统</span>
    </div>
    <div class="aside-menu">
      <el-menu
          background-color="#FC0E31"
          text-color="#31170D"
          active-text-color="#31170D"
          :default-active="activeIndex"
          :unique-opened="true"
          router
          ref="elMenu"
          @select="menuSelect"
      >
        <MenuView :data="menuArr"/>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
.aside-area {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}

.aside-logo {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: 120px;
  background-color: #FC0E31;
}

.aside-title {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #FC0E31;
  font-size: 16px;
  font-family: "SourceHanSerif-Heavy", serif;
}

.aside-menu {
  display: flex;
  flex: 1;
}

.el-menu {
  border: none;
  width: 300px;
}
</style>