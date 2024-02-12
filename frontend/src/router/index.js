import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'root',
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
                        component: () => import('@/views/main/home/HomeView.vue'),
                    },
                ],
            },
            {
                path: 'coach',
                name: 'coach',
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'coach_rowing',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'coach_rowing_annual-register',
                                component: () => import('@/views/main/coach/rowing/CoachRowRegister.vue'),
                            },
                            {
                                path: 'train-information',
                                name: 'coach_rowing_train-information',
                                component: () => import('@/views/main/coach/rowing/CoachRowTrain.vue'),
                            },
                            {
                                path: 'coach-information',
                                name: 'coach_rowing_coach-information',
                                component: () => import('@/views/main/coach/rowing/CoachRowInfo.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'coach_kayaking',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'coach_kayaking_annual-register',
                                component: () => import('@/views/main/coach/kayaking/CoachKayakRegister.vue'),
                            },
                            {
                                path: 'train-information',
                                name: 'coach_kayaking_train-information',
                                component: () => import('@/views/main/coach/kayaking/CoachKayakTrain.vue'),
                            },
                            {
                                path: 'coach-information',
                                name: 'coach_kayaking_coach-information',
                                component: () => import('@/views/main/coach/kayaking/CoachKayakInfo.vue'),
                            },
                        ],
                    },
                ]
            },
            {
                path: 'referee',
                name: 'referee',
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'referee_rowing',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'referee_rowing_annual-register',
                                component: () => import('@/views/main/referee/rowing/RefereeRowRegister.vue'),
                            },
                            {
                                path: 'train-information',
                                name: 'referee_rowing_train-information',
                                component: () => import('@/views/main/referee/rowing/RefereeRowTrain.vue'),
                            },
                            {
                                path: 'competition-dispatch',
                                name: 'referee_rowing_competition-dispatch',
                                component: () => import('@/views/main/referee/rowing/RefereeRowDispatch.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'referee_kayaking',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'referee_kayaking_annual-register',
                                component: () => import('@/views/main/referee/kayaking/RefereeKayakRegister.vue'),
                            },
                            {
                                path: 'train-information',
                                name: 'referee_kayaking_train-information',
                                component: () => import('@/views/main/referee/kayaking/RefereeKayakTrain.vue'),
                            },
                            {
                                path: 'competition-dispatch',
                                name: 'referee_kayaking_competition-dispatch',
                                component: () => import('@/views/main/referee/kayaking/RefereeKayakDispatch.vue'),
                            },
                        ],
                    },
                ]
            },
            {
                path: 'athlete',
                name: 'athlete',
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'athlete_rowing',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'athlete_rowing_annual-register',
                                component: () => import('@/views/main/athlete/rowing/AthleteRowRegister.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'athlete_kayaking',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'annual-register',
                                name: 'athlete_kayaking_annual-register',
                                component: () => import('@/views/main/athlete/kayaking/AthleteKayakRegister.vue'),
                            },
                        ],
                    },
                ]
            },
            {
                path: 'information',
                name: 'information',
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'information_rowing',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'competition-calendar',
                                name: 'information_rowing_competition-calendar',
                                component: () => import('@/views/main/information/rowing/InfoRowCalendar.vue'),
                            },
                            {
                                path: 'competition-sign-up',
                                name: 'information_rowing_competition-sign-up',
                                component: () => import('@/views/main/information/rowing/InfoRowSignUp.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'information_kayaking',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'competition-calendar',
                                name: 'information_kayaking_competition-calendar',
                                component: () => import('@/views/main/information/kayaking/InfoKayakCalendar.vue'),
                            },
                            {
                                path: 'competition-sign-up',
                                name: 'information_kayaking_competition-sign-up',
                                component: () => import('@/views/main/information/kayaking/InfoKayakSignUp.vue'),
                            },
                        ],
                    },
                ]
            },
            {
                path: 'results-notice',
                name: 'results-notice',
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'results-notice_rowing',
                        component: () => import('@/views/main/results_notice/rowing/ResultRowNotice.vue'),
                    },
                    {
                        path: 'kayaking',
                        name: 'results-notice_kayaking',
                        component: () => import('@/views/main/results_notice/kayaking/ResultKayakNotice.vue'),
                    },
                ]
            },
            {
                path: 'points',
                name: 'points',
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'points_rowing',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'ranking',
                                name: 'points_rowing_ranking',
                                component: () => import('@/views/main/points/rowing/PointsRowRanking.vue'),
                            },
                            {
                                path: 'athlete-information',
                                name: 'points_rowing_athlete-information',
                                component: () => import('@/views/main/points/rowing/PointsRowAthleteInfo.vue'),
                            },
                            {
                                path: 'statistic',
                                name: 'points_rowing_statistic',
                                component: () => import('@/views/main/MainView.vue'),
                                children: [
                                    {
                                        path: 'entry',
                                        name: 'points_rowing_statistic_entry',
                                        component: () => import('@/views/main/MainView.vue'),
                                        children: [
                                            {
                                                path: 'name-list',
                                                name: 'points_rowing_statistic_entry_name-list',
                                                component: () => import('@/views/main/points/rowing/statistic/entry/RowEntryNameList.vue'),
                                            },
                                            {
                                                path: 'number',
                                                name: 'points_rowing_statistic_entry_number',
                                                component: () => import('@/views/main/points/rowing/statistic/entry/RowEntryNumber.vue'),
                                            },
                                            {
                                                path: 'rate',
                                                name: 'points_rowing_statistic_entry_rate',
                                                component: () => import('@/views/main/points/rowing/statistic/entry/RowEntryRate.vue'),
                                            },
                                        ]
                                    },
                                    {
                                        path: 'retention',
                                        name: 'points_rowing_statistic_retention',
                                        component: () => import('@/views/main/MainView.vue'),
                                        children: [
                                            {
                                                path: 'name-list',
                                                name: 'points_rowing_statistic_retention_name-list',
                                                component: () => import('@/views/main/points/rowing/statistic/retention/RowRetentionNameList.vue'),
                                            },
                                            {
                                                path: 'number',
                                                name: 'points_rowing_statistic_retention_number',
                                                component: () => import('@/views/main/points/rowing/statistic/retention/RowRetentionNumber.vue'),
                                            },
                                            {
                                                path: 'rate',
                                                name: 'points_rowing_statistic_retention_rate',
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
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'ranking',
                                name: 'points_kayaking_ranking',
                                component: () => import('@/views/main/points/kayaking/PointsKayakRanking.vue'),
                            },
                            {
                                path: 'athlete-information',
                                name: 'points_kayaking_athlete-information',
                                component: () => import('@/views/main/points/kayaking/PointsKayakAthleteInfo.vue'),
                            },
                            {
                                path: 'statistic',
                                name: 'points_kayaking_statistic',
                                component: () => import('@/views/main/MainView.vue'),
                                children: [
                                    {
                                        path: 'entry',
                                        name: 'points_kayaking_statistic_entry',
                                        component: () => import('@/views/main/MainView.vue'),
                                        children: [
                                            {
                                                path: 'name-list',
                                                name: 'points_kayaking_statistic_entry_name-list',
                                                component: () => import('@/views/main/points/kayaking/statistic/entry/KayakEntryNameList.vue'),
                                            },
                                            {
                                                path: 'number',
                                                name: 'points_kayaking_statistic_entry_number',
                                                component: () => import('@/views/main/points/kayaking/statistic/entry/KayakEntryNumber.vue'),
                                            },
                                            {
                                                path: 'rate',
                                                name: 'points_kayaking_statistic_entry_rate',
                                                component: () => import('@/views/main/points/kayaking/statistic/entry/KayakEntryRate.vue'),
                                            },
                                        ]
                                    },
                                    {
                                        path: 'retention',
                                        name: 'points_kayaking_statistic_retention',
                                        component: () => import('@/views/main/MainView.vue'),
                                        children: [
                                            {
                                                path: 'name-list',
                                                name: 'points_kayaking_statistic_retention_name-list',
                                                component: () => import('@/views/main/points/kayaking/statistic/retention/KayakRetentionNameList.vue'),
                                            },
                                            {
                                                path: 'number',
                                                name: 'points_kayaking_statistic_retention_number',
                                                component: () => import('@/views/main/points/kayaking/statistic/retention/KayakRetentionNumber.vue'),
                                            },
                                            {
                                                path: 'rate',
                                                name: 'points_kayaking_statistic_retention_rate',
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
                component: () => import('@/views/main/MainView.vue'),
                children: [
                    {
                        path: 'rowing',
                        name: 'manage-notice_rowing',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'referee-notice',
                                name: 'manage-notice_rowing_referee-notice',
                                component: () => import('@/views/main/manage_notice/rowing/NoticeRowRefereeRelated.vue'),
                            },
                            {
                                path: 'coach-notice',
                                name: 'manage-notice_rowing_coach-notice',
                                component: () => import('@/views/main/manage_notice/rowing/NoticeRowCoachRelated.vue'),
                            },
                            {
                                path: 'athlete-notice',
                                name: 'manage-notice_rowing_athlete-notice',
                                component: () => import('@/views/main/manage_notice/rowing/NoticeRowAthleteRelated.vue'),
                            },
                            {
                                path: 'policy-notice',
                                name: 'manage-notice_rowing_policy-notice',
                                component: () => import('@/views/main/manage_notice/rowing/NoticeRowPolicyRelated.vue'),
                            },
                        ],
                    },
                    {
                        path: 'kayaking',
                        name: 'manage-notice_kayaking',
                        component: () => import('@/views/main/MainView.vue'),
                        children: [
                            {
                                path: 'referee-notice',
                                name: 'manage-notice_kayaking_referee-notice',
                                component: () => import('@/views/main/manage_notice/kayaking/NoticeKayakRefereeRelated.vue'),
                            },
                            {
                                path: 'coach-notice',
                                name: 'manage-notice_kayaking_coach-notice',
                                component: () => import('@/views/main/manage_notice/kayaking/NoticeKayakCoachRelated.vue'),
                            },
                            {
                                path: 'athlete-notice',
                                name: 'manage-notice_kayaking_athlete-notice',
                                component: () => import('@/views/main/manage_notice/kayaking/NoticeKayakAthleteRelated.vue'),
                            },
                            {
                                path: 'policy-notice',
                                name: 'manage-notice_kayaking_policy-notice',
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
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

export default router
