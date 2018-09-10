import Vue from 'vue'
import Vuex from 'vuex'
// import userInfo from './userInfo'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: sessionStorage.getItem("token")||'',
        userId: sessionStorage.getItem("userId")||'',
        userHire: sessionStorage.getItem("userHire")||'',
        usergeneralize: sessionStorage.getItem("usergeneralize")||'',
        userphone: sessionStorage.getItem("userphone")||'',
        baseImgUrl: "http://service.ruizhixue.cn/ceshi/video/yi/",
        // 接口请求图片前缀
        apiImgUrl: 'http://192.168.1.189/yiyuan'
        //  baseImgUrl:"http://192.168.1.108/yi/"
    },
    mutations:{
        saveUserId:function(state,userid){
            sessionStorage.setItem("userId",userid);
            state.userId=userid;
        },
        saveUsergeneralize:function(state,usergeneralize){
            sessionStorage.setItem("usergeneralize",usergeneralize);
            state.usergeneralize=usergeneralize;
        },
        saveUserPhone:function(state,userphone){
            sessionStorage.setItem("userphone",userphone);
            state.userphone=userphone;
        },
        saveUserHire:function(state,userHire){
            sessionStorage.setItem("userHire",userHire);
            state.userHire=userHire;
        },
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
        
    }
});