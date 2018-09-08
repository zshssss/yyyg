<template>
  <div class="index" v-infinite-scroll="loadMore"
  infinite-scroll-disabled="isScroll"
  infinite-scroll-distance="0">

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
            <img :src="apiImgUrl+val.cover" style="width:15rem;height:6rem" alt="">
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
                <img :src="apiImgUrl+val.cover" style="width:6rem;height:4.8rem;" alt="">
              </div>
              
              <div class="recom_right">
                <div class="flex js_start al_center recom_r_top" >
                  <div class="ico">
                    <img :src="baseImgUrl+'recom_ico_36_39.png'" style="width:.72rem;height:.78rem;" alt="">
                  </div>
                  <p class="recom_name">{{val.name}} {{val.desc}}</p>
                </div>

                <p class="box price">价值：￥{{val.price}}（{{val.qingprice}}抢购/人次）</p>
                <div class="range">
                  <p class="rangesize" style="width:30%;"></p>
                </div>
                <div class="box flex js_between al_center take_info">
                  <div class="toke_item tc">
                    <p class="num">{{val.already}}</p>
                    <p class="status">已参与</p>
                  </div>
                  <div class="toke_item tc">
                    <p class="num">{{val.participation}}</p>
                    <p class="status">总需人次</p>
                  </div>
                  <div class="toke_item tc">
                    <p class="num">{{val.participation-val.already}}</p>
                    <p class="status">剩余</p>
                  </div>
                </div>
                <div class="box flex js_center al_center take_in">
                  <p class="tc buy" v-on:click.stop="routerGo('paycenter')">￥{{val.qingprice}}抢购</p>
                  <p class="tc buy" v-on:click.stop="routerGo('paycenter')">全包价买</p>
                </div>
              </div>
            </li>
            
        </ul>
      </div>
    </div>

    <mt-spinner v-show="loading" type="fading-circle" class="indexloadmore"></mt-spinner>
    <p class="showmoreinfo">{{loadingTitle}}</p>
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
import tool from "../utils/tool"

import { Swipe, SwipeItem } from "mint-ui";
import { Indicator } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 等待效果
import { Spinner } from 'mint-ui';
Vue.component(Spinner.name, Spinner);


// 底部tabbar
import TabBar from "./publicfile/tabbar";
export default {
  components: { TabBar },
  name: "index",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      apiImgUrl:this.$store.state.apiImgUrl,
      // 轮播
      banners: null,
      // 没有更多了
      isScroll:true,
      loading:false,
      loadingTitle:'上拉加载更多',
      page:0,

      recom: [],
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
    this.getGoods();

  },
  mounted() {
    this.formatDate();
  },
  computed: {},
  methods: {
    // 请求更多数据
    loadMore:function(){
      this.loading=true;
      this.loadingTitle='正在拼命加载';
      this.getGoods();
    },
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
    },

    // 请求商品
    getGoods(){
      let that = this;    
      let goods = tool.fetch('/yyyg/index','GET',{
        page:that.page,
        num:5
      })
      goods.then(function(res){
        console.log(res);
        if (res.data.code==200) {

          if (res.data.data.goods.length!=0) {
            that.page++;
            that.isScroll=false;
            that.loading=false;
            that.loadingTitle='上拉加载更多';
            that.banners=res.data.data.img;
            that.recom=that.recom.concat(res.data.data.goods);
          }else{
            that.isScroll=true;
            that.loading=false;
            that.loadingTitle='没有更多商品了,敬请期待';
          }
          

        } else {
          console.log('没有更多数据了');
        }
        
      })
    }
  }
};
</script>


 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "index/index.css";
</style>
