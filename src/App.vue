<template>
  <div id="app">
    <!-- {{this.$store.state.show}} -->
    <router-view/>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
#app {
}
</style>
