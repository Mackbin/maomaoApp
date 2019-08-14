import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[{
        path: '/login', name: 'login', component: () => import('@/views/login')
    },{ 
        path: '/movie', name: 'movie', component: () => import('@/views/movie') 
    }, {
        path: '/mine', name: 'mine', component: () => import('@/views/mine')
    }, {
        path: '/cinema', name: 'cinema', component: () => import('@/views/cinema')
    }]
})