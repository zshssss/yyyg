import Vue from "vue";
import axios from "axios";

import { Swipe, SwipeItem } from "mint-ui";
import { Indicator } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 底部tabbar
import TabBar from "./publicfile/tabbar";
export default {
  components: { TabBar },
  name: "index",
  data() {
    return {
      show: false,
      baseImgUrl: this.$store.state.baseImgUrl,
      banners: [0, 0, 0],
      recom: [0, 0],
      hour:null,
      minu:null,
      second:null,
      comeSoon:[
        {name:'jiexiao_01_ico_160_147.png'},
        {name:'jiexiao_02_ico_160_147.png'},
        {name:'jiexiao_03_ico_160_147.png'},
        {name:'jiexiao_04_ico_160_147.png'}
      ],
      baseImgUrl: this.$store.state.baseImgUrl,
      prodlist:['全部商品','科技数码','手机电脑','珠宝首饰','奢饰品区','金银投资','名表专区','茶酒专区','食品饮料','家用电器','生活百货','妇婴用品'],
      proShow:false,
      visiable:false,
      searchName:null,
      hotList:['口红','手机','耳机'],
      showSlide: false
    };
    
    
  },
  created: function() {  
    console.log(1);
      
    axios({
      method: "POST",
      url: "/apis/register",
      data: {
        phone: 18037472380,
        password: "123"
      },
      header: {
        "content-type": "application/json"
      }
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(ers) {
        console.log(ers);
      });
  },
  mounted(){
 
    this.formatDate()
  },
  computed: {},
  methods: {
    formatDate(formatStr,timep) {
     setInterval(()=>{
       var endPoin= new Date('2018-09-01').getTime();
      var leftTime = endPoin - new Date().getTime();
      var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
      var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
      var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
      this.hour = (hours>9) ? hours :'0'+ hours;
      this.minu = (minutes>9) ? minutes :'0'+ minutes;
      this.second = (seconds>9) ? seconds :'0'+ seconds;

    },1000)
    },
    routerGo: function(pathName, params) {
      this.$router.push({ name: pathName });
    },
    seaBack:function(){
      this.show=false
    },
    showSea:function(){
       this.show=true
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
    },

   

  

  }
  
};