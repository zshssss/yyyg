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
        <ul class="img-container" >
          <li class="img-item" v-if="item" v-for="(item,key) in srcUrls" :key="key">
              <img class="bg-img" :src="item" alt="user image">
              <a class="delete-item">
                <span @click="handleDelete(key)">
                  <i class="el-icon-delete"></i>
                </span>
              </a>
          </li>
        </ul>
        <div class="addbu">
            <p class="add">
              
            </p>
            <!-- <p class="name">图片</p> -->
            <label for="fileupload">图片</label>
        </div>
        <input type="file" @change="getFile" ref="fileupload" id="fileupload" multiple="multiple">
    </div>

    <p class="send_indo" v-on:click="back(1)">发布</p>
  </div>

</template>
<script>
export default {
  name: "exportorder",
  data() {
    return {
      baseImgUrl: this.$store.state.baseImgUrl,
      srcUrls:[]
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
    getFile (e) {

        let _this = this
        var files = e.target.files[0]
        if (!e || !window.FileReader) return;
        var reader = new FileReader()
        reader.readAsDataURL(files) // 转换
        reader.onloadend = function () {
          _this.srcUrls.push(this.result)
          _this.$refs.fileupload.value = ''
        }
 
      },
      handleDelete(index){
        this.srcUrls.splice(index,1);
      }
  }
};
</script>

 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "exporseaction.css";
</style>
