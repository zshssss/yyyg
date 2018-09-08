<template>
  <div class="customerservice" id="customerservice">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>我的推广人上</span>
      <span class="exit"></span>
    </div>

    <div v-for="exten in extension" :key="exten.id">
      <div class="myextension_nikename">
        <img :src="baseImgUrl+'userico_90_90.png'" style="width:1.4rem;height:1.4rem" alt="">
        <span class="nike">{{exten.nickname}}</span>
      </div>
      <p class="infosection">
        <span>手机号</span>
        <span>{{exten.phone}}</span>
      </p>
      <p class="infosection">
        <span>推广时间</span>
        <span>{{exten.addtime}}</span>
      </p>
    </div>
   
  </div>
</template>
<script>
import api from '../../../../utils/tool'
import { Toast } from 'mint-ui';
export default {
  name: "customerservice",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      extension:[]
    };
  },
  created: function() {
    api.fetch('/yyyg/generalize','get',{token:this.$store.state.token},{token:this.$store.state.token}).then((response)=>{
      
            if(response.data.code == 200){
                this.extensionList = this.formatData(response.data.data)
            }else{
              Toast({
                  message: response.data.msg,
                  duration: 2000
                  });
            }
    })
  },
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    routerGo: function(path) {
      this.$router.push({ name: path });
    },
    formatData(extension){
      console.log(extension)
      return  extension.map((extens)=>{
        let{addtime,phone,nickname,headimg} = extens;
        var time = new Date(+addtime*1000);
        var formatime = time.getFullYear()+'/'+time.getMonth()+'/'+time.getDate();
        return{
          addtime:formatime,
          nickname,
          phone,
          headimg
        }
      })
      
    }
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "myextension.css";
</style>
