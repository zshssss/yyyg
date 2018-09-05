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
        <input type="number" placeholder="1">
      </p>
    </div>
    <div class="reflect_info">
      <p>可用佣金余额0.001元</p>
      <p @click="routerGo('balance')">全部转换</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,

    };
  },
  created: function() {},
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path) {
      this.$router.push({ name: path });
    },
    swichPayStyle: function(index) {
      this.payNth = index;
    },
    changeNum: function(index) {
      this.numNth = index;
    },
    close_dig:function(){
      this.edishow=!this.edishow;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "reflect.css";
</style>
