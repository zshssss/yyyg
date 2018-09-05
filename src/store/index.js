import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './userInfo'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
<<<<<<< HEAD
 
        baseImgUrl:"http://192.168.1.116/yi/"
        
=======
        baseImgUrl:"http://service.ruizhixue.cn/ceshi/video/yi/"
>>>>>>> 62e16b7ac66156355dae1a022add6f3b35793cbc
        //  baseImgUrl:"http://192.168.1.108/yi/"
    },
    mutations: function(){
         
    },
    actions: {
        
    },
    modules: {
        userInfo
    }
});