<template>
  <div class="partrecord" id="partrecord">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>参与记录</span>
      <span class="exit"></span>
    </div>

    <div class="parrlist">
        <ul>
          <li>
            <div class="take_ico">
              <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="width:3.74rem;height:4.7rem" alt="">
            </div>
            <div class="take_info">
              <div>
                <p class="pro_name">（第333期）Apple iPhone 8(A1863)64G移动 </p>
                <p class="Model">型号：A1863</p>
                <p class="size">共1件</p>
              </div>
              <div class="pay_info">
                <p>实付：￥1元（免运费）</p>
                <p>2018/01/01</p>
              </div>
            </div>
          </li>
        </ul>
    </div>
    <div class="part_kf">
      <p>
        <span>客服</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "partrecord",
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
@import "partrecord.css";
</style>
