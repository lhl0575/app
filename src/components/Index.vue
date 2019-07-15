<template>
  <div class="container">
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(p,i) in imageList" :key="i">
          <img class="banImage" :src="require('../'+p.img)" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <p class="Floor">推荐商品</p>
    <div class="firstContent">
      <ul>
        <li v-for="(p,i) in rList" :key="i" @click="jump(p.pid)" >
          <div>
            <img class="img" :src="require('../'+p.pic)" alt="">
          </div>
          <div class="content">
            <p class="title">{{p.title}}</p>
            <p class="details">{{p.details}}</p>
          </div>

        </li>
      </ul>
    </div>
    <p class="Floor">新品上市</p> 
    <div class="firstContent">
      <ul>
        <li v-for="(p,i) in nList" :key="i" @click="jump(p.pid)">
          <div>
            <img class="img" :src="require('../'+p.pic)" alt="">
          </div>
          <div class="content">
            <p class="title">{{p.title}}</p>
            <p class="details">{{p.details}}</p>
          </div>
        </li>
      </ul>
    </div> 
    <p class="Floor">热销单品</p> 
    <div class="firstContent">
      <ul>
        <li v-for="(p,i) in hList" :key="i" @click="jump(p.pid)">
          <div>
            <img class="img" :src="require('../'+p.pic)" alt="">
          </div>
          <div class="content">
            <p class="title">{{p.title}}</p>
            <p class="details">{{p.details}}</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return{
      imageList:[],//保存轮播图图片数据
      rList:[],//保存推荐商品数据
      nList:[],//保存新品上市的数据
      hList:[]//保存热销单品数据
    }
  },
  created(){
    this.axios({
              url:"index",
              method:"get",
              
            }).then((result)=>{
                console.log(result.data);
                this.imageList=result.data.carouselItems
                this.rList=result.data.recommendedItems
                this.nList=result.data.newArrialItems
                this.hList=result.data.topSaleItems
            })
  
  
  },
  methods:{
    jump(id){
      this.$router.push('/Detail/'+id)  
    }
  }
}
</script>
<style scoped>
.container{
  margin-bottom: 60px;
}
  .swipe{
    height:150px;
  }
  .banImage{
    width: 90%;
    height:150px;
    padding-top: 10px;
  }
  .Floor{
    text-align: left;
    font-size: 20px;
    margin-top: 15px;
    margin-left: 10px;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .firstContent ul li{
    display: flex;
    border-bottom: 1px solid #bbb;

  }
  .img{
    width:100px;
    height:100px;
    padding: 5px;
  }
  .content p.title{
    overflow: hidden;
    padding-top: 10px;
    padding-left: 10px;
    text-align: left
  }
  .content p.details{
    overflow: hidden;
    padding: 0 10px 0 10px;
    text-align: left
  }
</style>

