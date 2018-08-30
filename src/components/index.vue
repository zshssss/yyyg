<template>
  <div class="index">

    <!-- 头部搜索 -->
    <div class="flex js_center al_center topsea">
      <div class="box flex js_start al_center seach" v-on:click="showSea">
        <img :src="baseImgUrl+'index_sea_32_30.png'" style="width:.64rem;height:.6rem;" alt="">
        <input class="seakey" disabled placeholder="请输入您想要的宝贝" type="text">
      </div>
    </div>
    <!-- 首页轮播 -->
    <div class="index_banner">
      <mt-swipe :auto="0">
        <template v-for="(val, key, index) in banners"> 
          <mt-swipe-item>
            <img :src="baseImgUrl+'banner1.png'" style="width:15rem;height:6rem" alt="">
          </mt-swipe-item>
        </template>  
      </mt-swipe>
    </div>
    <!--  -->
    <!-- <div class="box tc project_list">
      <ul>
        <li>
          <div class="project_ico">
            <img :src="baseImgUrl+'index_pro1_121_121.png'" style="width:2.4rem;height:2.4rem;" alt="">
          </div>
          <p class="name">分类</p>
        </li>
          <li>
          <div class="project_ico">
            <img :src="baseImgUrl+'index_pro2_111_111.png'" style="width:2.2rem;height:2.2rem;" alt="">
          </div>
          <p class="name">客服</p>
        </li>
          <li>
          <div class="project_ico">
            <img :src="baseImgUrl+'index_pro3_128_110.png'" style="width:2.2rem;height:2.2rem;" alt="">
          </div>
          <p class="name">充值</p>
        </li>
          <li>
          <div class="project_ico">
            <img :src="baseImgUrl+'index_pro4_120_120.png'" style="width:2.4rem;height:2.4rem;" alt="">
          </div>
          <p class="name">推广</p>
        </li>
      </ul>
    </div> -->

    <div class="over box recommend jiexiaow">
      <router-link to="/announce">
        <div class="box flex js_between al_center title">
          <p>最新揭晓</p>
            <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="">
        </div>
      </router-link>
      <div class="jiexiao_list">
        <ul>
            <li  v-for="(item, index) in comeSoon" :key="index">
              <img :src="baseImgUrl+item.name" style="width:3.2rem;height:2.94rem" alt="">
              <p class="name tc">倒计时</p>
              <p class="time">
                <span>{{hh}}:</span>
                <span>{{mm}}:</span>
                <span>{{ss}}</span>
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
           <template v-for="(val, key, index) in recom"> 
            <li>
              
              <div class="recom_left" v-on:click="routerGo('prodetail')">
                <img :src="baseImgUrl+'recom_300_240.png'" style="width:6rem;height:4.8rem;" alt="">
              </div>
              
              <div class="recom_right">
                <div class="flex js_start al_center recom_r_top" v-on:click="routerGo('prodetail')">
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
                  <p class="tc buy" v-on:click="routerGo('paycenter')">￥1.00抢购</p>
                  <p class="tc buy" v-on:click="routerGo('paycenter')">全包价买</p>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <!-- tabbar -->
    <div class="tab_posi">
      <TabBar :nth='0'></TabBar>
    </div>
    <mt-popup class="seach_wrap" v-model="show" position="right">
      <div class="search">
        <div class="topti">
          <div class="index_back" v-on:click="seaBack">
            <img :src="baseImgUrl+'left_red_21_37.png'" style="width:.42rem;height:.74rem;" alt="" srcset="">
          </div>
          <div class="fillkey">
            <img :src="baseImgUrl+'pop_sea_32_30.png'" style="width:.64rem;height:.60rem;" alt="" srcset="">
            <input type="text" maxlength="11" placeholder="请输入你想要寻找的宝贝..." />
            <span class="clear">
              <img :src="baseImgUrl+'delete_32_32.png'" style="width:.64rem;height:.64rem;" alt="" srcset="">
            </span>
            
          </div>
          <div class="seachbuttom">搜索</div>
          
        </div>
        <div class="hot_sea">
          <p class="tit">热门搜索</p>
          <div class="hot_keys">
            <ul>
              <li>口红</li>
              <li>面包</li>
              <li>罗小黑</li>
              <li>罗小白</li>
              <li>小米8 64GB 骁龙845</li>
            </ul>
          </div>
        </div>
      </div>
    </mt-popup>

  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 底部tabbar
import TabBar from "./publicfile/tabbar";
export default {
  components: { TabBar },
  name: "index",
  heh: "",
  houer:null,
  minut:null,
  second:null,
  data() {
    return {
      show: false,
      baseImgUrl: this.$store.state.baseImgUrl,
      banners: [0, 0, 0],
      recom: [0, 0],
      dd:0,
      hh:0,
      mm:0,
      ss:0,
      comeSoon:[
        {name:'jiexiao_01_ico_160_147.png'},
        {name:'jiexiao_02_ico_160_147.png'},
        {name:'jiexiao_03_ico_160_147.png'},
        {name:'jiexiao_04_ico_160_147.png'}
      ]
    };
  },
  created: function() {    
    axios({
      method: "POST",
      url: "/apis/api/register",
      data: {
        phone: 18037472380,
        password: "123"
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
  mounted(){
    const _this = this;
    var ts= new Date(2018, 8, 30, 10, 0, 0)
    this.timer = setInterval(()=>{
     _this.dd = '0'+parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数  
      _this.hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数  
      _this.mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
      _this.ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数  
    },1000)
  },
  computed: {},
  methods: {
    routerGo: function(pathName, params) {
      this.$router.push({ name: pathName });
    },
    seaBack:function(){
      this.show=false
    },
    showSea:function(){
       this.show=true
    }

  }
};
</script>


 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "index/index.css";
</style>
