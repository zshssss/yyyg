<template>
  <div class="exportorder" id="exportorder">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>晒单记录</span>
      <span class="exit"></span>
       
    </div>
    <div class="export_list">
        <ul>
            <li v-for="(item, index) in takes" :key="index"  @click="routerGo('prodetail')">
                <div class="export_ico">
                    <img :src="baseImgUrl+'rxport_ico_66_66.png'" style="width:1.32rem;heigth:1.32rem;" alt="">
                </div>
                <div class="export_box">
                    <p class="title">{{item.title}}</p>
                    <p class="tel">{{item.phone}}</p>
                    <div class="flex js_start al_center order_detail">
                        <div class="order_ico">
                            <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="height:2.9rem;width:2.3rem;" alt="" srcset="">
                        </div>
                        <div class="order_inf">
                            <p class="order_name">（第{{item.goodsphase}}期）{{item.name}}{{item.desc}}</p>
                            <p class="flex js_between al_between price" style="width:100%;">
                                <span style="padding-right:0;">价值：￥{{item.price}}元</span>
                                <span style="">{{item.addtime}}</span>                  
                            </p>
                        </div>
                    </div>
                </div> 
            </li>
        </ul>
    </div>
 
  </div>
</template>
<script>
import tool from'../../../../utils/tool.js'

export default {
  name: "exportorder",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      takes:null
    };
  },
  created: function() {
      console.log(11);
      let token = this.$store.state.token;
         this.exportlist(token);
    //   this.exportlist();      
  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path) {
      this.$router.push({ name: path });
    },

    // 请求晒单记录
    exportlist:function(token){
        let that = this;
        if (!that.tokenPass(token)) {
        return false;
        }
        let takes = tool.fetch('/yyyg/evaluate','GET',{type:1},{token:token});
        takes.then(res=>{
            console.log(res);
            
            if (res.data.code==200) {
                console.log(res);
                that.takes=res.data.data
                
            } else {
                // 请求异常
            }
        }).catch(err=>{
            // 网络错误
        })
    },
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
@import "exportrecord.css";
</style>
