// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'


// axios
Vue.prototype.$ajax = axios

// rem适配
import rem from './assets/rem'
// 工具
import tool from './utils/tool'
Vue.prototype.tool = tool;

// layer
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
 

// 样式
import moduleName from './assets/iconfont/iconfont.css';
import style from './assets/css/style.css';




 
// axios配置
// axios.defaults.baseURL = "https://service.ruizhixue.cn/ht/ygsy/"
Vue.prototype.HOST='/apis'
 

// 引入mintUI
import MintUI from 'mint-ui'
// 引入mintUI样式
import 'mint-ui/lib/style.css'
// 使用mintUI
Vue.use(MintUI)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
