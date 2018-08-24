<template>
  <div class="extensiondetail" id="extensiondetail">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>推广明细</span>
      <span class="exit"></span>
    </div>
    <div class="detail_list">
        <ul>
            <template v-for="(item, index) in 3">
                <li>
                    <p class="time">2018/01/01</p>
                    <div class="detail_info">
                        <div class="item_ico">
                            <img :src="baseImgUrl+'detail_ico_170_140.png'" style="width:3.4rem;height:2.8rem;" alt="">
                        </div>
                        <div class="item_info">
                                <p>我的下线账户：152****6787</p>
                                <p>购买iPhone 8 （红色 64GB 移动）一部</p>
                                <p>共支付5888.00元我的返利50元共支付我的返利50元共支付我的返利50元共支付  我的返利50元共支付5888</p>
                            </div>

                    </div>
                </li>
            </template>

        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "extensiondetail",
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
@import "extensiondetail.css";
</style>
