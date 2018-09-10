<template>
  <div class="tc box shop" id="shop">
    <div class="top_title">购物车</div>
    <!-- 购物车内容 -->
    <div v-if="shopShow" class="shop_list">
      <ul>
        <li  v-for="(cartItem, index) in shopCart" :key="index" v-on:click="routerGo('prodetail')">
          <div class="flex js_center al_center shop_detail_ico">
            <img :src="apiImgUrl+cartItem.cover" style="width:3.74rem;height:4.7rem;" alt="">
          </div>
          <div class="shop_detail_r">
            <p class="shop_name">
              <!-- （第333期）Apple iPhone 8(A1863)64G移动  -->
              （第{{cartItem.gnum}}期）{{cartItem.name}} {{cartItem.desc}}
              剩余 <span>{{parseInt(cartItem.participation)}}{{cartItem.already}}</span> 人次</p>
            <p class="shop_nums">总共抢购:<span>{{cartItem.already}}</span>人次</p>
            
            <div class="flex js_between al_center box numschange">
              <p class="flex js_between al_center shop_numc">
                <span @click.stop="changeProdCount(cartItem.id,type=2)"></span>
                
                <span>{{cartItem.num}}</span>
                <span  @click.stop="changeProdCount(cartItem.id,type=1)"></span>
              </p>
              <p class="flex js_center al_center shop_del" @click.stop="handleDele(cartItem.id)">
                <img :src="baseImgUrl+'del-28_34.png'" style="width:.56rem;height:.68rem" alt="">
              </p>
            </div>
          </div>
        </li>  
      </ul>
      <div class="tc topay" v-on:click="totPay()">立即支付</div>
    </div>

    <!-- 购物城为空 -->

    <div v-else class="shopcartnone">
      <div class="warm_ico">
        <img :src="baseImgUrl+'warm_114.png'" style="width:2.28rem;height:2.28rem;" alt="">
      </div>
      <p class="tip">抱歉，您的购物车没有商品记录！</p>
      <p class="tc topay" v-on:click="routerGo('index')">马上去购物</p>
    </div>
     


    <!-- 底部导航 -->
    <div class="tab_posi">
      <TabBar :nth='3'></TabBar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import TabBar from "./publicfile/tabbar";
import api from '../utils/tool'
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';

export default {
  components: { TabBar },
  name: "shop",

  data() {
    return {
      apiImgUrl: this.$store.state.apiImgUrl,
      baseImgUrl: this.$store.state.baseImgUrl, 
      limit:5,
      haveBuy:1,
      shopCart:[],
      shopShow:true
    };
  },

  created: function() {
    this.getlist()
  },
  computed: {},
  methods: {
    routerGo:function(pathName){
      this.$router.push({ name: pathName });
    },
    getlist(){
      api.fetch('/yyyg/cart','get',{},{token:this.$store.state.token}).then((response)=>{
        let { code , msg, data } = response.data;
        // console.log(data)
        if(code === 200){
          this.shopCart =this.formatData(data)
        }else{
          this.shopShow = false;
          Toast({
            message: response.data.msg,
            duration: 2000
          })
          
        }
        
      })
    },
    formatData(cartList){
      console.log(cartList)
      return  cartList.map((cart)=>{
        return cart;
        // let{id,gid,gnum,name,desc,already,participation,cover,num} = cart;
        // return{
        //   id,
        //   gid,
        //   gnum,
        //   name,
        //   desc,
        //   already,
        //   participation,
        //   cover,
        //   num
        // }
      })
      
    },
    changeProdCount(id,type){
      console.log(id,type)
       api.fetch('/yyyg/cartItem?orderid='+id+'&str='+type,'GET',{},{token:this.$store.state.token}).then((response)=>{
         console.log(response)
         this.getlist()
      })

    },
    handleDele(id){
      api.fetch('/yyyg/cartdel?id='+id,'GET',{},{token:this.$store.state.token}).then((response)=>{
        this.getlist()
      
      })
    },

    // 购物车结算
    totPay:function(){
      Indicator.open({
        text:'努力生成订单中...',
        spinnerType:'fading-circle'
      });
      let that = this;
      let token = this.$store.state.token;
      let totP= api.fetch('/yyyg/cartpay','GET',{},{
        "content-type": "application/json",
        "token":token
      });
      totP.then(res=>{
        Indicator.close();
        if (res.data.code==200) {
          that.$router.push({ name: 'paycenter',params:{id:res.data.data},query:{id:res.data.data} });  
        } else {
           Toast('网络异常,请重试!');
        }
                 
      }).catch(err=>{
          Toast('网络错误,请重试!');
      })
    }
  }
};
</script>


 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
