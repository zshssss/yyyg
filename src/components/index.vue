<template>
  <div class="index">

    <!-- 头部搜索 -->
    <div class="flex js_center al_center topsea">
      <div class="box flex js_start al_center seach" v-on:click="visiable = !visiable">
        <img :src="baseImgUrl+'index_sea_32_30.png'" style="width:.64rem;height:.6rem;" alt="">
        <input class="seakey" disabled placeholder="请输入您想要的宝贝" type="text">
      </div>
    </div>
    <!-- 首页轮播 -->
    <div class="index_banner" v-on:click="routerGo('prodetail')">
      <mt-swipe :auto="0">
          <mt-swipe-item  v-for="(val, key) in banners" :key="key">
            <img :src="baseImgUrl+'banner1.png'" style="width:15rem;height:6rem" alt="">
          </mt-swipe-item> 
      </mt-swipe>
    </div>
    <!--  -->
 

    <div class="over box recommend jiexiaow">
      <router-link to="/announce">
        <div class="box flex js_between al_center title">
          <p>最新揭晓</p>
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
        </div>
      </router-link>
      <div class="jiexiao_list">
        <ul>
            <li  v-for="(item, index) in comeSoon" :key="index" v-on:click="routerGo('prodetail')">
              <img :src="baseImgUrl+item.name" style="width:3.2rem;height:2.94rem" alt="">
              <p class="name tc">倒计时</p>
              <p class="time">
                <span>{{hour}}:</span>
                <span>{{minu}}:</span>
                <span>{{second}}</span>
              </p>
            </li>
          </ul>
      </div>
    </div>

    <!-- 新品推荐 -->
    <div class="over box recommend">
      <router-link to="/prolist">
        <div class="box flex js_between al_center title">
          <p>新品推荐</p>
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
        </div>
      </router-link>
      <div class="recommend_list">
        <ul>
          <!-- <template v-for="(item, index) in recom" :key="index"> -->
            <li  v-for="(val, index) in recom" :key="index">
              
              <div class="recom_left" v-on:click="routerGo('prodetail')">
                <img :src="baseImgUrl+'recom_300_240.png'" style="width:6rem;height:4.8rem;" alt="">
              </div>
              
              <div class="recom_right">
                <div class="flex js_start al_center recom_r_top" >
                  <div class="ico">
                    <img :src="baseImgUrl+'recom_ico_36_39.png'" style="width:.72rem;height:.78rem;" alt="">
                  </div>
                  <p class="recom_name">荣耀10 GT游戏加速AIS手持夜景6GB+64GB  幻夜黑全网通移动..</p>
                </div>

                <p class="box price">价值：￥2399.00（1.00抢购/人次）</p>
                <div class="range">
                  <p class="rangesize" style="width:30%;"></p>
                </div>
                <div class="box flex js_between al_center take_info">
                  <div class="toke_item tc">
                    <p class="num">120</p>
                    <p class="status">已参与</p>
                  </div>
                  <div class="toke_item tc">
                    <p class="num">500</p>
                    <p class="status">总需人次</p>
                  </div>
                  <div class="toke_item tc">
                    <p class="num">380</p>
                    <p class="status">剩余</p>
                  </div>
                </div>
                <div class="box flex js_center al_center take_in">
                  <p class="tc buy" v-on:click.stop="routerGo('paycenter')">￥1.00抢购</p>
                  <p class="tc buy" v-on:click.stop="routerGo('paycenter')">全包价买</p>
                </div>
              </div>
            </li>
        </ul>
      </div>
    </div>
    <!-- tabbar -->
    <div class="tab_posi">
      <TabBar :nth='0'></TabBar>
    </div>
    <mt-popup class="seach_wrap"  v-model="visiable" position="right">
           <div id="search" class="search" >
        <!-- 顶部标题 -->
        <div class="tc box rel flex js_between al_center top_title">
            <span class="back"  v-on:click="closeProp">
            </span>
            <div class="input-inner">
                <i class="el-icon-search"></i>
                <input type="text" v-model="searchName" placeholder="请输入你想要寻找的宝贝...">
                <i class="el-icon-circle-close-outline" @click="deleTeName"></i>
            </div>
            <span class="exit" @click="setSearch()">搜索</span>
        </div>
        <!-- 热门推荐 -->
        <dl class="auto-commend">
            <dt class="commend-label">热门搜索</dt>
            <dd class="commend-list">
                <span v-for="(item,index) in hotList" :key="index" @click="setSearch(item)">{{item}}</span>
            </dd>
        </dl>
    </div>
    </mt-popup>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import { Swipe, SwipeItem } from "mint-ui";
import { Indicator } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 底部tabbar
import TabBar from "./publicfile/tabbar";
export default {
  components: { TabBar },
  name: "index",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      banners: [0, 0, 0],
      recom: [0, 0],
      hour: null,
      minu: null,
      second: null,
      comeSoon: [
        { name: "jiexiao_01_ico_160_147.png" },
        { name: "jiexiao_02_ico_160_147.png" },
        { name: "jiexiao_03_ico_160_147.png" },
        { name: "jiexiao_04_ico_160_147.png" }
      ],

      prodlist: [
        "全部商品",
        "科技数码",
        "手机电脑",
        "珠宝首饰",
        "奢饰品区",
        "金银投资",
        "名表专区",
        "茶酒专区",
        "食品饮料",
        "家用电器",
        "生活百货",
        "妇婴用品"
      ],
      proShow: false,
      visiable: false,
      searchName: null,
      hotList: ["口红", "手机", "耳机"],
      showSlide: false
    };
  },
  created: function() {
    console.log(1);

    axios({
      method: "POST",
      url: "/yyyg/register",
      // url: "/apis/index",
      data: {
        phone: 18037472380,
        password: 123
      },

      header: {
        "content-type": "application/json"
      }
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(ers) {
        console.log(ers);
      });
  },
  mounted() {
    this.formatDate();
  },
  computed: {},
  methods: {
    formatDate(formatStr, timep) {
      var leftTime = 3 * 60 * 60 * 1000;
      // var ho = '23:23:23'.split(':')[0];
      // var min = '23:23:23'.split(':')[1];
      // var ss = '23:23:23'.split(':')[2];
      // leftTime =  parseInt(ho , 10) * 60 * 60 + parseInt(min , 10) * 60 + parseInt(ss , 10);

      setInterval(() => {
        //  var endPoin= new Date('2018-09-01').getTime();
        // var leftTime = endPoin - new Date().getTime();
        leftTime = leftTime - 1000;

        var hours = parseInt((leftTime / 1000 / 60 / 60) % 24, 10); //计算剩余的小时
        var minutes = parseInt((leftTime / 1000 / 60) % 60, 10); //计算剩余的分钟
        var seconds = parseInt((leftTime / 1000) % 60, 10); //计算剩余的秒数
        this.hour = hours > 9 ? hours : "0" + hours;
        this.minu = minutes > 9 ? minutes : "0" + minutes;
        this.second = seconds > 9 ? seconds : "0" + seconds;
      }, 1000);
    },
    routerGo: function(pathName, params) {
      this.$router.push({ name: pathName });
    },
    handleSearch(name) {
      if (name) {
        (this.visiable = false), (this.searchName = name);
      }
    },
    closeProp() {
      this.visiable = false;
    },
    setSearch(prodname) {
      this.searchName = prodname ? prodname : this.searchName;
      this.visiable = false;
    },
    deleTeName() {
      this.searchName = "";
    }
  }
};
</script>


 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "index/index.css";
</style>
