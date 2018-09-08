<template>
  <div class="balance" id="balance">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_red_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>余额</span>
      <span class="exit"></span>
    </div>

    <div class="chage_list">
        <ul> 
            <li>
                <span>余额</span>
                <span class="get_yzm">￥0.00</span>
            </li>
        </ul>
    </div>
    
    <p v-on:click="routerGo('recharge')" class="complete">充值</p>
    <p v-on:click="routerGo('reflect')" class="trans">佣金转余额</p>
  </div>
</template>

<script>
export default {
  name: "nikename",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      yzm: ""
    };
  },
  created: function() {
  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path) {
      this.$router.push({ name: path });
    },
    clear: function() {
      this.nikeNme = "";
    }
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "balance.css";
</style>
