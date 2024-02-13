import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'root',
        meta: { title: '首页' },
        component: () => import('@/views/LayoutView.vue'),
        redirect: '/main/home',
        children: [
            {
                path: 'main',
                name: 'main',
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'home',
                        name: 'home',
                        meta: { title: '赛艇皮划艇赛事管理系统' },
                        component: () => import('@/views/main/home/HomeView.vue'),
                    },
                ],
            },
            {
                path: 'coach',
                name: 'coach',
                meta: { title: '教练员' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'coach_rowing',
                        meta: { title: '赛艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'coach_rowing_annual-register',
                                meta: { title: '年度注册' },
                                component: () => import('@/views/main/coach/rowing/CoachRowRegister.vue'),
                            },
                            {
                                path: 'train-information',
                                name: 'coach_rowing_train-information',
                                meta: { title: '培训信息' },
                                component: () => import('@/views/main/coach/rowing/CoachRowTrain.vue'),
                            },
                            {
                                path: 'coach-information',
                                name: 'coach_rowing_coach-information',
                                meta: { title: '教练员信息' },
                                component: () => import('@/views/main/coach/rowing/CoachRowInfo.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'coach_kayaking',
                        meta: { title: '皮划艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'coach_kayaking_annual-register',
                                meta: { title: '年度注册' },
                                component: () => import('@/views/main/coach/kayaking/CoachKayakRegister.vue'),
                            },
                            {
                                path: 'train-information',
                                name: 'coach_kayaking_train-information',
                                meta: { title: '培训信息' },
                                component: () => import('@/views/main/coach/kayaking/CoachKayakTrain.vue'),
                            },
                            {
                                path: 'coach-information',
                                name: 'coach_kayaking_coach-information',
                                meta: { title: '教练员信息' },
                                component: () => import('@/views/main/coach/kayaking/CoachKayakInfo.vue'),
                            },
                        ],
                    },
                ]
            },
            {
                path: 'referee',
                name: 'referee',
                meta: { title: '裁判员' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'referee_rowing',
                        meta: { title: '赛艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'referee_rowing_annual-register',
                                meta: { title: '年度注册' },
                                component: () => import('@/views/main/referee/rowing/RefereeRowRegister.vue'),
                            },
                            {
                                path: 'train-information',
                                name: 'referee_rowing_train-information',
                                meta: { title: '培训信息' },
                                component: () => import('@/views/main/referee/rowing/RefereeRowTrain.vue'),
                            },
                            {
                                path: 'competition-dispatch',
                                name: 'referee_rowing_competition-dispatch',
                                meta: { title: '比赛派遣' },
                                component: () => import('@/views/main/referee/rowing/RefereeRowDispatch.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'referee_kayaking',
                        meta: { title: '皮划艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'referee_kayaking_annual-register',
                                meta: { title: '年度注册' },
                                component: () => import('@/views/main/referee/kayaking/RefereeKayakRegister.vue'),
                            },
                            {
                                path: 'train-information',
                                name: 'referee_kayaking_train-information',
                                meta: { title: '培训信息' },
                                component: () => import('@/views/main/referee/kayaking/RefereeKayakTrain.vue'),
                            },
                            {
                                path: 'competition-dispatch',
                                name: 'referee_kayaking_competition-dispatch',
                                meta: { title: '比赛派遣' },
                                component: () => import('@/views/main/referee/kayaking/RefereeKayakDispatch.vue'),
                            },
                        ],
                    },
                ]
            },
            {
                path: 'athlete',
                name: 'athlete',
                meta: { title: '运动员' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'athlete_rowing',
                        meta: { title: '赛艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'athlete_rowing_annual-register',
                                meta: { title: '年度注册' },
                                component: () => import('@/views/main/athlete/rowing/AthleteRowRegister.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'athlete_kayaking',
                        meta: { title: '皮划艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'athlete_kayaking_annual-register',
                                meta: { title: '年度注册' },
                                component: () => import('@/views/main/athlete/kayaking/AthleteKayakRegister.vue'),
                            },
                        ],
                    },
                ]
            },
            {
                path: 'information',
                name: 'information',
                meta: { title: '赛事信息' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'information_rowing',
                        meta: { title: '赛艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'competition-calendar',
                                name: 'information_rowing_competition-calendar',
                                meta: { title: '年度赛事日历公告' },
                                component: () => import('@/views/main/information/rowing/InfoRowCalendar.vue'),
                            },
                            {
                                path: 'competition-sign-up',
                                name: 'information_rowing_competition-sign-up',
                                meta: { title: '赛事信息与报名' },
                                component: () => import('@/views/main/information/rowing/InfoRowSignUp.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'information_kayaking',
                        meta: { title: '皮划艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'competition-calendar',
                                name: 'information_kayaking_competition-calendar',
                                meta: { title: '年度赛事日历公告' },
                                component: () => import('@/views/main/information/kayaking/InfoKayakCalendar.vue'),
                            },
                            {
                                path: 'competition-sign-up',
                                name: 'information_kayaking_competition-sign-up',
                                meta: { title: '赛事信息与报名' },
                                component: () => import('@/views/main/information/kayaking/InfoKayakSignUp.vue'),
                            },
                        ],
                    },
                ]
            },
            {
                path: 'results-notice',
                name: 'results-notice',
                meta: { title: '竞赛成绩公告' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'results-notice_rowing',
                        meta: { title: '赛艇' },
                        component: () => import('@/views/main/results_notice/rowing/ResultRowNotice.vue'),
                    },
                    {
                        path: 'kayaking',
                        name: 'results-notice_kayaking',
                        meta: { title: '皮划艇' },
                        component: () => import('@/views/main/results_notice/kayaking/ResultKayakNotice.vue'),
                    },
                ]
            },
            {
                path: 'points',
                name: 'points',
                meta: { title: '积分赛事信息' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'points_rowing',
                        meta: { title: '赛艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'ranking',
                                name: 'points_rowing_ranking',
                                meta: { title: '积分排行榜' },
                                component: () => import('@/views/main/points/rowing/PointsRowRanking.vue'),
                            },
                            {
                                path: 'athlete-information',
                                name: 'points_rowing_athlete-information',
                                meta: { title: '运动员信息' },
                                component: () => import('@/views/main/points/rowing/PointsRowAthleteInfo.vue'),
                            },
                            {
                                path: 'statistic',
                                name: 'points_rowing_statistic',
                                meta: { title: '运动员参赛人数统计（年）' },
                                component: () => import('@/views/main/MainView.vue'),
                                children: [
                                    {
                                        path: 'entry',
                                        name: 'points_rowing_statistic_entry',
                                        meta: { title: '新入榜运动员相关信息' },
                                        component: () => import('@/views/main/MainView.vue'),
                                        children: [
                                            {
                                                path: 'name-list',
                                                name: 'points_rowing_statistic_entry_name-list',
                                                meta: { title: '新入榜运动员名单' },
                                                component: () => import('@/views/main/points/rowing/statistic/entry/RowEntryNameList.vue'),
                                            },
                                            {
                                                path: 'number',
                                                name: 'points_rowing_statistic_entry_number',
                                                meta: { title: '新入榜人数统计' },
                                                component: () => import('@/views/main/points/rowing/statistic/entry/RowEntryNumber.vue'),
                                            },
                                            {
                                                path: 'rate',
                                                name: 'points_rowing_statistic_entry_rate',
                                                meta: { title: '新入榜率' },
                                                component: () => import('@/views/main/points/rowing/statistic/entry/RowEntryRate.vue'),
                                            },
                                        ]
                                    },
                                    {
                                        path: 'retention',
                                        name: 'points_rowing_statistic_retention',
                                        meta: { title: '留榜运动员相关信息' },
                                        component: () => import('@/views/main/MainView.vue'),
                                        children: [
                                            {
                                                path: 'name-list',
                                                name: 'points_rowing_statistic_retention_name-list',
                                                meta: { title: '留榜运动员名单' },
                                                component: () => import('@/views/main/points/rowing/statistic/retention/RowRetentionNameList.vue'),
                                            },
                                            {
                                                path: 'number',
                                                name: 'points_rowing_statistic_retention_number',
                                                meta: { title: '留榜人数统计' },
                                                component: () => import('@/views/main/points/rowing/statistic/retention/RowRetentionNumber.vue'),
                                            },
                                            {
                                                path: 'rate',
                                                name: 'points_rowing_statistic_retention_rate',
                                                meta: { title: '留榜率' },
                                                component: () => import('@/views/main/points/rowing/statistic/retention/RowRetentionRate.vue'),
                                            },
                                        ]
                                    }
                                ],
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'points_kayaking',
                        meta: { title: '皮划艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'ranking',
                                name: 'points_kayaking_ranking',
                                meta: { title: '积分排行榜' },
                                component: () => import('@/views/main/points/kayaking/PointsKayakRanking.vue'),
                            },
                            {
                                path: 'athlete-information',
                                name: 'points_kayaking_athlete-information',
                                meta: { title: '运动员信息' },
                                component: () => import('@/views/main/points/kayaking/PointsKayakAthleteInfo.vue'),
                            },
                            {
                                path: 'statistic',
                                name: 'points_kayaking_statistic',
                                meta: { title: '运动员参赛人数统计（年）' },
                                component: () => import('@/views/main/MainView.vue'),
                                children: [
                                    {
                                        path: 'entry',
                                        name: 'points_kayaking_statistic_entry',
                                        meta: { title: '新入榜运动员相关信息' },
                                        component: () => import('@/views/main/MainView.vue'),
                                        children: [
                                            {
                                                path: 'name-list',
                                                name: 'points_kayaking_statistic_entry_name-list',
                                                meta: { title: '新入榜运动员名单' },
                                                component: () => import('@/views/main/points/kayaking/statistic/entry/KayakEntryNameList.vue'),
                                            },
                                            {
                                                path: 'number',
                                                name: 'points_kayaking_statistic_entry_number',
                                                meta: { title: '新入榜人数统计' },
                                                component: () => import('@/views/main/points/kayaking/statistic/entry/KayakEntryNumber.vue'),
                                            },
                                            {
                                                path: 'rate',
                                                name: 'points_kayaking_statistic_entry_rate',
                                                meta: { title: '新入榜率' },
                                                component: () => import('@/views/main/points/kayaking/statistic/entry/KayakEntryRate.vue'),
                                            },
                                        ]
                                    },
                                    {
                                        path: 'retention',
                                        name: 'points_kayaking_statistic_retention',
                                        meta: { title: '留榜运动员相关信息' },
                                        component: () => import('@/views/main/MainView.vue'),
                                        children: [
                                            {
                                                path: 'name-list',
                                                name: 'points_kayaking_statistic_retention_name-list',
                                                meta: { title: '留榜运动员名单' },
                                                component: () => import('@/views/main/points/kayaking/statistic/retention/KayakRetentionNameList.vue'),
                                            },
                                            {
                                                path: 'number',
                                                name: 'points_kayaking_statistic_retention_number',
                                                meta: { title: '留榜人数统计' },
                                                component: () => import('@/views/main/points/kayaking/statistic/retention/KayakRetentionNumber.vue'),
                                            },
                                            {
                                                path: 'rate',
                                                name: 'points_kayaking_statistic_retention_rate',
                                                meta: { title: '留榜率' },
                                                component: () => import('@/views/main/points/kayaking/statistic/retention/KayakRetentionRate.vue'),
                                            },
                                        ]
                                    }
                                ],
                            },
                        ],
                    },
                ]
            },
            {
                path: 'manage-notice',
                name: 'manage-notice',
                meta: { title: '中国皮划艇协会管理相关公告' },
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'manage-notice_rowing',
                        meta: { title: '赛艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'referee-notice',
                                name: 'manage-notice_rowing_referee-notice',
                                meta: { title: '裁判员相关公告' },
                                component: () => import('@/views/main/manage_notice/rowing/NoticeRowRefereeRelated.vue'),
                            },
                            {
                                path: 'coach-notice',
                                name: 'manage-notice_rowing_coach-notice',
                                meta: { title: '教练员相关公告' },
                                component: () => import('@/views/main/manage_notice/rowing/NoticeRowCoachRelated.vue'),
                            },
                            {
                                path: 'athlete-notice',
                                name: 'manage-notice_rowing_athlete-notice',
                                meta: { title: '运动员相关公告' },
                                component: () => import('@/views/main/manage_notice/rowing/NoticeRowAthleteRelated.vue'),
                            },
                            {
                                path: 'policy-notice',
                                name: 'manage-notice_rowing_policy-notice',
                                meta: { title: '管理政策与制度相关公告' },
                                component: () => import('@/views/main/manage_notice/rowing/NoticeRowPolicyRelated.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'manage-notice_kayaking',
                        meta: { title: '皮划艇' },
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'referee-notice',
                                name: 'manage-notice_kayaking_referee-notice',
                                meta: { title: '裁判员相关公告' },
                                component: () => import('@/views/main/manage_notice/kayaking/NoticeKayakRefereeRelated.vue'),
                            },
                            {
                                path: 'coach-notice',
                                name: 'manage-notice_kayaking_coach-notice',
                                meta: { title: '教练员相关公告' },
                                component: () => import('@/views/main/manage_notice/kayaking/NoticeKayakCoachRelated.vue'),
                            },
                            {
                                path: 'athlete-notice',
                                name: 'manage-notice_kayaking_athlete-notice',
                                meta: { title: '运动员相关公告' },
                                component: () => import('@/views/main/manage_notice/kayaking/NoticeKayakAthleteRelated.vue'),
                            },
                            {
                                path: 'policy-notice',
                                name: 'manage-notice_kayaking_policy-notice',
                                meta: { title: '管理政策与制度相关公告' },
                                component: () => import('@/views/main/manage_notice/kayaking/NoticeKayakPolicyRelated.vue'),
                            },
                        ],
                    },
                ]
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

export default router
