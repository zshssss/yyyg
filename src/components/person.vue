<template>
  <div class="person" id="person">
    <div class="tc top_title">
        <span>个人中心</span>
        <span v-on:click="routerGO('login')" class="exit">安全退出</span>
    </div>

    <div class="userinfos" :style="{background: 'url('+ baseImgUrl + 'person_bg_750_300.png' +')',backgroundSize:'cover' }">
      <div class="over flex js_start al_center userinfo_box">
        <div class="flex js_center al_center user_ico">
          <img :src="baseImgUrl+'userico_90_90.png'" style="width:2rem;height:2rem;" alt="">
        </div>
        <div class="user_detail">
          <p class="flex js_start al_center nikename">
            <img :src="baseImgUrl+'nikename_ico_26_30.png'" style="width:.52rem;height:.60rem" alt="昵称">
            <span class="content">罗小黑</span>
          </p>
          <p class="flex js_start al_center nikename usertel">
            <img :src="baseImgUrl+'person_tel_ico_21_32.png'" style="width:.42rem;height:.64rem" alt="手机号">
            <span class="content">12352454*****22</span>
          </p>
          <p class="user_wallet">
              <span>余额：0元</span>
               <span>佣金：50元</span>
          </p>
          
        </div>
      </div>
    </div>

    <div class="user_list">
      <ul>
        <li v-on:click="routerGO('userInfo')">
          <p class="flex js_start al_center left_ico">
            <span>
              <img :src="baseImgUrl+'user_list1_36_42.png'" style="width:.72rem;width:.84rem;" alt="">
            </span>
            <span>个人资料</span>
          </p>
          <p class="rig">
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
          </p>
        </li>
        <li v-on:click="routerGO('balance')">
          <p class="flex js_start al_center left_ico">
            <span>
              <img :src="baseImgUrl+'user_list2_29_35.png'" style="width:.58rem;width:.70rem;" alt="">
            </span>
            <span>余额</span>
          </p>
          <p class="rig">
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
          </p>
        </li>
        <li v-on:click="routerGO('partrecord')">
          <p class="flex js_start al_center left_ico">
            <span>
              <img :src="baseImgUrl+'user_list3_35_36.png'" style="width:.70rem;width:.72rem;" alt="">
            </span>
            <span>参与记录</span>
          </p>
          <p class="rig">
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
          </p>
        </li>
        <li v-on:click="routerGO('addrlist')">
          <p class="flex js_start al_center left_ico">
            <span>
              <img :src="baseImgUrl+'user_list4_34_34.png'" style="width:.64rem;width:.64rem;" alt="">
            </span>
            <span>收货地址</span>
          </p>
          <p class="rig">
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
          </p>
        </li>
        <li v-on:click="routerGO('extension')">
          <p class="flex js_start al_center left_ico">
            <span>
              <img :src="baseImgUrl+'user_list5_36_26.png'" style="width:.72rem;width:.52rem;" alt="">
            </span>
            <span>我的推广</span>
          </p>
          <p class="rig">
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
          </p>

        </li>
        <li v-on:click="routerGO('customerservice')">
          <p class="flex js_start al_center left_ico">
            <span>
              <img :src="baseImgUrl+'user_list6_36_36.png'" style="width:.72rem;width:.72rem;" alt="">
            </span>
            <span>客服</span>
          </p>
          <p class="rig">
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
          </p>
        </li>
        <li v-on:click="routerGO('myexportorder')">
          <p class="flex js_start al_center left_ico">
            
            <span>
              <img :src="baseImgUrl+'user_list7_34_28.png'" style="width:.68rem;width:.56rem;" alt="">
            </span>
            <span>我的晒单</span>
          </p>
          <p class="rig">
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
          </p>
        </li>
        
      </ul>
    </div>
    <!-- 底部导航 -->
    <div class="tab_posi">
      <TabBar :nth='4'></TabBar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TabBar from "./publicfile/tabbar";

export default {
  components: { TabBar },
  name: "person",
  data() {
    return {
       baseImgUrl: this.$store.state.baseImgUrl,
    };
  },
  created: function() {},
  computed: {},
  methods: {
    routerGO:function(pathName){
      this.$router.push({name:pathName});
    }
  }
};
</script>


 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
