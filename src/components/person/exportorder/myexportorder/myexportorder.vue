<template>
  <div class="exportorder" id="exportorder">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>我的晒单</span>
       
      <span class="exit" v-on:click="routerGo('exporseaction')">我要晒单</span>
    </div>
    <div class="export_list">
        <ul>
            <li v-for="(item, index) in exportList" :key="index"  @click="routerGo('prodetail',item.id)">
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
                            <p class="order_name">（第{{item.goodsphase}}期）{{item.name}}{{item.desc}} 正在揭晓</p>
                            <p class="price">
                                <span>价值：￥{{item.price}}元</span>
                                <span>{{item.addtime}}</span>                  
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
import tool from "../../../../utils/tool"

export default {

  name: "exportorder",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      apiImgUrl:this.$store.state.apiImgUrl,
      exportList:null
    };
  },
  created: function() {
      let that=this;
      let token = this.$store.state.token;
      this.getEx(token);

  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path,id) {
      this.$router.push({ name: path,query:{id:id} });
    },
    getEx:function(token){
        let that = this;
        let getEx = tool.fetch('/yyyg/evaluate','GET',{type:1},{token:token})
        getEx.then(res=>{
            console.log(res);
            if (res.data.code==200) {
                // console.log(1);
                
                that.exportList=res.data.data
            } else {
                // 请求异常
            }
            
        }).catch(err=>{
            // 网络错误
            // console.log(err);
            
        })
    }
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "myexportorder.css";
</style>
