<template>
  <div class="paycenter reflect" id="paycenter">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_start al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left2_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>佣金转余额</span>
      <span class="exit"></span>
    </div>
    <div class="top_swich">
      <p class="ico">
        <img :src="baseImgUrl+'ye_45_56.png'" style="width:.9rem;height:1.12rem" alt="" srcset="">
        <span>佣金转余额</span>
      </p>
      <p class="chose_more">
        <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="" srcset="">
      </p>
    </div>
    <p class="swich_tit">转换金额</p>
    <div class="swich_nums">
      <p class="left_tit">￥</p>
      <p class="fill_nums">
        <input type="number" v-model="transferCount" placeholder="输入金额">
      </p>
    </div>
    <div class="reflect_info">
      <p>可用佣金余额 <span style="color:#fb3812;fontSize:0.72rem">{{totalCount}}</span>元</p>
      <p @click="transferAll">全部转换</p>
    </div>

  </div>
</template>

<script>
import api from '../../../utils/tool'
import { Toast } from 'mint-ui';
export default {
  name: "product",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      transferCount:'',
      totalCount:''
    };
  },
  created: function() {
    console.log(typeof this.$store.state.userHire,null)
    if(this.$store.state.userHire===null||this.$store.state.userHire==='null'){
      this.totalCount='0'
    }else{
      this.totalCount = this.$store.state.userHire;
    }
  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
 
    transferAll(){
      if(this.totalCount=='0'){
        
        Toast({
          message:'余额不足不能转换'
        })

        return;
      }
      const token = this.$store.state.token;

      api.fetch('/yyyg/hire','GET',{str:this.totalCount},{token:token}).then((response)=>{
        
        Toast({
          message:response.data.msg
        })

        if(response.data.code === 200){
           this.back()
        }
        
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "reflect.css";
</style>
