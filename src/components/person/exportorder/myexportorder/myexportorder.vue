<template>
  <div class="exportorder" id="exportorder">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>我的晒单</span>
       
      <span class="exit" v-on:click="routerGo('exporseaction')">我要晒单</span>
    </div>
    <div class="export_list">
        <ul>
            <li v-for="(item, index) in 3" :key="index"  @click="routerGo('prodetail')">
                <div class="export_ico">
                    <img :src="baseImgUrl+'rxport_ico_66_66.png'" style="width:1.32rem;heigth:1.32rem;" alt="">
                </div>
                <div class="export_box">
                    <p class="title">前几天还在跟同事吹我肯定要中一部手机...</p>
                    <p class="tel">133****9533</p>
                    <div class="flex js_start al_center order_detail">
                        <div class="order_ico">
                            <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="height:2.9rem;width:2.3rem;" alt="" srcset="">
                        </div>
                        <div class="order_inf">
                            <p class="order_name">（第333期）Apple iPhone 8(A1863)64G移动 正在揭晓</p>
                            <p class="price">
                                <span>价值：￥5800元</span>
                                <span>2018.08.08</span>                  
                            </p>
                        </div>
                    </div>
                </div> 
            </li>
        </ul>
    </div>
 
  </div>
</template>
<script>
export default {
  name: "exportorder",
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
@import "myexportorder.css";
</style>
