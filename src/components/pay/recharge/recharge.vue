<template>
  <div class="paycenter recharge" id="paycenter">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>账户充值</span>
      <span class="exit"></span>
    </div>
    <div class="banlance">
      <p>可用余额
        <span>0.00</span>
        元</p>
      <p class="to_banlance">佣金转余额</p>
    </div>
    <div class="charge_tot">
      <p class="title">充值金额</p>
      <div class="nums">
        <div class="num_l">￥</div>
        <div class="num_r">
          <input maxlength="11" type="number" placeholder="自定义金额" />
        </div>
      </div>
    </div>
    <div class="costom">
      <ul>
        <li :class="[numNth==index?'on':'']" v-on:click="changeNum(index)" v-for="(item, index) in nums" :key="index">{{item}}元</li>
        
      </ul>
    </div>
    <div class="recharge_list">
      <ul>
        <li :class="[payNth==index?'on':'']" v-for="(item, index) in payMethod" :key="index" v-on:click="swichPayStyle(index)">
          <p class="name">
            <img :src="baseImgUrl+item.ico" style="width:1.6rem;height:1.6rem;" />
            <span>{{item.name}}</span>
          </p>
          <p class="checked"></p>
        </li>
      </ul>
    </div>

    <p class="rechar_confirm" v-on:click="routerGo('partrecord')">确认充值</p>
    

      <el-dialog class="conf_num" width="13rem" height="auto" center :visible.sync="edishow" title="确认支付" :show-close="false" top='0'>
          <span class="closes" v-on:click="close_dig">
            <img :src="baseImgUrl+'close_55_55.png'" style="width:1.1rem;height:1.1rem;" alt="" srcset="">
          </span>
          <p class="num_tot">￥1.00</p>
          <div class="pay_method">

            <p>付款方式</p>
            <p class="changem">
              <span>支付宝</span>
              <img :src="baseImgUrl+'right.png'" style="width:.42rem;height:.74rem;" alt="" srcset="">
            </p>
            <!-- <p class="pay_confirm"></p> -->
             

          </div>
          <p class="pay_confirm" v-on:click="close_dig">确定</p>
   
     </el-dialog>
 
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      edishow:false,
      nums:[20,30,50,100,200,500],
      numNth:0,
      payMethod: [
        {
          name: "支付宝支付",
          ico: "charge1.png"
        },
        {
          name: "微信支付",
          ico: "charge2.png"
        },
        {
          name: "第三方支付",
          ico: "charge3.png"
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
    changeNum: function(index) {
      this.numNth = index;
    },
    close_dig:function(){
      console.log(1)
      this.edishow=!this.edishow;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "recharge.css";
</style>
