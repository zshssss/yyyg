<template>
  <div class="customerservice" id="customerservice">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>我的推广人上</span>
      <span class="exit"></span>
    </div>
    <div class="myextension_nikename">
      <img :src="baseImgUrl+'userico_90_90.png'" style="width:1.4rem;height:1.4rem" alt="">
      <span class="nike">昵称</span>
    </div>
    <p class="infosection">
      <span>手机号</span>
      <span>15234566787</span>
    </p>
    <p class="infosection">
      <span>推广时间</span>
      <span>2018/01/01</span>
    </p>
  
  </div>
</template>
<script>
export default {
  name: "customerservice",
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
    routerGo: function(path) {
      this.$router.push({ name: path });
    }
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "myextension.css";
</style>
