<template>
  <div class="telchange" id="telchange">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_red_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>修改手机</span>
      <span class="exit"></span>
    </div>

    <div class="chage_list">
        <ul>
            <li>
                <span>当前手机号</span>
                <span>176****2326</span>
            </li>
            <li>
                <input class="input_yzm" type="number" placeholder="请输入验证码" maxlength="10" v-model="yzm">
                <span class="get_yzm">获取验证码</span>
            </li>
        </ul>
    </div>
    
    <p class="complete" v-on:click="back(1)">验证</p>
  </div>
</template>

<script>
export default {
  name: "nikename",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl, 
      yzm:''
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
        this.nikeNme='';    
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
