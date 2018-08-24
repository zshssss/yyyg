<template>
  <div class="puserinfo" id="puserinfo">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_red_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>个人资料</span>
      <span class="exit"></span>
    </div>
    <div class="box flex js_between al_center user_heading">
        <div class="left_name">头像</div>
        <div class="flex js_center al_center right_ico">
    
                <img :src="baseImgUrl+'userico_90_90.png'" style="width:1.7rem;height:1.7rem;" alt="">
         
      
                <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
           
        </div>
    </div>
    <div class="info_list">
        <ul>
            <li v-on:click="routerGo('nikename')">
                <span>昵称</span>
                <span><img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt=""></span>
            </li>
            <li  v-on:click="routerGo('telchange')">
                <span>手机号</span>
                <span><img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt=""></span>
            </li>
            <li v-on:click="routerGo('passchange')">
                <span>修改密码</span>
                <span><img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt=""></span>
            </li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      edishow:false
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
</style>
