<template>
  <div class="nikename" id="nikename">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_red_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>个人资料</span>
      <span class="exit"></span>
    </div>
    <div class="flex js_between al_center nikeinput">
        <input type="text" v-model="nikeName" placeholder="输入新昵称" maxlength="12" value="">
        <span class="flex js_end al_center delate" v-on:click="clear">
            <img :src="baseImgUrl+'delete_32_32.png'" style="width:.64rem;height:.64rem" alt="">
        </span>
    </div>
    <p class="complete" v-on:click="editeNickname">完成</p>
  </div>
</template>

<script>
import api from '../../utils/tool'
import { Toast } from 'mint-ui';
export default {
  name: "nikename",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      nikeName:null
    };
  },
  created: function() {},
  computed: {},
  methods: {
    back: function(num) {
      this.$router.go(-1);
    },
    editeNickname(){
      if(this.nikeName){
         let token = this.$store.state.token;
         let nickname = this.nikeName;
        api.fetch('/yyyg/nick','GET',{nick:nickname},{token:token}).then((response)=>{
               Toast({
                    message: response.data.msg,
                    duration: 2000
                    });
           if(response.data.code === 200){
              this.$router.go(-1)
           }
      })
      }
      
    },
    routerGo: function(path) {
      this.$router.push({ name: path });
    }, 
    clear:function(){
        console.log(1);
        this.nikeName = null; 

    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
