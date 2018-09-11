<template>
  <div class="paycenter" id="paycenter">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>支付中心</span>
      <span class="exit"></span>
    </div>
    <!-- 地址 -->
    <div class="box flex js_between al_start pay_addr" v-on:click="routerGo('addrlist')">
      <div class="box flex js_start al_center addr_left">
        <div class="addr_ico">
          <img :src="baseImgUrl+'pay_addr_center_56_56.png'" style="width:1.12rem;height:1.12rem" alt="">
        </div>
        <div class="addr_detail">
          <p>
            <span class="name">{{orderList.name}}</span> 
            <span class="tel">{{orderList.phone}}</span>
          </p>
          <p class="addrd">{{orderList.city_id}} {{orderList.address}}</p>
        </div>
      </div>

      <div class="addr_right">
        <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem" alt="">
      </div>
    </div>
    <!-- 订单信息 -->

    <div class="pay_proinfo">
      <ul>
        <li v-for="(item, index) in orderList.detail" :key="index" v-on:click="routerGo('prodetail',item.goodsid)">
          <div class="pro_ico">
            <img :src="apiImgUrl+item.goodscover" style="" alt="">
          </div>
          <div class="pro_info">
            <p class="des">（第{{item.goodsphase}}期）{{item.goodsname}}{{item.goodsdesc}} </p>
            <p class="model">型号：A1863</p>
            <p class="nums">共{{item.goodsnum}}件</p>
            <p class="flex js_start al_center numchange">
                <span @click.stop.prevent="redProdCount(index)" style="background-image"></span>
                <span>{{item.goodsnum}}</span>
                <span @click.stop.prevent="addProdCount(index)"></span>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 支付方式选择 -->
    <div class="paymethod">
      <ul>
        <li v-for="(item, index) in payMethod" :key="index" v-on:click="swichPayStyle(index)">
          <p class="ico">
            <img :src="baseImgUrl+item.ico" alt="">
            <span>{{item.name}}</span>
          </p>
          <p class="check" v-bind:class="[index==payNth?'on':'']"></p>
        </li>
      </ul>
    </div>

  <!-- 发起支付 -->
  <div class="topay">

    <p>
      <span>实付款：</span>
      <span>￥{{orderList.totalprice}}（免运费）</span>
    </p>
    <p @click="ToPayOrder()">立即支付</p>

  </div>

  <!-- 弹窗 -->

    <div class="n_dailog_box" v-show="showDialog">
      <div class="n_dailog">
      <p class="close" v-on:click="showDialog=false">
          <img :src="baseImgUrl+'close_56_56.png'" style="width:1.12rem;height:1.12rem;" alt="">
        </p>
      <p class="addr_edit_title">余额不足请充值</p>
      <div class="cell">
        <p class="n_btn"  v-on:click="routerGo('recharge')">确定</p>
        <p class="n_btn"  v-on:click="showDialog = !showDialog">取消</p>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import tool from "../../utils/tool"
export default {
  name: "product",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      apiImgUrl:this.$store.state.apiImgUrl,
      haveBuy:1,
      showDialog:false,

      payMethod: [
        {
          name: "余额",
          ico: "pay_center_ye_43_55.png"
        },
        {
          name: "支付宝支付",
          ico: "pay_center_zfb_44_44.png"
        },
        {
          name: "微信支付",
          ico: "pay_center_wechat_42_36.png"
        }
      ],
      // 订单商品信息
      orderList:{},
      payNth: 0,
      orderId:null
    };
  },
  created: function() {
    // 请求支付商品信息
    let that = this;
    let id = this.$route.query.id;
    this.orderId=id;
    let token = this.$store.state.token;

    this.getGoodInfo(id,token);

  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path,id='') {
      this.$router.push({ name: path,query:{id:id} });
    },

    // 请求商品信息

    getGoodInfo:function(id,token){
      let that = this;
      let orderInfo = tool.fetch('/yyyg/pay','GET',{orderid:id},{
        "content-type": "application/json",
        "token":token
      });

      orderInfo.then(res=>{

        console.log(res);
        
        if (res.data.code==200) {
          that.orderList=res.data.data[0];    
        } else {
          // 
        }
        
        
        
      }).catch(err=>{
        console.log(err);  
      })
    },

    // 





    swichPayStyle: function(index) {
      this.payNth = index;
    },


    // 商品数量减1
    redProdCount(index){
       
      let that = this;
      let token = that.$store.state.token;
      let orderId = that.orderId;
      
      if(this.orderList.detail[index].goodsnum<=1){
        Toast({
          message: '不得小于1',
          duration: 5000
        });
        return;
      }else{
        that.numChange(orderId,token,2,index)
      }
      // this.orderList.detail[index].goodsnum --;
    },

    // 商品数量加一
    addProdCount(index){
      let that = this;
      let token = that.$store.state.token;
      let orderId = that.orderId;

       if(this.orderList.detail[index].goodsnum>=5){
         Toast({
          message: '不得多于5',
          duration: 5000
        });
        return;
      }else{
        that.numChange(orderId,token,1,index);
      }
      //


      // this.orderList.detail[index].goodsnum ++;
    },
    // 商品数量加减
    numChange(id,token,str,index){
      let that = this;
      let orderInfo = tool.fetch('/yyyg/detailitem','GET',{orderid:id,str:str},{
        "content-type": "application/json",

        "token":token
      });
      orderInfo.then(res=>{
        console.log(res);
          if (res.data.code==200) {
            if (str==1) {
            that.orderList.detail[index].goodsnum ++;
          } else {
            that.orderList.detail[index].goodsnum --;
          }
        }else{
          // 
          Toast('修改失败')
        }
        
        
      }).catch(err=>{
        console.log(err);
        
      })
    },
    // 
    ToPayOrder(){
      this.showDialog = true
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


/* 重写dilog */
.n_dailog_box{
  position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    background: rgba(0,0,0,0.5);
}
.n_dailog{
    padding: 0 26px 26px;
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    width: 325px;
    margin: 0 auto;
    box-sizing: border-box;
    flex-direction: column;
    position: relative;
    color: #333333;
}
.n_dailog .close{
    position: absolute;
    right: -8px;
    top: -8px;
}
.n_dailog .addr_edit_title{
  font-size: 15px;
  text-align: center;
  line-height: 35px;
  margin-bottom: 20px;
}
.n_dailog .cell{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 50px;
  height: 50px;
  box-sizing: border-box;
}

.n_dailog  .cell .n_btn{
  text-align: center;
    padding: 15px 10px;
    width: 100px;
    line-height: 16px;
    font-size: 16px;
    height: 16px;
    background-color: #fb3812;
    border-radius: 4px;
    color: #fff;
}

</style>
