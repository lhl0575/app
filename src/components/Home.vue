<template>
  <div>
    <!-- 切换面板 -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="index">
        <index></index>
      </mt-tab-container-item>
      <mt-tab-container-item id="cart">
        <cart></cart>
      </mt-tab-container-item>
      <mt-tab-container-item id="order">
        <order></order>
      </mt-tab-container-item>
      <mt-tab-container-item id="my">
        <my></my>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部导航栏 -->
    <mt-tabbar class="tabbar" v-model="selected" fixed>
      <mt-tab-item id="index">
        <img slot="icon" src="../assets/index.png"  alt="">
        首页
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="../assets/cart.png"  alt="">
        购物车
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="../assets/order.png"  alt="">
        订单
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="../assets/my.png"  alt="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

import Index from './Index'
import Cart from './Cart'
import Order from './Order'
import My from './My'

export default {
  data(){
    return {
      selected:"index"
    }
  },
  components:{
    "index":Index,
    "cart":Cart,
    "order":Order,
    "my":My
  }
}
</script>

<style>
.tabbar{
  height:50px;
  display: flex;
  align-items: center;
}
.mint-tabbar > .mint-tab-item{
    color:gray;     
}
.mint-tab-item-label {
    font-size: 16px !important;  
}
</style>
