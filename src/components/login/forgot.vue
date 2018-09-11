<template>
  <div class="exportforgot" id="exportforgot">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back"  v-on:click="back()">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>找回密码</span>
      <span class="exit"></span>
    </div>
    <div class="userins">
        <div class="pass_inner">
            <span class="pass_label">手机号：</span>
            <p class="user_tel">
                <img :src="baseImgUrl+'login_tel_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="phone-icon">
                <input type="tel" v-model="phone" placeholder="请输入手机号" maxlength="11">
            </p>
        </div>
        <div class="pass_inner">
            <span class="pass_label">验证码：</span>
            <p class="user_tel">
                <img :src="baseImgUrl+'login_pass_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="valid-icon">
                <input style="width:140px" type="tel"  v-model="code"  maxlength="6">
            </p> 
            <span class="btn_validefy" v-if="notvalided" @click="createdCode()">获取验证码</span>
            <span class="btn_validefy" v-else> {{timercount}}s</span>
        </div>
        <div class="pass_inner">
            <span class="pass_label">新密码：</span>
            <p class="user_tel">
                <img :src="baseImgUrl+'login_pass_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="valid-icon">
                <input type="password" v-model="password"  maxlength="11">
            </p>
        </div>
    </div>
    <p class="login_button" @click="handleforgot">下一步</p>
  </div>
</template>
<script>
import myCode from '../HelloWorld';
import drawCode from './drawCode'
import api from '../../utils/tool'
import { Toast } from 'mint-ui';
export default {
  components: {
    'drawCode': drawCode,
  },
  name: "forgot",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      notvalided:true,
      timercount:'',
      phone:null,
      password:null,
      code:null,
      timer:null,
      codesraw:[],
    };
  },
  mounted() {

  },
  computed: {},
  methods: {
    back: function() {
      this.$router.back()
    },
     routerGo: function(path) {
      this.$router.push({ name: path });
    },    
    handleforgot(){
      let urlParams = {'phone':this.phone,'password':this.password,'code':this.code};
       api.fetch('/yyyg/pwdfind','POST',urlParams,{headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).then((response)=>{
            if(response.data.code == 200){
              Toast({
                    message: response.data.msg,
                    duration: 2000
                    });
                this.routerGo('login')
            }else{
              Toast({
                message: response.data.msg,
                duration: 2000
                });
            }
        })
    },
    // 生成随机码
    createdCode(){
      if(this.phone){
        let token = this.$store.state.token;
        this.notvalided = false;
        const TIME_COUNT = 60
        if(!this.timer){
          this.timercount = TIME_COUNT;
          this.timer = setInterval(()=>{
            if (this.timercount > 0 && this.timercount <= TIME_COUNT) {
            this.timercount--;
            } else {
            this.notvalided = true;
            clearInterval(this.timer);
            this.timer = null;
            }
          }, 1000)
        }
        
           api.fetch('/yyyg/code','POST',{phone:this.phone,key:"b6eadc5556915ae899995076e473212"}).then((response)=>{
                 if(response.data.code = 200){
                Toast({
                  message:'验证码已发送'
                })
              }else{
                Toast({
                  message:'未知错误'
                })
              }
          })
        }

  }
  }

};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "forgot.css";
</style>
