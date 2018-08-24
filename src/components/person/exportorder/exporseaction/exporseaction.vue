<template>
  <div class="exportorder" id="exportorder">
    <!-- 顶部标题 -->
    <div class="tc box rel flex js_between al_center top_title">
        <span class="back" v-on:click="back(1)">
           <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt="">
        </span>
       <span>晒单</span>
        
      <span class="exit" v-on:click="routerGo('exportrecord')">晒单记录</span>
    </div>
    <div class="write_export">
        <textarea placeholder="说点什么吧...."></textarea>
    </div>

    <div class="addimg">
        <div class="addbu">
            <p class="add">

            </p>
            <p class="name">图片</p>
        </div>
    </div>

    <p class="send_indo">发布</p>
  </div>

</template>
<script>
export default {
  name: "exportorder",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl
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
    }
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "exporseaction.css";
</style>
