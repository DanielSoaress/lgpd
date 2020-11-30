import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        baseApiUrl: "http://127.0.0.1:8000/api/",
        token: "",
    },
    getters: {
        getUser(state){
            return state.user.login
        },
        getPassword(state){
            return state.user.pass
        },
        getBaseUrl(state){
            return state.baseApiUrl
        }
    },
    mutations: {
        /*logout(state, payload){
            state.logado = payload;
        }*/
    },
    actions: {
        /*logout(context, payload){
            context.commit('logout', payload)
        }*/
    }
})