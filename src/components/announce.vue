<template>
  <div class="announce" id="announce">
    <div class="tc top_title">最近揭晓</div>

    <!-- 正在揭晓 -->
    <div class="currents" v-on:click="routerGo('prodetail')">
      <ul>
        <li v-for="item in process" :key="item.id">
          <p class="cus_tip">正在揭晓</p>
          <div class="flex js_center al_center creent_ico">
            <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="width:3.74rem;height:4.7rem" alt="">
          </div>
          <div class="flex creent_info">
            <p class="title">第{{item.num}}期）{{item.name}} {{item.desc}} 正在揭晓</p>
            <p class="price">价值：￥{{item.price}}元</p>
            <p class="flex js_start al_center box time">
              <img :src="baseImgUrl+'time_28_28.png'" style="height:.56rem;width:.56rem;" alt="">
              <span class="info">揭晓时间</span>
              <span class="timenum">{{formatDate(item.qing_time)}}</span>
            </p>
          </div>
        </li>
        
      </ul>
    </div>

    <!-- 已经揭晓 -->
    <div class="history">
      <ul>
        <li v-for="item in history" :key="item.id"  v-on:click="routerGo('prodetail')">
          <div class="flex js_center al_center creent_ico">
            <img :src="item.cover?apiImgUrl+item.cover:baseImgUrl+'jiexiao_ico_187_235.png'"  style="width:3.74rem;height:4.7rem" alt="">
          </div>
          <div class="flex creent_info">
             <div class="box flex js_start al_center userinfo">
               <div class="user_ico">
                 <img :src="item.headimg?apiImgUrl+item.headimg:baseImgUrl+'userico_90_90.png'" style="width:1.8rem;heighr:1.8rem;" alt="">
               </div>
               <div class="user_i">
                 <div class="phone">幸运之星：<span>{{item.phone.slice(0,3) +'****'+ item.phone.slice(-4)}}</span></div>
                 <div class="usernum">购买：<span>{{item.buynum}}</span> 人次</div>
               </div>

             </div>
             <div class="take_info">
               <p class="take_num">第（{{item.phase}}期）共{{item.pationnum}}人参与</p>
               <p class="take_time">揭晓时间：{{item.time&&item.time.slice(0,10)}}</p>
             </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 底部tab -->
     <div class="tab_posi">
      <TabBar :nth='1'></TabBar>
    </div>
  </div>
</template>

<script>
import TabBar from "./publicfile/tabbar";
import api from '../utils/tool'
export default {
  components: { TabBar },
  name: "announce",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      apiImgUrl:  this.$store.state.apiImgUrl,
      history:[],
      process:[]
    };
  },
  created: function() {
    api.fetch('/yyyg/openaward','get',{},{}).then((response)=>{
      console.log(response)
      const { already, process} =  response.data.data;
      this.history = already;
      this.process =  [
                    {
                           "id": 20,
                           "name": "苹果7",
                           "cover": "/upload/20180831/d3ad44519372d0d965e272b5b95184b2.jpg",
                           "pimg": "/upload/20180831/09570f0056124685006857ff128eb509.jpg,/upload/20180831/92a86c826e96e5ff550b846b0105bace.jpg,/upload/20180831/7bd1cc1d9d155d00c8c66e6cec82b066.jpg",
                           "typeid": 3,
                           "price": "100.00",
                           "qingprice": "1.00",
                           "sale": 0,
                           "participation": 50,
                           "desc": "128G 红色",
                           "sort": 101,
                           "commend": 1,
                           "status": 1,
                           "addtime": "1534930068",
                           "updatetime": "1535700405",
                           "del": "1",
                           "num": 1,
                           "already": 0,
                           "qing_time": 1536343680
                    }
             ];
    })
  },
  computed: {},
  methods: {
    routerGo: function(pathName, params) {
      this.$router.push({ name: pathName });
    },
    formatDate(second) {

      var endPoin= new Date(second*1000).getTime();
      var leftTime = Math.abs(endPoin - new Date().getTime());
      var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
      var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
       console.log( hours,minutes)
      hours = (hours>9) ? hours :'0'+ hours;
      minutes = (minutes>9) ? minutes :'0'+ minutes;
      console.log( hours,minutes)
      return hours+': '+minutes
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
