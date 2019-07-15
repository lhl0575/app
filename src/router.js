import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Index from './components/Index.vue'
import Cart from './components/Cart.vue'
import Order from './components/Order.vue'
import My from './components/My.vue'
import Detail from './components/Detail.vue'
import Reg from './components/Reg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/Home"},
    {path:'/Home',component:Home},
    {path:'/Index',component:Index},
    {path:'/Cart/:uid',component:Cart},
    {path:'/Order',component:Order},
    {path:'/My',component:My},
    {path:'/Login',component:Login},
    {path:'/Reg',component:Reg},
    {path:'/Detail/:pid',component:Detail}
    
  ]
})
