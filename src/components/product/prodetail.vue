<template>
  <div class="product_detail" id="product_detail">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>产品详情</span>
      <span class="exit"></span>
    </div>

    <!-- 产品图片轮播 -->
    <div class="over prodetail_banner">
      <mt-swipe :auto="4000">
        <template v-for="(item, index) in goodIn.broad">
        <mt-swipe-item>
          <img :src="apiImgUrl+item" style="width:15rem;height:9.5rem;" alt="">
        </mt-swipe-item>
      </template>
        

      </mt-swipe>
    </div>

    <div class="over box pro_detail_info">
      <p class="box detail_title">
        第{{goodIn.num}}期）{{goodIn.name}}
      </p>

      <div class="pro_detail_take">
        <p class="box price">价值￥{{goodIn.price}}（抢购{{goodIn.qingprice}}每人次）</p>
        <p class="range">
          <span class="grade" :style="{width:goodIn.already/goodIn.participation*100+'%'}"></span>
        </p>

        <div class="over box flex js_between al_center pro_tainfo">
          <p>
            <span>{{goodIn.already}}</span>
            <span>已参与</span>
          </p>
          <p>
            <span>{{goodIn.participation}}</span>
            <span>共需参与</span>
          </p>
          <p>
            <span>{{goodIn.surplus}}</span>
            <span>剩余</span>
          </p>
        </div>
      </div>
      <div class="box over flex js_between al_center buy">
        <p v-on:click="addCard(goodIn.id)">加入购物车</p>
        <p v-on:click="buyCurr(goodIn.id)">一元抢购</p>
        <!-- <p v-on:click="routerGo('paycenter')">立即购买</p> -->
        <p>立即购买</p>
      </div>
    </div>

    <div class="take_record">
      <p class="flex js_between al_center sunburn"  v-on:click="routerGo('exportrecord')">
        <span>晒单</span>
        <span><img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt=""></span>
      </p>
      <p class="flex js_between al_center sunburn">
        <span>参与记录</span>
        <span></span>
      </p>
      <div class="record_list">
        <ul>
          <template v-for="(item, index) in goodIn.discloseinfo">
          <li>
             <div class="taker_ico">
               <img :src="apiImgUrl+item.headpic" style="width:1.2rem;height:1.2rem;" alt="">
             </div>
             <div class="taker_info">
               <p>
                 <span class="wram_color">{{item.phone}}</span>
                  <span>（第{{item.phase}}期）</span> 
                </p>
               <p>
                 <span>抢购了</span><span class="wram_color">{{item.buynum}}</span><span></span>次</span>            
                 <span class="span2">{{item.time}}</span>
                </p>
             </div>
          </li>
          </template>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import tool from "../../utils/tool"
import { Toast } from 'mint-ui';
import { Indicator } from "mint-ui";
import { MessageBox } from 'mint-ui';
export default {
  name: "product",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      apiImgUrl:this.$store.state.apiImgUrl,
      goodIn:{}
    };
  },
  created: function() {
     let id = this.$route.query.id;
     console.log(id);
    // 请求商品详情
     this.getGoodInfo(id);

  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo:function(path){
      this.$router.push({name:path})
    },

    // 抢购
     buyCurr:function(id){
      let that=this;
      let token = this.$store.state.token;
      if (!that.tokenPass(token)) {
        return false;
      }
      // 等待框
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

    // 获取商品信息
    getGoodInfo(id){
      
      let that = this;
      let goodInfo = tool.fetch('/yyyg/goodsInfo','GET',{id:id});
      goodInfo.then(res=>{
        if (res.data.code==200) {
          that.goodIn=res.data.data;
          console.log(res);
        } else {
          // 请求失败
        }
         
      }).catch(err=>{
        // 网络错误
      })

    },
    // 验证登录
    tokenPass:function(token){
      if (!token) {
        MessageBox({
          showCancelButton:true,
          title:'您还没登录',
          message:'是否现在登录?',
          confirmButtonText:'现在登录',
          cancelButtonText:'再看看'

        }).then(action => {
          console.log(action);
          
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
</style>
