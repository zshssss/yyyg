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
        <li>
          <div class="pro_ico">
            <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="" alt="">
          </div>
          <div class="pro_info">
            <p class="des">（第333期）Apple iPhone 8(A1863)64G移动hone 8(A1863)64G移动hone 8(A1863)64G移动 </p>
            <p class="model">型号：A1863</p>
            <p class="nums">共1件</p>
            <p class="flex js_start al_center numchange">
                <span @click="redProdCount()" style="background-image"></span>
                <span>{{haveBuy}}</span>
                <span @click="addProdCount()"></span>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 支付方式选择 -->
    <div class="paymethod">
      <ul>
        <template v-for="(item, index) in payMethod"> 
        <li v-on:click="swichPayStyle(index)">
          <p class="ico">
            <img :src="baseImgUrl+item.ico" alt="">
            <span>{{item.name}}</span>
          </p>
          <p class="check" v-bind:class="[index==payNth?'on':'']"></p>
        </li>
      </template>
      </ul>
    </div>

  <!-- 发起支付 -->
  <div class="topay">
    <p>
      <span>实付款：</span>
      <span>￥1（免运费）</span>
    </p>
    <p>立即支付</p>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
