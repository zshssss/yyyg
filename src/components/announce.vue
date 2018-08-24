<template>
  <div class="announce" id="announce">
    <div class="tc top_title">最近揭晓</div>

    <!-- 正在揭晓 -->
    <div class="currents">
      <ul>
        <li>
          <div class="flex js_center al_center creent_ico">
            <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="width:3.74rem;height:4.7rem" alt="">
          </div>
          <div class="flex creent_info">
            <p class="title">第333期）Apple iPhone 8(A1863)64G移动 正在揭晓</p>
            <p class="price">价值：￥5800元</p>
            <p class="flex js_start al_center box time">
              <img :src="baseImgUrl+'time_28_28.png'" style="height:.56rem;width:.56rem;" alt="">
              <span class="info">揭晓时间</span>
              <span class="timenum">12：00</span>
            </p>
          </div>
        </li>
        
      </ul>
    </div>

    <!-- 已经揭晓 -->
    <div class="currents history">
      <ul>
         <template v-for="(item, index) in history"> 
        <li>
          <div class="flex js_center al_center creent_ico">
            <img :src="baseImgUrl+'jiexiao_ico_187_235.png'" style="width:3.74rem;height:4.7rem" alt="">
          </div>
          <div class="flex creent_info">
             <div class="box flex js_start al_center userinfo">
               <div class="user_ico">
                 <img :src="baseImgUrl+'userico_90_90.png'" style="width:1.8rem;heighr:1.8rem;" alt="">
               </div>
               <div class="user_i">
                 <div class="phone">幸运之星：<span>151****8359</span></div>
                 <div class="usernum">购买：<span>6</span> 人次</div>
               </div>

             </div>
             <div class="take_info">
               <p class="take_num">第（200期）共500人参与</p>
               <p class="take_time">揭晓时间：2018-01-01</p>
             </div>
          </div>
        </li>
         </template>
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
export default {
  components: { TabBar },
  name: "announce",
  data() {
    return {
       baseImgUrl: this.$store.state.baseImgUrl,
      history:[0,0,0]
    };
  },
  created: function() {},
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
