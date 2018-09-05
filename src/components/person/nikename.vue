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
        <input type="text" v-model="nikeNme" placeholder="输入新昵称" maxlength="12" value="">
        <span class="flex js_end al_center delate" v-on:click="clear">
            <img :src="baseImgUrl+'delete_32_32.png'" style="width:.64rem;height:.64rem" alt="">
        </span>
    </div>
    <p class="complete" v-on:click="back(1)">完成</p>
  </div>
</template>

<script>
export default {
  name: "nikename",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      nikeNme:''
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
    clear:function(){
        console.log(1);
        this.nikeNme='';
        
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
