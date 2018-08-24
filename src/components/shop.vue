<template>
  <div class="tc box shop" id="shop">
    <div class="top_title">购物车</div>
    <!-- 购物车内容 -->
    <div v-if="shopShow" class="shop_list">
      <ul>
        <template v-for="(item, index) in 3">
        <li>
          <div class="flex js_center al_center shop_detail_ico">
            <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="width:3.74rem;height:4.7rem;" alt="">
          </div>
          <div class="shop_detail_r">
            <p class="shop_name">（第333期）Apple iPhone 8(A1863)64G移动 剩余 <span>120</span> 人次</p>
            <p class="shop_nums">总共抢购:<span>5</span>人次</p>
            
            <div class="flex js_between al_center box numschange">
              <p class="flex js_between al_center shop_numc">
                <span></span>
                <span>5</span>
                <span></span>
              </p>
              <p class="flex js_center al_center shop_del">
                <img :src="baseImgUrl+'del-28_34.png'" style="width:.56rem;height:.68rem" alt="">
              </p>
            </div>
          </div>
        </li>
      </template>    
      </ul>
      <div class="tc topay" v-on:click="routeGo('paycenter')">立即支付</div>
    </div>

    <!-- 购物城为空 -->

    <div v-else class="shopcartnone">
      <div class="warm_ico">
        <img :src="baseImgUrl+'warm_114.png'" style="width:2.28rem;height:2.28rem;" alt="">
      </div>
      <p class="tip">抱歉，您的购物车没有商品记录！</p>
      <p class="tc topay">马上去购物</p>
    </div>
     


    <!-- 底部导航 -->
    <div class="tab_posi">
      <TabBar :nth='3'></TabBar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import TabBar from "./publicfile/tabbar";

export default {
  components: { TabBar },
  name: "shop",

  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      shopShow:true
    };
  },

  created: function() {},
  computed: {},
  methods: {
    routeGo:function(pathName){
      this.$router.push({ name: pathName });
    }
  }
};
</script>


 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
