<template>
  <div class="customerservice" id="customerservice">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>客服中心</span>
      <span class="exit"></span>
    </div>
    <div class="kf_key">
        <img :src="baseImgUrl+'sea_30_32.png'" style="width:.66rem;height:.60rem;" alt="">
        <input type="text" placeholder="请输入您的关键词" maxlength="20">
    </div>

    <div class="kf_list">
        <div class="item">
            <img :src="baseImgUrl+'kf_ico_115_115.png'" style="width:2.3reml;height:2.3rem;" alt="">
            <p>在线客服</p>
        </div>
        <div class="item">
           <a href="tel:778899">
                <img :src="baseImgUrl+'kf_ico_tel_115_115.png'" style="width:2.3reml;height:2.3rem;" alt="">
                <p>778899</p>
           </a>  
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "customerservice",
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
@import 'customerservice.css';
</style>
