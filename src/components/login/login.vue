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
            <img :src="baseImgUrl+'login_tel_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="">
            <input type="number" value="" placeholder="请输入手机号" maxlength="11">
        </p>
        <p class="user_tel bn">
            <img :src="baseImgUrl+'login_pass_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="">
            <input type="number" value="" placeholder="请输入密码" maxlength="11">
        </p>
    </div>
    
    <p class="login_button">登录</p>
    <p class="other_info"> 
      <span @click="routerGo('forgot')">忘记密码</span>
      <span @click="routerGo('rigister')">新用户注册</span>
 
    </p>
 
  </div>
</template>
<script>
export default {
  name: "exportorder",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl
    };
  },
  created: function() {},
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path) {
      this.$router.push({ name: path });
    }
  }

  











};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "login.css";
</style>
