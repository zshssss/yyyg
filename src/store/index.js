import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseImgUrl:"http://service.ruizhixue.cn/ceshi/video/yi/"
        //  baseImgUrl:"http://192.168.1.108/yi/"
    },
    mutations: function(){
         
    },
    actions: {
        
    },
    modules: {
        user
    }
});