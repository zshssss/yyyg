<template>
  <div class="classify" id="classify">
    <!-- 顶部标题 -->
    <div class="tc top_title">分类</div>

    <div class="flex js_start al_center sorttype">
      <ul class="flex js_start al_center sort_list">
        <li class="on">人气</li>
        <li>最新</li>
        <li>价值</li>
        <li>即将揭晓</li>
      </ul>
      <div class="flex js_start al_center type_swich">
        <p v-on:click="proShow=!proShow">
          <img :src="baseImgUrl+'menu_40_31.png'" style="width:.8rem;width:.62rem;" alt="">
          <span>分类</span>
        </p>
        <p>
          <img :src="baseImgUrl+'ty_sea_32_30.png'" style="width:.64rem;width:.60rem;" alt="">
          <span>搜索</span>
        </p>
      </div>
      <div class="sorttypelist" v-if="proShow">
        <ul>
          <template v-for="(item, index) in 12">
            <li v-bind:class="[0==index?'on':'']">全部商品</li>
          </template>
        </ul>
      </div>
    </div>
    

    <!-- 商品列表 -->

    <div class="box prolist">
      <ul>
        <template v-for="(item, index) in 10">
          
        
        <li>
          <div class="pro_ico">
            <img :src="baseImgUrl+'ty_pro_ico_335_160.png'" style="width:6.7rem;height:3.2rem;" alt="">
          </div>
          <div class="tc box pro_name">荣耀MagicBook荣耀MagicBook荣耀MagicBook 14英寸...</div>
          <p class="pro_range">
            <span class="range_detail" style="width:33%;"></span>
          </p>
          <p class="box flex js_between al_center nums">
            <span>31</span>
            <span>20</span>
            <span>100</span>
          </p>
          <div class="takein flex js_start al_center">
            <p class="box tc take">立即抢购</p>
            <p class="che_ico">
              <img :src="baseImgUrl+'ty_che_32_30.png'" style="width:.64rem;height:.60rem;" alt="">
            </p>
          </div>
        </li>
         </template>
         
      </ul>
    </div>




    <!-- 底部导航 -->
    <div class="tab_posi">
      <TabBar :nth='2'></TabBar>
    </div>
  </div>
</template>

<script>
import TabBar from './publicfile/tabbar'
export default {
  components : {TabBar},
  name: "classify",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      proShow:false
    };
  },
  methods:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab_posi{
  height: 2rem;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
}
</style>
