<template>
  <div class="extensiondetail" id="extensiondetail">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>推广明细</span>
      <span class="exit"></span>
    </div>
    <div class="detail_list">
        <ul>
          <li v-for="extension in extensionList" :key="extension.id">
              <p class="time">{{extension.paytime}}</p>
              <div class="detail_info">
                  <div class="item_ico">
                      <img :src="baseImgUrl+'detail_ico_170_140.png'" style="width:3.4rem;height:2.8rem;" alt="">
                  </div>
                  <div class="item_info">
                      <p>我的下线账户：{{extension.phone}}</p>
                      <p>{{extension.goodsname}}{{extension.goodsdesc}}</p>
                      <p>共支付{{extension.goodsprice}}元我的返利50元</p>
                  </div>

              </div>
          </li>
                

        </ul>
    </div>
  </div>
</template>
<script>
import api from '../../../../utils/tool'
import { Toast } from 'mint-ui';
export default {
  name: "extensiondetail",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      extensionList:[]
    };
  },
  created: function() {
       api.fetch('/yyyg/generalize','get',{token:this.$store.state.token},{token:this.$store.state.token}).then((response)=>{

            if(response.data.code == 200){
                this.extensionList = this.formatData(response.data.data)
            }else{
              Toast({
                  message: response.data.msg,
                  duration: 2000
                  });
            }
      
    })
  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path) {
      this.$router.push({ name: path });
    },
    formatData(extension){
      console.log(extension)
      return  extension.map((extens)=>{
        let{id,goodscover,paytime,phone,nickname,goodsname,goodsdesc,goodsprice} = extens;
        var formatime = paytime.slice(0,10).split('-').join('/');
        return{
          id,
          paytime:formatime,
          nickname,
          goodsname,
          goodsdesc,
          goodsprice,
          phone,
          goodscover
        }
      })
      
    }
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "extensiondetail.css";
</style>
