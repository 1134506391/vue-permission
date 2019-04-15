// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { routers, routersB } from './router'
import { userData } from './api/user.js'
import store from './store/store'

if (sessionStorage.userInfo) {
    store.commit('SET_USER', JSON.stringify(sessionStorage.USER))
}

Vue.config.productionTip = false
console.log('router')
console.log(router)
router.beforeEach((to, from, next) => {
    if (sessionStorage.USER) {
        let userinfo = JSON.parse(sessionStorage.USER)
        let username = userinfo.username
        let newRouters;
        userData.forEach(item => {
            if (item.username == username) {
                let role = item.role;
                if (role == 'A') {
                    newRouters = routers;
                } else if (role == 'B') {
                    newRouters = routersB;
                }
            }
        })
        store.dispatch('addRouter', newRouters).then(res => {
            router.addRoutes(newRouters)
            next()
        }).catch(() => {
            next('/login')
        })
        next();
    } else {
        if (to.path == '/login') { //如果是首页直接next()
            next();
        } else { //不然就跳转到登录；
            next('/login');
        }
    }
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
