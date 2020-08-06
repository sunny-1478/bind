import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import moment from 'moment'
Vue.prototype.moment=moment;
// 导入Mint UI
import MintUI from 'mint-ui'
// 导入Mint UI样式表文件
import 'mint-ui/lib/style.css'

// 通过vue.use()方法注册为全局插件
Vue.use(MintUI)
// 配置axios的基础地址
axios.defaults.baseURL='http://127.0.0.1:3000';
// 在vue的原型链上扩展属性
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
