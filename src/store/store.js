import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: '', //用户
        routers: [] //路由
    },
    mutations: {
        SET_USER(state, params) {
            state.user = params
        },
        set_ROUTERS(state, params) {
            state.routers = params
        }
    },
    actions: {
        //登录
        login({ commit }, param) {
            return new Promise((resolve, reject) => {
                commit('SET_USER', param)
                sessionStorage.setItem('USER', param)
                resolve({ code: 200 })
            }).catch(err => {
                reject(err)
            })
        },
        //增加路由
        addRouter({ commit }, param) {
            return new Promise((resolve, reject) => {
                commit('set_ROUTERS', param)
                resolve({ code: 200 })
            }).catch(err => {
                reject(err)
            })
        },
        //退出
        logout({ commit }, param) {
            return new Promise((resolve, reject) => {
                commit('SET_USER', '')
                commit('set_ROUTERS', '')
                location.reload();
                sessionStorage.removeItem('USER')
                resolve({ code: 200 })
            }).catch(err => {
                reject(err)
            })
        },
    }
})


export default store
