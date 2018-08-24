<template>
  <div class="order">
    <div class="tab_posi">
      <TabBar :nth='2'></TabBar>
    </div>
  </div>
</template>

<script>
import TabBar from './publicfile/tabbar'
export default {
  components : {TabBar},
  name: "order",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab_posi{
  height: 2rem;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
}
</style>
