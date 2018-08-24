<template>
  <div class="extension" id="extension">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>我的推广</span>
      <span class="exit"></span>
    </div>

    <div class="extension_info">
      <p class="extension_num">
        <span>我的推广码</span>
        <span>1234</span>
      </p>
      <section class="extension_detail">
        <p class="title">推广明细</p>
        <p class="content">
          推荐5人及以上可获得10元推广奖励，推荐10人及以上可获得20元推广奖励，以此类推，推荐越多奖励越多！
        </p>
      </section>
    </div>
    <div class="extension_in">
      <span v-on:click="routerGo('myextension')">我的推广人</span>
      <span v-on:click="routerGo('extensiondetail')">推广明细</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "extension",
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
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import 'extension.css';
</style>
