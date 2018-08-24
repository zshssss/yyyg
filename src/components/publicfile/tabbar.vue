<template>
  <div class="flex js_center al_center tc tabbar">
      <div class="item" v-bind:class="[nth==0?'on':'']" v-on:click="toRoute('index')">
         <div class="tab_ico_box">
           <img :src="nth==0?baseImgUrl+'index_active_34_36.png':baseImgUrl+'index_default_34_36.png'" style="width:.68rem;height:.72rem;" alt="">
         </div>
        <p>首页</p>
      </div>
       <div class="item" v-bind:class="[nth==1?'on':'']" v-on:click="toRoute('announce')">
         <div class="tab_ico_box">
           <img :src="nth==1?baseImgUrl+'tabbar_2_42_42_active.png':baseImgUrl+'tabbar_2_42_42_default.png'" style="width:.84rem;height:.84rem;" alt="">
         </div>
        <p>揭晓</p>
      </div>
       <div class="item" v-bind:class="[nth==2?'on':'']" v-on:click="toRoute('classify')">
         <div class="tab_ico_box">
           <img :src="nth==2?baseImgUrl+'tabbar_3_42_42_avtive.png':baseImgUrl+'tabbar_3_42_42_default.png'" style="width:.84rem;height:.84rem;" alt="">
         </div>
        <p>分类</p>
      </div>
       <div class="item" v-bind:class="[nth==3?'on':'']" v-on:click="toRoute('shop')">
        <div class="tab_ico_box">
           <img :src="nth==3?baseImgUrl+'tabbar_4_40_38_active.png':baseImgUrl+'tabbar_4_40_38_default.png'" style="width:.80rem;height:.76rem;" alt="">
        </div>
        <p>购物车</p>
      </div>
       <div class="item" v-bind:class="[nth==4?'on':'']" v-on:click="toRoute('person')">
         <div class="tab_ico_box">
           <img :src="nth==4?baseImgUrl+'tabbar_5_36_42_active.png':baseImgUrl+'tabbar_5_36_42_default.png'" style="width:.72rem;height:.84rem;" alt="">
         </div>
        <p>我的</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      // baseImgUrl: "http://192.168.1.119/yi/"
      baseImgUrl: this.$store.state.baseImgUrl
    };
  },
  props: ["nth"],
  created: function() {},
  computed: {},
  methods: {
    toRoute: function(path) {
      this.$router.push({ name: path });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar {
  height: 100%;
  width: 100%;
}
</style>
