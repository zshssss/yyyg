<template>
  <div class="addrlist" id="addrlist">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>收货地址</span>
      <span class="exit"></span>
    </div>

    <div class="addrdetail_list">
        <ul>
            <li  v-for="(item, index) in 3" :key="index">
               <div class="flex js_between al_center add_top">
                   <section class="deindo">
                       <p class="concat">
                           <span class="name">张某某 </span>
                           <span class="tel">176****1234</span>    
                        </p>
                       <p class="detal">
                           河南省 郑州市 管城区 **路**号
                       </p>
                   </section>
                   <section class="tc chose" :class="[index==0?'on':'']">
                    使用
                   </section>
               </div> 
               <div class="addr_edit">
                   <p class="addr_default" :class="[index==0?'on':'']">
                       <span></span>
                       <span>设为默认</span>
                   </p>
                   <p class="bjin" v-on:click="edishow=true">编辑</p>
               </div>
            </li>
        </ul>
    </div>

    <div class="addaddrs" v-on:click="edishow=true">添加地址</div>



  <el-dialog width="13rem" height="8rem" center :visible.sync="edishow" :show-close="false" top='0'>
  <p class="close" v-on:click="edishow=false">
    <img :src="baseImgUrl+'close_56_56.png'" style="width:1.12rem;height:1.12rem;" alt="">
  </p>
   <p class="addr_edit_title">编辑地址</p>
   <section class="userinfo">
     <input type="text" placeholder="张某某" />
     <input type="number" placeholder="1752557577" />
   </section>
  <section class="addrsss n-rewrite" >
    <p> 河南省 郑州市 管城区<p/>
    <img :src="baseImgUrl+'right.png'" style="width:.54rem;height:.74rem" alt="">
  </section>
  <section class="addrdetail">
    <input type="text" placeholder="黄河南路商都路" />
  </section>
  <p class="saveinfo">保存</p>
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
    }
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

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
