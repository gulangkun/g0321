import Vue from 'vue'
import Router from 'vue-router'

import HelloContainer from "./components/HelloWorld.vue"
import Login from "./components/user/Login.vue"
import Proxy from "./components/demo/proxy.vue"



Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Login',component:Login},
    {path:'/home',component:HelloContainer},
    {path:'/proxy',component:Proxy},
  ]
})
