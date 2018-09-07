<template>
  <div class="exportrigister" id="exportrigister" style="minHeight:unset">
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back"  v-on:click="back()">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>用户注册</span>
      <span class="exit"></span>
    </div>
    <div class="userins">
        <div class="pass_inner">
            <p class="user_tel">
                <img :src="baseImgUrl+'login_tel_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="phone-icon">
                <input type="tel" v-model="phone" placeholder="请输入手机号" maxlength="11">
            </p>
        </div>
        <div class="pass_inner">
            <p class="user_tel" style="flex:1">
                <img :src="baseImgUrl+'login_pass_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="valid-icon">
                <input type="tel" v-model="code" placeholder="请输入验证码"  length="6">
            </p>
            <span class="btn_validefy" v-if="notvalided" @click="createdCode()">获取验证码</span>
            <span class="btn_validefy" v-else> {{timercount}}s</span>
            <!-- <draw-code  v-on:rawRandomCode="createdCode"></draw-code> -->
        </div>
        <div class="pass_inner">
            <p class="user_tel">
                <img :src="baseImgUrl+'login_pass_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="valid-icon">
                <input type="password" v-model="password"  placeholder="请输入密码" maxlength="11">
            </p>
        </div>
        <div class="pass_inner">
            <span class="pass_label" style="color:#888;fontSize:0.64rem;">请输入推广码：</span>
            <div class="extend_code">
                <ul class="write-input clearfix">
                    <input type="tel"   @click="enterPwd" ref="input" maxlength="6" class="realInput" v-model="realInput" @keyup="getNum()"  @keydown="delNum()">
                    <li v-for="(disInput,index) in disInputs" :key="index"><input type="tel" maxlength="1" v-model="disInput.value"></li>
                </ul>
            </div>
        </div>
        <p class="login_button" v-bind:class="{'disable':!isChecked}" style="marginBottom:.4rem;"  @click="handleRegister">注册</p>
        <div class="pass_inner">
            <span class="user_cheack" v-bind:class="{'checked':isChecked}" @click="handleChecked"></span>
            <span class="cheack_maind">我已经阅读并同意<a @click="routerGo($event,'agreement')">用户服务协议</a></span>
        </div>
    </div>
        
    
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
  import {
    mapGetters,
    mapMutations,
    mapActions
  } from "vuex";
import drawCode from './drawCode'
export default {
  name: "rigister",
  components:{
       'drawCode': drawCode,
  },
  data(){
    return{
        baseImgUrl: this.$store.state.baseImgUrl,
        messagepacket:false,
        packets:[

        ],
        disInputs:[{value:''},{value:''},{value:''},{value:''},{value:''},{value:''}],
        realInput:'',
        phone:null,
        password:null,
        code:null,
        varifcode:'',
        isChecked:false,
        notvalided:true,
        timercount:'',
        timer:null,
        
    }
  },
  mounted(){
  
  },
  methods:{
    back: function() {
      this.$router.back()
    },
    routerGo: function(pathName, params) {
        this.$router.push({ name: pathName });
    },
    getNum(){
        if(this.realInput.length ===6){
             let input = this.$refs.input;
        if(typeof input.blur==='function'){
            input.blur()
        }
        document.activeElement.blur() // ios隐藏键盘
        }
      for(var i=0;i<this.realInput.length;i++){
        this.disInputs[i].value=this.realInput.charAt(i)
        // 表示字符串中某个位置的数字，即字符在字符串中的下标。
      }
    },
    delNum(){
      var oEvent = window.event;
      if (oEvent.keyCode == 8) {
        if(this.realInput.length>0){
          this.disInputs[this.realInput.length-1].value=''
        }
      }
    },
    enterPwd(){
        let input = this.$refs.input;
        if(typeof input.focus()==='function'){
            input.focus()
        }
    },
    // 同意协议单选框
    handleChecked(){
        const cheack = this.isChecked;
        this.isChecked = !cheack;
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

     this.$ajax({ 
            url: '/yyyg/code', 
            method: 'POST', 
            data:{key:'b6eadc5556915ae899995076e473212',phone:this.phone}
            }).then((response)=>{
               if(response.code=== 200){
                     Toast({
                        message: response.msg,
                        duration: 2000
                    });
                    this.varifcode = response.data
               }
                if(response.code=== 500){
                    Toast({
                        message: response.msg,
                        duration: 2000
                    });
               }
            })
  },
  handleRegister(){
            if(!this.isChecked){
                Toast({
                        message: '请勾选用户服务协议',
                        duration: 5000
                    });
                return ;
            }
            if(this.code==null){
                 Toast({
                        message: '请填入验证码',
                        duration: 5000
                    });
                return ;
            }
             if(!this.phone){
                 Toast({
                        message: '请填入手机号',
                        duration: 5000
                    });
                return ;
            }
            if(!this.password){
                Toast({
                        message: '请填入密码',
                        duration: 5000
                    });
                return ;
            }
            let formData = new FormData();
            formData.append('phone', this.phone);
            formData.append('password', this.password);
            formData.append('code', this.code);

            console.log(typeof this.code, this.phone,this.password)

            this.$ajax({ 
            url: '/yyyg/register', 
            method: 'POST', 
            headers:{'Content-Type': 'multipart/form-data'},
            data: formData
            }).then((response)=>{
               console.log(response.data)
               if(response.data.code == 500){
                    Toast({
                        message: response.data.msg,
                        duration: 5000
                    });
               }
               
                if(response.data.code == 200){
                    this.$store.commit('userRegister', response.data.token);


                    this.routerGo('login')
                }
            })
  }
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "rigister.css";

</style>
