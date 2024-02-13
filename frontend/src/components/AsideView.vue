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
          icon: "coach",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "rowing",
              children: [
                {
                  name: "年度注册",
                  path: "/coach/rowing/annual-register",
                  icon: "register",
                  children: []
                },
                {
                  name: "培训信息",
                  path: "/coach/rowing/train-information",
                  icon: "training",
                  children: []
                },
                {
                  name: "教练员信息",
                  path: "/coach/rowing/coach-information",
                  icon: "information",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "kayaking",
              children: [
                {
                  name: "年度注册",
                  path: "/coach/kayaking/annual-register",
                  icon: "register",
                  children: []
                },
                {
                  name: "培训信息",
                  path: "/coach/kayaking/train-information",
                  icon: "training",
                  children: []
                },
                {
                  name: "教练员信息",
                  path: "/coach/kayaking/coach-information",
                  icon: "information",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "裁判员",
          path: "裁判员",
          icon: "referee",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "rowing",
              children: [
                {
                  name: "年度注册",
                  path: "/referee/rowing/annual-register",
                  icon: "register",
                  children: []
                },
                {
                  name: "培训信息",
                  path: "/referee/rowing/train-information",
                  icon: "training",
                  children: []
                },
                {
                  name: "比赛派遣",
                  path: "/referee/rowing/competition-dispatch",
                  icon: "dispatch",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "kayaking",
              children: [
                {
                  name: "年度注册",
                  path: "/referee/kayaking/annual-register",
                  icon: "register",
                  children: []
                },
                {
                  name: "培训信息",
                  path: "/referee/kayaking/train-information",
                  icon: "training",
                  children: []
                },
                {
                  name: "比赛派遣",
                  path: "/referee/kayaking/competition-dispatch",
                  icon: "dispatch",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "运动员",
          path: "运动员",
          icon: "athlete",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "rowing",
              children: [
                {
                  name: "年度注册",
                  path: "/athlete/rowing/annual-register",
                  icon: "register",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "kayaking",
              children: [
                {
                  name: "年度注册",
                  path: "/athlete/kayaking/annual-register",
                  icon: "register",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "赛事信息",
          path: "赛事信息",
          icon: "competition",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "rowing",
              children: [
                {
                  name: "年度赛事日历公告",
                  path: "/information/rowing/competition-calendar",
                  icon: "calendar",
                  children: []
                },
                {
                  name: "赛事信息与报名",
                  path: "/information/rowing/competition-sign-up",
                  icon: "sign_up",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "kayaking",
              children: [
                {
                  name: "年度赛事日历公告",
                  path: "/information/kayaking/competition-calendar",
                  icon: "calendar",
                  children: []
                },
                {
                  name: "赛事信息与报名",
                  path: "/information/kayaking/competition-sign-up",
                  icon: "sign_up",
                  children: []
                },
              ],
            },
          ],
        },
        {
          name: "竞赛成绩公告",
          path: "竞赛成绩公告",
          icon: "results_notice",
          children: [
            {
              name: "赛艇",
              path: "/results-notice/rowing",
              icon: "rowing",
              children: [],
            },
            {
              name: "皮划艇",
              path: "/results-notice/kayaking",
              icon: "kayaking",
              children: [],
            },
          ],
        },
        {
          name: "积分赛事信息",
          path: "积分赛事信息",
          icon: "points",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "rowing",
              children: [
                {
                  name: "积分排行榜",
                  path: "/points/rowing/ranking",
                  icon: "ranking",
                  children: []
                },
                {
                  name: "运动员信息",
                  path: "/points/rowing/athlete-information",
                  icon: "athlete_information",
                  children: []
                },
                {
                  name: "运动员参赛人数统计（年）",
                  path: "运动员参赛人数统计（年）",
                  icon: "statistic",
                  children: [
                    {
                      name: "留榜运动员相关信息",
                      path: "留榜运动员相关信息",
                      icon: "retention",
                      children: [
                        {
                          name: "留榜运动员名单",
                          path: "/points/rowing/statistic/entry/name-list",
                          icon: "nameList",
                          children: []
                        },
                        {
                          name: "留榜人数统计",
                          path: "/points/rowing/statistic/entry/number",
                          icon: "number",
                          children: []
                        },
                        {
                          name: "留榜率",
                          path: "/points/rowing/statistic/entry/rate",
                          icon: "rate",
                          children: []
                        },
                      ]
                    },
                    {
                      name: "新入榜运动员相关信息",
                      path: "新入榜运动员相关信息",
                      icon: "entry",
                      children: [
                        {
                          name: "新入榜运动员名单",
                          path: "/points/rowing/statistic/retention/name-list",
                          icon: "nameList",
                          children: []
                        },
                        {
                          name: "新入榜人数统计",
                          path: "/points/rowing/statistic/retention/number",
                          icon: "number",
                          children: []
                        },
                        {
                          name: "新入榜率",
                          path: "/points/rowing/statistic/retention/rate",
                          icon: "rate",
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
              icon: "kayaking",
              children: [
                {
                  name: "积分排行榜",
                  path: "/points/kayaking/ranking",
                  icon: "ranking",
                  children: []
                },
                {
                  name: "运动员信息",
                  path: "/points/kayaking/athlete-information",
                  icon: "athlete_information",
                  children: []
                },
                {
                  name: "运动员参赛人数统计（年）",
                  path: "运动员参赛人数统计（年）",
                  icon: "statistic",
                  children: [
                    {
                      name: "留榜运动员相关信息",
                      path: "留榜运动员相关信息",
                      icon: "retention",
                      children: [
                        {
                          name: "留榜运动员名单",
                          path: "/points/kayaking/statistic/entry/name-list",
                          icon: "nameList",
                          children: []
                        },
                        {
                          name: "留榜人数统计",
                          path: "/points/kayaking/statistic/entry/number",
                          icon: "number",
                          children: []
                        },
                        {
                          name: "留榜率",
                          path: "/points/kayaking/statistic/entry/rate",
                          icon: "rate",
                          children: []
                        },
                      ]
                    },
                    {
                      name: "新入榜运动员相关信息",
                      path: "新入榜运动员相关信息",
                      icon: "entry",
                      children: [
                        {
                          name: "新入榜运动员名单",
                          path: "/points/kayaking/statistic/retention/name-list",
                          icon: "nameList",
                          children: []
                        },
                        {
                          name: "新入榜人数统计",
                          path: "/points/kayaking/statistic/retention/number",
                          icon: "number",
                          children: []
                        },
                        {
                          name: "新入榜率",
                          path: "/points/kayaking/statistic/retention/rate",
                          icon: "rate",
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
          icon: "manage_notice",
          children: [
            {
              name: "赛艇",
              path: "赛艇",
              icon: "rowing",
              children: [
                {
                  name: "裁判员相关公告",
                  path: "/manage-notice/rowing/referee-notice",
                  icon: "referee",
                  children: []
                },
                {
                  name: "教练员相关公告",
                  path: "/manage-notice/rowing/coach-notice",
                  icon: "coach",
                  children: []
                },
                {
                  name: "运动员相关公告",
                  path: "/manage-notice/rowing/athlete-notice",
                  icon: "athlete",
                  children: []
                },
                {
                  name: "管理制度与政策相关公告",
                  path: "/manage-notice/rowing/policy-notice",
                  icon: "policy",
                  children: []
                },
              ],
            },
            {
              name: "皮划艇",
              path: "皮划艇",
              icon: "kayaking",
              children: [
                {
                  name: "裁判员相关公告",
                  path: "/manage-notice/kayaking/referee-notice",
                  icon: "referee",
                  children: []
                },
                {
                  name: "教练员相关公告",
                  path: "/manage-notice/kayaking/coach-notice",
                  icon: "coach",
                  children: []
                },
                {
                  name: "运动员相关公告",
                  path: "/manage-notice/kayaking/athlete-notice",
                  icon: "athlete",
                  children: []
                },
                {
                  name: "管理制度与政策相关公告",
                  path: "/manage-notice/kayaking/policy-notice",
                  icon: "policy",
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
    goHome() {
      this.$router.push('/')
    },
    menuSelect(index) {
      this.activeIndex = index;
    },
  }
}
</script>

<template>
  <div class="aside-area">
    <div class="aside-logo">
      <img src="@/assets/img/logo.png" alt="" style="width: 70px; height: 70px; border-radius: 8px; box-shadow: 2px 0 6px rgba(0, 21, 41, .35);" @click="goHome()">
    </div>
    <div class="aside-title">
      <span @click="goHome()">赛艇皮划艇赛事管理系统</span>
    </div>
    <div class="aside-menu">
      <el-menu
          background-color="#CE111A"
          text-color="#FFFFFF"
          active-text-color="#FFFFFF"
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
  overflow: scroll;
}

::-webkit-scrollbar {
  display: none;
}

.aside-logo {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: 120px;
  background-color: #CE111A;
}

.aside-title {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: #FFFFFF;
  background-color: #CE111A;
  font-size: 18px;
  font-weight: bolder;
}

.aside-menu {
  display: flex;
  flex: 1;
}

.el-menu {
  border: none;
  width: 280px;
}
</style>