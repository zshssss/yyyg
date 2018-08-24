<template>
  <div class="product_detail" id="product_detail">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>笔记本</span>
      <span class="exit"></span>
    </div>

    <!-- 产品图片轮播 -->
    <div class="over prodetail_banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img :src="baseImgUrl+'propdetail_banner_750_475.png'" style="width:15rem;height:9.5rem;" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
           <img :src="baseImgUrl+'propdetail_banner_750_475.png'" style="width:15rem;height:9.5rem;" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
           <img :src="baseImgUrl+'propdetail_banner_750_475.png'" style="width:15rem;height:9.5rem;" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="over box pro_detail_info">
      <p class="box detail_title">
        第122期）Apple iPhone 8 Plus 64GB红色特别版 移动联通电信4G手机
      </p>

      <div class="pro_detail_take">
        <p class="box price">价值￥6688.00（抢购1.00每人次）</p>
        <p class="range">
          <span class="grade" style="width:33%"></span>
        </p>

        <div class="over box flex js_between al_center pro_tainfo">
          <p>
            <span>240</span>
            <span>已参与</span>
          </p>
          <p>
            <span>500</span>
            <span>共需参与</span>
          </p>
          <p>
            <span>260</span>
            <span>剩余</span>
          </p>
        </div>
      </div>
      <div class="box over flex js_between al_center buy">
        <p v-on:click="routerGo('shop')">加入购物车</p>
        <p>一元抢购</p>
        <p>立即购买</p>
      </div>
    </div>

    <div class="take_record">
      <p class="flex js_between al_center sunburn">
        <span>晒单</span>
        <span><img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt=""></span>
      </p>
      <p class="flex js_between al_center sunburn">
        <span>参与记录</span>
        <span></span>
      </p>
      <div class="record_list">
        <ul>
          <template v-for="(item, index) in 5">
          <li>
             <div class="taker_ico">
               <img :src="baseImgUrl+'prodetai_takers_60_60.png'" style="width:1.2rem;height:1.2rem;" alt="">
             </div>
             <div class="taker_info">
               <p>
                 <span class="wram_color">134****0640</span>
                  <span>（第120期）</span> 
                </p>
               <p>
                 <span>抢购了</span><span class="wram_color">3</span><span></span>次</span>            
                 <span class="span2">2018/02/02</span>
                </p>
             </div>
          </li>
          </template>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl
    };
  },
  created: function() {
     
  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo:function(path){
      this.$router.push({name:path})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
