<template>
  <div class="container">
    <myhead title="商品详情"></myhead>
    <!-- 轮播图 -->
    <div class="swipe">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="(p,i) in picList" :key="i">
          <img class="dImage" :src="require('../'+p.md)" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 标题 -->
    <p class="pTitle">{{pTitle}}</p>
    <!-- 副标题 -->
    <p class="pSubtitle">{{pSubtitle}}</p>
    <p class="price">¥{{price.toFixed(2)}}</p>
    <div class="foot">
      <mt-button>
        <img class="iconImage" src="../assets/kefu.png" alt="">
      </mt-button>
      <mt-button>
        <img class="iconImage" src="../assets/collect.png" alt="">
      </mt-button>
      <mt-button @click="jumpCart">
        <img class="iconImage" src="../assets/cart.png" alt="">
      </mt-button>
      <mt-button type="danger" class="buy" @click="buy" >加入购物车</mt-button>
    </div>
    
  </div>
</template>
<script>
import Head from './common/Head'
export default {
  data(){
    return {
      pid:0,
      picList:[],
      pTitle:"",
      pSubtitle:"",
      price:0,
      
    }
  },
  components:{
    "myhead":Head
  },
  created(){
    this.pid=this.$route.params.pid
    console.log(this.pid)
    this.axios({
              url:"product/detail",
              method:"get",
              params:{lid:this.pid}
              
            }).then((result)=>{
                this.picList=result.data.details.picList
                this.pTitle=result.data.details.title
                this.pSubtitle=result.data.details.subtitle
                this.price=result.data.details.price
                
            })
  },
  methods:{
    buy(){
      this.axios({
        url:"user/sessiondata",
        method:"get",

      }).then((result)=>{
          var uid=result.data.uid
        if(result.data.uid==null){
          this.$router.push("/Login")
        }else{
          this.axios({
            url:"cart/add",
            method:"get",
            params:{
              user_id:result.data.uid,
              lid:this.pid,
              buyCount:1
            }
          }).then((result)=>{
            if(result.data.code==200){
              this.$router.push("/Cart/"+uid)
            }
          })
          
        }
        
      })
    },
    jumpCart(){
      // this.$router.push("/Cart/12")
       this.axios({
        url:"user/sessiondata",
        method:"get",

      }).then((result)=>{
          var uid=result.data.uid
        if(result.data.uid==null){
          this.$router.push("/Login")
        }else{
          this.$router.push("/Cart/"+uid)
        }
        
      })
    }
  }
}
</script>

<style scoped>
.swipe{
  height:300px;
  padding: 20px;
  
}
  .dImage{
    height:280px;
    width:100%;
  }
  .pTitle{
    font-size: 18px;
    color:black;
    text-align: left;
    padding: 10px;
    font-weight: 600;
  }
  .pSubtitle{
    font-size: 14px;
    color:red;
    text-align: left;
    padding: 10px;
    font-weight: 500;
  }
  .price{
    color:red;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    margin-left: 15px;
  }
  .iconImage{
    width:30px;
    height:30px;
  }
  .foot{
    margin-top: 85px;
    
  }
  .buy{
    width:50%;
  }
</style>

