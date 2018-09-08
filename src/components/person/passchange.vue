<template>
  <div class="telchange" id="telchange">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_red_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>修改密码</span>
      <span class="exit"></span>
    </div>

    <div class="chage_list">
        <ul>
             
            <li>
                <input class="input_yzm" type="tel" placeholder="请输入手机号码" maxlength="11" v-model="phone">
                <span class="get_yzm" v-if="notvalided" @click="createdCode()">获取验证码</span>
                <span class="get_yzm" v-else> 验证码已发送</span>
            </li>
            <li>
                <input type="tel"  v-model="code" placeholder="请输入验证码">
            </li>
            <li>
                <input type="password" v-model="password" placeholder="请输入密码，6-16位数字或字母">
            </li>
        </ul>
    </div>
    
    <p class="complete" v-on:click="editePassword">修改密码</p>
  </div>
</template>

<script>
import api from '../../utils/tool'
import { Toast } from 'mint-ui';
export default {
  name: "nikename",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl, 
      phone:null,
      code:null,
      notvalided:true,
      password:null
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
    },
       // 生成随机码
      createdCode(){
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
              Toast({
                    message: response.data.msg,
                    duration: 2000
                    });
          })
  },
    editePassword(){
        let phone = this.phone;
        let code = this.code;
        let password = this.password;
        if(password && code && phone){
            let token = this.$store.state.token;
            
            api.fetch('/yyyg/password','POST',{phone:phone,code:code,password:password},{token:token}).then((response)=>{
                  Toast({
                        message: response.data.msg,
                        duration: 2000
                        });
              if(response.data.code === 200){
                  this.$router.go(-1)
              }
          })
          }else{
            Toast({
                  message: '请检查信息完整',
                  duration: 2000
                  });
          }
    },
    clear:function(){
        this.nikeNme='';    
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
