<template>
  <div class="telchange" id="telchange">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_red_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>修改手机</span>
      <span class="exit"></span>
    </div>

    <div class="chage_list">
        <ul>
            <li v-if="showPhone" @click="showPhone=!showPhone">
                <span>当前手机号</span>
                <span>{{this.phone}}</span>
            </li>
             <li v-else>
                <input class="input_yzm" type="tel" placeholder="请输入手机号" maxlength="11" v-model="newPhone">
                <span class="get_yzm"  @click="showPhone=!showPhone">取消</span>
            </li>
            <li>
                <input class="input_yzm" type="tel" placeholder="请输入验证码" length="6" v-model="code">
                <span class="get_yzm" v-if="notvalided" @click="createdCode()">获取验证码</span>
                <span class="get_yzm" v-else> 验证码已发送</span>
            </li>
        </ul>
    </div>
    
    <p class="complete" v-on:click="editePhone">验证</p>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import api from '../../utils/tool'
export default {
  name: "nikename",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl, 
      phone:null,
      newPhone:null,
      code:null,
      showPhone:true,
      notvalided:true,
    };
  },
  created: function() {
    let phone = this.$store.state.userphone
    this.phone = phone
  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path) {
      this.$router.push({ name: path });
    }, 
    changePhone(){

    },
    createdCode(){
      if(this.newPhone){
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
        
           api.fetch('/yyyg/code','POST',{phone:this.newPhone,key:"b6eadc5556915ae899995076e473212"}).then((response)=>{
             if(response.data.code){
               Toast({
                    message: '验证码已发送',
                    duration: 2000
                    });
             }else{
               Toast({
                    message: response.data.msg,
                    duration: 2000
                    });
             }
              
          })
        }else{
            Toast({
                  message: '点击当前手机号填写手机号',
                  duration: 2000
                  });
          }
     
  },
    editePhone(){
        let code = +this.code;
        if(code && !this.showPhone){
            // let phone = this.newPhone;
            let formData ={'phone': this.newPhone,'code': this.code}
         
            api.fetch('/yyyg/phone','POST',formData,{token:this.$store.state.token}).then((response)=>{
              
              if(response.data.code === 200){
                Toast({
                    message: response.data.msg,
                    duration: 2000
                    });
                  this.$router.go(-1)
              }else{
                Toast({
                    message: response.data.msg,
                    duration: 2000
                    });
              }
          })
          }else{
            Toast({
                  message: '填写验证码',
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
