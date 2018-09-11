<template>
  <div class="classify" id="classify" style="overflow:scroll;box-sizing:border-box;padding-bottom:2.4rem;height:100vh;">
    <!-- load组件 -->
    <mt-loadmore :bottomMethod="loadMore" :autoFill="false" ref="loadmore">
      <!-- 顶部标题 -->
    <div class="tc top_title">分类</div>

    <div class="flex js_start al_center sorttype">
      <ul class="flex js_start al_center sort_list">
        <li :class="[prodActiveIndex===index ? 'on':'']"  
            v-for="(item, index) in prodlist" 
            :key="index" 
            v-on:click="handleProdlist(index,item.key)" >
            {{item.name}}
         </li>

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
            <li v-for="(item, index) in classifylist" 
                :class="[classifyActiveIndex===index ? 'on':'']" 
                :key="index" v-on:click="handleClassify(index,item.id)" 
                >
                {{item.name}}
            </li>
        </ul>
      </div>
    </div>
    <!-- 商品列表 -->
   
    <div class="box prolist" style="overflow:scroll;box-sizing:border-box;">
      <ul>
        <li v-for="(item, index) in goodsList" :key="index" v-on:click="routerGo('prodetail',item.id)">
          <div class="pro_ico">
            <img :src="apiImgUrl+item.cover" style="width:6.7rem;height:3.2rem;" alt="">
          </div>
          <div class="tc box pro_name">{{item.name}}{{item.desc}}</div>
          <p class="pro_range">
            <span class="range_detail" :style="{width: item.already/item.participation*100 +'%'}"></span>
          </p>
          <p class="box flex js_between al_center nums">
            <span>{{item.already}}</span>
            <span>{{item.participation-item.already}}</span>
            <span>{{item.participation}}</span>
          </p>
          <div class="takein flex js_start al_center">
            <!-- <p class="box tc take"  @click.stop="routerGo('paycenter')">立即抢购</p> -->
            <p class="box tc take"  @click.stop="buyCurr(item.id)">立即抢购</p>
            <p class="che_ico" @click.stop="addCard(item.id)">
              <img :src="baseImgUrl+'ty_che_32_30.png'" style="width:.64rem;height:.60rem;" alt="">
            </p>
          </div>
        </li>         
      </ul>
      
    </div>
     </mt-loadmore> 
  
    <!-- 商品列表end -->

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
            <span class="exit" @click="setSearch(searchName)">搜索</span>
        </div>
        <!-- 热门推荐 -->
        <dl class="auto-commend">
            <dt class="commend-label">热门搜索</dt>
            <dd class="commend-list">
                <span v-for="(item,index) in hotList" :key="index" @click="setSearch(item.title)">{{item.title}}</span>
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
import tool from "../utils/tool"
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { MessageBox } from 'mint-ui';

// import { Loadmore } from 'mint-ui';
// Vue.component(Loadmore.name, Loadmore);

export default {
  components : {TabBar},
  name: "classify",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      apiImgUrl:this.$store.state.apiImgUrl,
      prodActiveIndex:0,//类目列表默认激活id

      prodlist:[
          {name:'人气',key:'popu'},
          {name:'最新',key:'new'},
          {name:'价值',key:'money'},
          {name:'即将揭晓',key:'false'}
        ],

      //prodlist 类目列表
      classifyActiveIndex:0,//分类默认激活id
      classifylist:null,//classifylist 分类列表
      proShow:false,
      visiable:false,
      searchName:'',
      // 热门搜索
      hotList:null,
      showSlide: false,

      // 页面请求data
      pageInfo:{
        page:0,
        num:5,
        title:'',
        key:'popu'
      },
      // 页面展示数据
      goodsList:[]
    };
  },

  created() {
    // 初始化页面数据
    let key = this.$route.params.hotKey?this.$route.params.hotKey:'';
    this.pageInfo.title=key;
    // 获取商品信息
    this.getGoodsInfo();
    // 获取分类列表
    this.classList();
    // 获取搜索热词
    this.getHotKey();
    // this.Toast('提示信息');
     

  },

  methods:{
    // 页面跳转
    routerGo: function(path,params) {
      this.$router.push({ name: path,params:{id:params},query:{id:params} });
    },
    // 立即抢购
    buyCurr:function(id){
      let that=this;
      let token = this.$store.state.token;
      if (!that.tokenPass(token)) {
        return false;
      }

      Indicator.open({
        text:'抢购中...',
        spinnerType:'fading-circle'
      });
      
       let pays = tool.fetch('/yyyg/directPurchase','GET',{id:id},{
        "content-type": "application/json",
        "token":token
      });

      pays.then(res=>{
        Indicator.close();
        if (res.data.code==200) {
          that.$router.push({ name: 'paycenter',params:{id:res.data.data},query:{id:res.data.data} });  
        } else {          
          Toast('网络异常,请重试!');
        }
      }).catch(err=>{
        // 网络错误
        Indicator.close();
        Toast('网络异常,请重试!');
      })
    },
    // 加入购物车
    addCard:function(id){
      let that=this;
      let token = this.$store.state.token;
      // 验证登录
       
      if (!that.tokenPass(token)) {
        return false;
      }
      Indicator.open({
        text:'正在为您添加',
        spinnerType:'fading-circle'
      });
       
      
      let addC = tool.fetch('/yyyg/addcart','GET',{gid:id},{
        "content-type": "application/json",
        "token":token
      });
      addC.then(res=>{
        Indicator.close();
        if (res.data.code==200) {
          Toast('恭喜,添加成功');
          // console.log(res);
          that.routerGo('shop');

        } else {
          // 请求异常
          that.Toast('添加失败,稍后重试');
        }
      }).catch(err=>{
          Indicator.close();
          Toast('网络异常,请稍后重试');
      })
      
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
    // 
    setSearch(prodname){

        if (prodname.replace(/(^\s+)|(\s+$)/g, "")=='') {
          alert('请先输入您要搜索的商品');
          return false;
        }
        this.searchName = prodname ? prodname : this.searchName;
        this.visiable = false;
        this.pageInfo.page=0;
        this.pageInfo.title=this.searchName;
        this.pageInfo.key='';
        this.getGoodsInfo(2);


    },
    deleTeName(){
        this.searchName = ''
    },

    // 分类搜索
    handleClassify(prodindex,id){
      // 请求参数重新赋值
      this.proShow=!this.proShow;
      this.classifyActiveIndex = prodindex;
      this.pageInfo.page=0;
      this.pageInfo.title='';
      this.pageInfo.key=id;
      // 请求数据
      this.getGoodsInfo(2);

    },

    // 排序搜索
    handleProdlist(prodIndex,key){
      this.prodActiveIndex = prodIndex;
      this.pageInfo.title='';
      this.pageInfo.page=0;
      this.pageInfo.key=key;
      if (prodIndex==3) {
        this.routerGo('announce');
        return false;
      }else{
        this.getGoodsInfo(2);
      }
      
    },
    // 滚动加载
    loadMore:function(){
      this.getGoodsInfo(1);     
    },
    // 
    // 初始化页面数据&&上拉加载&&分类请求&&排序请求&&函数
    // type:1 ==>上拉加载
    // type:2 ==>分类加载
    // 
    getGoodsInfo(type){
      let that =this;
        if (type==2) {
          Indicator.open({
          text:'正在为您添加',
          spinnerType:'fading-circle'
        });
      }
      let getGoodsInfo = tool.fetch('/yyyg/classify','GET',that.pageInfo);

      getGoodsInfo.then(res=>{
        // console.log(res);
        Indicator.close();
        if (res.data.code==200) {

          if (res.data.data.length!=0) {
            // console.log(type);
            
            if(type==2){
              // 分类请求,清除原来数据
              that.goodsList.length=0;
                     
            }
            if(type==1){
              // 滚动请求,关闭加载状态
              that.$refs.loadmore.onBottomLoaded();  
            }
  
            that.goodsList=that.goodsList.concat(res.data.data);
            that.pageInfo.page++;

          } else {

            that.$refs.loadmore.onBottomLoaded();
            Toast('没有更多数据了');
          }

        } else {
          // 数据异常
        }        
      })
      .catch(err=>{
        // 网络异常,请求失败
      })
    },

    // 请求分类列表
    // 无参数
    classList(){
      let that = this;
      let classList = tool.fetch('/yyyg/classlist','GET');
      classList.then(res=>{
        // console.log(res);
        if (res.data.code==200) {
          that.classifylist=res.data.data;
        } else {
          // 失败
        }
        
      }).catch(err=>{
        console.log('请求失败');
        
      })
    },
    // 获取搜索关键词
    // hotKey
    getHotKey(){
      let that = this;
      let hotKey = tool.fetch('/yyyg/hotsearch','GET');
      hotKey.then(res=>{
         
        if (res.data.code==200) {
// console.log(res.data.data);
          that.hotList=res.data.data;
        } else {
          
        }        
      }).catch(err=>{
        // 请求错误
        console.log(err);
        
      })
    },

    // 登录token验证
    tokenPass:function(token){
      if (!token) {
        MessageBox({
          showCancelButton:true,
          title:'您还没登录',
          message:'是否现在登录?',
          confirmButtonText:'现在登录',
          cancelButtonText:'再看看'

        }).then(action => {
          if (action=='confirm') {
            this.$router.push({path:'/login'});
          } else {
            return false
          }   
        });
        return false;
      }else{
        return true;
      }
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
        justify-content: flex-start;
        font-size: 0.64rem;
        flex-wrap: wrap;
        line-height: 0.8rem;
        color: #FB3812;
    }
    .auto-commend .commend-list span{
      padding: 0 .5rem;
    }
</style>
