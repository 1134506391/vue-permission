import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import News from '@/components/news'
import NewsDetail from '@/components/newsDetail'

Vue.use(Router)

// 默认路由
export default new Router({
    routes: [{
        path: '/login',
        name: 'Login',
        component: Login
    }]
})

//要增加的路由
export const routers = [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
            path: 'news',
            name: 'News',
            component: News
        },
        {
            path: 'newsDetail',
            name: 'NewsDetail',
            component: NewsDetail
        },
    ]
}, ]

export const routersB = [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
        path: 'news',
        name: 'News',
        component: News
    }]
}]
