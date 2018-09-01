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
            <span class="name">张某某</span> 
            <span class="tel">176****1234</span>
          </p>
          <p class="addrd">河南省 郑州市 管城区 **路**号</p>
        </div>
      </div>

      <div class="addr_right">
        <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem" alt="">
      </div>
    </div>
    <!-- 订单信息 -->

    <div class="pay_proinfo">
      <ul>
        <li v-on:click="routerGo('prodetail')">
          <div class="pro_ico">
            <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="" alt="">
          </div>
          <div class="pro_info">
            <p class="des">（第333期）Apple iPhone 8(A1863)64G移动hone 8(A1863)64G移动hone 8(A1863)64G移动 </p>
            <p class="model">型号：A1863</p>
            <p class="nums">共1件</p>
            <p class="flex js_start al_center numchange">
                <span @click.stop.prevent="redProdCount()" style="background-image"></span>
                <span>{{haveBuy}}</span>
                <span @click.stop.prevent="addProdCount()"></span>
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
      <span>￥1（免运费）</span>
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
export default {
  name: "product",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
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
      payNth: 0
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
    swichPayStyle: function(index) {
      this.payNth = index;
    },
    redProdCount(){
      if(this.haveBuy<=1){
        alert('不得小于1')
        return;
      }
      this.haveBuy --;
    },
    addProdCount(){
       if(this.haveBuy>=5){
        alert('不得多于5 ');
        return;
      }
      this.haveBuy ++;
    },
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
