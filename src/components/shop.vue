<template>
  <div class="tc box shop" id="shop">
    <div class="top_title">购物车</div>
    <!-- 购物车内容 -->
    <div v-if="shopShow" class="shop_list">
      <ul>
        <li  v-for="(cartItem, index) in shopCart" :key="index" v-on:click="routerGo('prodetail')">
          <div class="flex js_center al_center shop_detail_ico">
            <img :src="baseImgUrl+cartItem.prodImg" style="width:3.74rem;height:4.7rem;" alt="">
          </div>
          <div class="shop_detail_r">
            <p class="shop_name">
              <!-- （第333期）Apple iPhone 8(A1863)64G移动  -->
              {{cartItem.prodKeyword}}
              剩余 <span>{{cartItem.restcount}}</span> 人次</p>
            <p class="shop_nums">总共抢购:<span>{{cartItem.haveWrap}}</span>人次</p>
            
            <div class="flex js_between al_center box numschange">
              <p class="flex js_between al_center shop_numc">
                <span @click.stop="redProdCount(index)"></span>
                <span>{{haveBuy}}</span>
                <span  @click.stop="addProdCount(index)"></span>
              </p>
              <p class="flex js_center al_center shop_del" @click.stop="handleDele(index)">
                <img :src="baseImgUrl+'del-28_34.png'" style="width:.56rem;height:.68rem" alt="">
              </p>
            </div>
          </div>
        </li>  
      </ul>
      <div class="tc topay" v-on:click="routerGo('paycenter')">立即支付</div>
    </div>

    <!-- 购物城为空 -->

    <div v-else class="shopcartnone">
      <div class="warm_ico">
        <img :src="baseImgUrl+'warm_114.png'" style="width:2.28rem;height:2.28rem;" alt="">
      </div>
      <p class="tip">抱歉，您的购物车没有商品记录！</p>
      <p class="tc topay" v-on:click="routerGo('index')">马上去购物</p>
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
  import { Toast } from 'mint-ui';
export default {
  components: { TabBar },
  name: "shop",

  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      limit:5,
      haveBuy:1,
      shopCart:[
        {
          prodImg:'jiexiao_ico_187_235.png',
          prodKeyword:'（第122期）Apple iPhone 8 Plus 64GB红色 特别版 移动联通电信4G手机',
          restcount:120,
          haveWrap:5
        }
      ],
      shopShow:true
    };
  },

  created: function() {},
  computed: {},
  methods: {
    routerGo:function(pathName){
      this.$router.push({ name: pathName });
    },
    redProdCount(id){
      if(this.haveBuy<=1){
        Toast({
              message: '不得小于1',
              duration: 5000
            });
        return;
      }
      this.haveBuy --;
      this.shopCart[id].restcount ++
    },
    addProdCount(id){
       if(this.haveBuy>=5){
        Toast({
              message: '不得多于5 ',
              duration: 5000
            });
        return;
      }
      this.haveBuy ++;
      this.shopCart[id].restcount --
    },
    handleDele(id){
      this.shopShow = false;
      this.shopCart.splice(id,1);
    }
  }
};
</script>


 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
