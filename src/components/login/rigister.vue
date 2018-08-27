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
                <input type="number" value="" placeholder="请输入手机号" maxlength="11">
            </p>
        </div>
        <div class="pass_inner">
            <p class="user_tel">
                <img :src="baseImgUrl+'login_pass_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="valid-icon">
                <input type="number" value=""  placeholder="请输入验证码"  maxlength="11">
            </p>
            <span class="btn_validefy" >获取验证码</span>
        </div>
        <div class="pass_inner">
            <p class="user_tel">
                <img :src="baseImgUrl+'login_pass_80_80.png'" style="width:1.6rem;height:1.6rem;" alt="valid-icon">
                <input type="number" value=""  placeholder="请输入密码" maxlength="11">
            </p>
        </div>
        <div class="pass_inner">
            <span class="pass_label" style="color:#888;fontSize:0.64rem;">输入推广码：</span>
            <div class="extend_code">
                <ul class="write-input clearfix">
                    <input type="tel"   @click="enterPwd" ref="input" maxlength="6" class="realInput" v-model="realInput" @keyup="getNum()"  @keydown="delNum()">
                    <li v-for="(disInput,index) in disInputs" :key="index"><input type="tel" maxlength="1" v-model="disInput.value"></li>
                </ul>
            </div>
        </div>
        <p class="login_button" style="marginBottom:.4rem;">注册</p>
        <div class="pass_inner">
            <span class="user_cheack" v-bind:class="{'checked':isChecked}" @click="handleChecked"></span>
            <span class="cheack_maind">我已经阅读并同意<a href="">用户服务协议</a></span>
        </div>
    </div>
        
    
  </div>
</template>
<script>
export default {
  name: "exportrigister",
  data(){
    return{
        baseImgUrl: this.$store.state.baseImgUrl,
      messagepacket:false,
      packets:[

      ],
      disInputs:[{value:''},{value:''},{value:''},{value:''},{value:''},{value:''}],
      realInput:'',
      isChecked:false
    }
  },
  mounted(){
  
  },
  methods:{
    back: function() {
      this.$router.back()
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
    }
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "rigister.css";

</style>
