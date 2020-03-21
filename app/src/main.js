import Vue from 'vue'
import App from './App.vue'
import router from './router'


import axios from "axios"
//6:配置服务器基础路径----使用反向代理时需要注释
//axios.defaults.baseURL="http://127.0.0.1:4000/"
//7:配置保存session信息
axios.defaults.withCredentials=true
//8:axios 注册vue
Vue.prototype.axios = axios

Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
