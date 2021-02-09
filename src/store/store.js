import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        baseApiUrl: "http://127.0.0.1:8000/",
        user: '',
        authenticated: false,
        currentPage: 1,
        length: 0,
        perPage: 15,
        filter: false,
    },
    getters: {
        getUser(state){
            return state.user
        },
        getBaseUrl(state){
            return state.baseApiUrl
        },
        getAuthenticated(state){
            return state.authenticated
        },
        getCurrentPage(state){
            return state.currentPage;
        },
        getPerPage(state){
            return state.perPage;
        },
        getFilter(state) {
            return state.filter;
        },
        getLength(state) {
            return state.length;
        }
    },
    mutations: {
        currentPage(state, payload){
            state.currentPage = payload;
        },
        filter(state, payload){
            state.filter = payload;
        },
        length(state, payload){
            state.length = payload;
        },
        authenticated(state, payload){
            state.authenticated = payload;
        },
        user(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        filter(context, payload){
            context.commit('filter', payload);
        },
        currentPage(context, payload){
            context.commit('currentPage', payload);
        },
        length(context, payload){
            context.commit('length', payload);
        },
        authenticated(context, payload){
            context.commit('authenticated', payload);
        },
        user(context, payload){
            context.commit('user', payload);
        }

    }
})