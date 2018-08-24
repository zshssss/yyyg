<template>
  <div class="product" id="product">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>笔记本</span>
      <span class="exit"></span>
    </div>

    <div class="box prolist">
      <ul>
        <template v-for="(item, index) in 6">
        <li>
          <div class="pro_ico" v-on:click="routeGo('prodetail')">
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
            <p class="box tc take" v-on:click="routeGo('paycenter')">立即抢购</p>
            <p class="che_ico" v-on:click="routeGo('shop')">
              <img :src="baseImgUrl+'ty_che_32_30.png'" style="width:.64rem;height:.60rem;" alt="">
            </p>
          </div>
        </li>
         </template>
      </ul>
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
  created: function() {},
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routeGo: function(pathName) {
      this.$router.push({ name: pathName });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
