<template>
  <div class="exportorder" id="exportorder">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back">
           <!-- <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt=""> -->
        </span>
       <span>用户登录</span>
      <span class="exit"></span>
    </div>
    <div class="userins">
        <p class="user_tel">
            <img :src="baseImgUrl+'login_tel_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="tel" />
            <input type="tel" v-model="phone" placeholder="请输入手机号" style="width:100%" maxlength="11" />
        </p>
        <p class="user_tel bn">
            <img :src="baseImgUrl+'login_pass_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="password" />
            <input type="password" v-model="password" placeholder="请输入密码" style="width:100%" />
        </p>
    </div>
    
    <p class="login_button" @click="handleLogin">登录</p>
    <p class="other_info"> 
      <span @click="routerGo('forgot')">忘记密码</span>
      <span @click="routerGo('rigister')">新用户注册</span>
 
    </p>
 
  </div>
</template>
<script>
import api from '../../utils/tool'
import { Toast } from 'mint-ui';
 import {
    mapGetters,
    mapMutations,
    mapActions
  } from "vuex";
export default {
  name: "exportorder",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      phone:null,
      password:null,
    };
  },
  created: function() {},
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path) {
      sessionStorage.setItem('user', {name:'admin'})
      this.$router.push({ name: path });
    },
    handleLogin(){

      let formData = {'phone':this.phone,'password':this.password}

      api.fetch('/yyyg/login','post',formData,{}).then((response)=>{ 
          if(response.data.code == 200){
            this.$store.commit("saveToken", response.data.data);
              this.routerGo('index')
          }else{
              Toast({
              message: response.data.msg,
              duration: 5000
            });
          }    
       })
      // this.routerGo('index')
    }
  }

  











};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "login.css";
</style>
