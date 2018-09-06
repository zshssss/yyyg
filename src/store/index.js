import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './userInfo'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token:'',
        baseImgUrl:"http://service.ruizhixue.cn/ceshi/video/yi/"
        //  baseImgUrl:"http://192.168.1.108/yi/"
    },
    mutations:{
        saveToken:function(state,token){
            sessionStorage.setItem("token",token);
            state.token=token;
        },
        removeToken:function(state,token){
            sessionStorage.removeItem("token",token);
            state.token=token;
        }
    },
    actions: {
        
    },
    modules: {
        userInfo
    }
});