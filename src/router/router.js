import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/view/home.vue'
import LoginPage from '../components/view/login.vue'
import RegisterPage from '../components/view/register.vue'
import RankPage from '../components/view/rank.vue'
import MatchPage from '../components/view/match.vue'
import ResultPage from '../components/view/result.vue'
import CompetitionPage from '../components/view/competition.vue'
import UserProfilePage from '../components/view/user_profile.vue'
import CompetitionRoomPage from '../components/view/competition_room.vue'
import AdminPage from '../components/view/admin.vue'
const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/profile',
        component: UserProfilePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/rank',
        component: RankPage
    },
    {
        path: '/match',
        component: MatchPage
    },
    {
        path: '/result',
        component: ResultPage
    },
    {
        path: '/competition',
        component: CompetitionPage
    },
    {
        path: '/admin',
        component: AdminPage
    },
    {
        path: '/competition-room',
        component: CompetitionRoomPage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router