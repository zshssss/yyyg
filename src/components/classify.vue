<template>
  <div class="classify" id="classify">
    <!-- 顶部标题 -->
    <div class="tc top_title">分类</div>

    <div class="flex js_start al_center sorttype">
      <ul class="flex js_start al_center sort_list">
        <li class="on">人气</li>
        <li>最新</li>
        <li>价值</li>
        <li>即将揭晓</li>
      </ul>
      <div class="flex js_start al_center type_swich">
        <p v-on:click="proShow=!proShow">
          <img :src="baseImgUrl+'menu_40_31.png'" style="width:.8rem;width:.62rem;" alt="">
          <span>分类</span>
        </p>
        <p  v-on:click="visiable = !visiable">
          <img :src="baseImgUrl+'ty_sea_32_30.png'" style="width:.64rem;width:.60rem;" alt="">
          <span>搜索</span>
        </p>
      </div>
      <div class="sorttypelist" v-if="proShow">
        <ul>
            <li v-for="(item, index) in prodlist" :class="[0===index ? 'on':'']" :key="index" v-on:click="proShow=!proShow" >{{item}}</li>
        </ul>
      </div>
    </div>
    <!-- 商品列表 -->

    <div class="box prolist">
      <ul>
        <li v-for="(item, index) in 10" :key="index" v-on:click="routerGo('prodetail')">
          <div class="pro_ico">
            <img :src="baseImgUrl+'ty_pro_ico_335_160.png'" style="width:6.7rem;height:3.2rem;" alt="">
          </div>
          <div class="tc box pro_name">荣耀MagicBook荣耀MagicBook荣耀MagicBook 14英寸...</div>
          <p class="pro_range">
            <span class="range_detail" style="width:33%;"></span>
          </p>
          <p class="box flex js_between al_center nums">
            <span>31</span>
            <span>20</span>
            <span>100</span>
          </p>
          <div class="takein flex js_start al_center">
            <p class="box tc take"  @click.stop="routerGo('paycenter')">立即抢购</p>
            <p class="che_ico" @click.stop="routerGo('shop')">
              <img :src="baseImgUrl+'ty_che_32_30.png'" style="width:.64rem;height:.60rem;" alt="">
            </p>
          </div>
        </li>         
      </ul>
    </div>

    <!-- 搜索页 -->
    <mt-popup v-model="visiable" position="right">
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
    <!-- 底部导航 -->
    <div class="tab_posi">
      <TabBar :nth='2'></TabBar>
    </div>
  </div>
</template>

<script>
import TabBar from './publicfile/tabbar'
export default {
  components : {TabBar},
  name: "classify",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      prodlist:['全部商品','科技数码','手机电脑','珠宝首饰','奢饰品区','金银投资','名表专区','茶酒专区','食品饮料','家用电器','生活百货','妇婴用品'],
      proShow:false,
      visiable:false,
      searchName:null,
      hotList:['口红','手机','耳机'],
      showSlide: false
    };
  },
  methods:{
    routerGo: function(path) {
      this.$router.push({ name: path });
    },
    handleSearch(name){
      if(name){
        this.visiable = false,
        this.searchName= name
      }
    },
    closeProp(){
       this.visiable = false;
    },
    setSearch(prodname){
        this.searchName = prodname ? prodname : this.searchName;
        this.visiable = false;
    },
    deleTeName(){
        this.searchName = ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tab_posi{
      height: 2rem;
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
    }


    #search.search{
      width: 100vw;
      height: 100vh;
    }
    #search.search .top_title{
        background-color: #fff;
        height: 1.76rem;
        line-height: 1.12rem;
        font-size: 0.64rem;
        padding: 0 0.4rem;
    }
    #search.search .top_title span.back {
    display: inline-block;
    position: relative;
    width: 1.28rem;
    height: 100%;
    vertical-align: middle;
    }
    #search.search .top_title span.back::before{
    
        border: 2px solid transparent;
        border-right: 0;
        border-bottom: 0;
        content: " ";
        top: 0.6rem;
        left: 0.6rem;
        position: absolute;
        width: 0.51rem;
        height: 0.51rem;
        border-color: #FB3812;
        -webkit-transform: rotate(-45deg) scale(1);
        transform: rotate(-45deg) scale(1);
    }

    #search.search .top_title  .input-inner{
        display: flex;
        position: relative;
        justify-content: space-around;
        flex: 1;
        height: 1.76rem;
        padding: 0.32rem 0.4rem;
        box-sizing: border-box;
        align-items: center;
        font-size: .72rem;
        vertical-align: middle;
    }

    #search.search .top_title  .input-inner i{
         color: #666666;
         
    }    
    #search.search .top_title  .input-inner input{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        outline: 0;
        margin: 0 .4rem;
    }

    #search.search .top_title span.exit {
        width: 2rem;
        color: #FB3812;
    }
    .auto-commend{
        padding: .4rem .8rem;
    }
    .auto-commend .commend-label{
        font-size: 12px;
         color: #666666;
         margin-bottom: 0.4rem;
    }
    .auto-commend .commend-list{
        display: flex;
        justify-content: space-around;
        font-size: 0.64rem;
        line-height: 0.8rem;
        color: #FB3812;
    }
</style>
