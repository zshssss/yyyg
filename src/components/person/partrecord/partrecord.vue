<template>
  <div class="partrecord" id="partrecord">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>参与记录</span>
      <span class="exit"></span>
    </div>

    <div class="parrlist">
        <ul>
          <li v-for="part in partCart" :key="part.orderid" @click="routerGo('prodetail')">
            <div class="take_ico">
              <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="width:3.74rem;height:4.7rem" alt="">
            </div>
            <div class="take_info">
              <div>
                <p class="pro_name">（第{{part.goodsphase}}期）{{part.desc}} </p>
                <p class="Model">型号：{{part.goodsnum}}</p>
                <p class="size">共{{part.goodsnum}}件</p>
              </div>
              <div class="pay_info">
                <p>实付：￥{{part.goodsprice}}元（免运费）</p>
                <p>{{part.addtime.slice(0,10).split('-').join('/')}}</p>
              </div>
            </div>
          </li>
        </ul>
    </div>
    <div class="part_kf">
      <p>
        <span @click="routerGo('customerservice')">客服</span>
      </p>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import api from '../../../utils/tool'
export default {
  name: "partrecord",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      partCart:null
    };
  },
  created: function() {
    this.getpartCart()
  },
  computed: {},
  methods: {
    getpartCart(){
      const token = this.$store.state.token;
      api.fetch('/yyyg/record','get',{ header:{'token': token }}).then((response)=>{
          // console.log(response.data)
          if(response.data.code == 500){
              Toast({
                    message: response.data.msg,
                    duration: 5000
                  });
          }
          if(response.data.code == 200){
              // console.log(response.data.data)
              const partcart = response.data.data
              this.partCart = partcart
          }
      })
    },
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
@import "partrecord.css";
</style>
