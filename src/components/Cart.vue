<template>
  <div class="container">
    <myhead title="购物车"></myhead>
    <div class="top">
      <div class="cartList0" v-show="cList.length==0">
        <img src="../assets/404_img2.png" alt="">
        <h3 v-show="cList.length==0&&!!uid">购物车是空的</h3>
        <h3 v-show="!uid">您还未登录</h3>
        <mt-button v-show="!uid" type="danger" size="large" @click="jump">请登录</mt-button>
      </div>
      <div v-show="cList.length>0" class="listItem" v-for="(p,i) in cList" :key="i">
        <div class="select">
          <input type="checkbox" v-model="p.isSelected" @change="changeSelected">
        </div>
        <div class="listImage">
          <img :src="require('../'+p.pic)" alt="">
        </div>
        <div class="content">
          <p class="title">{{p.title}}</p>
          
          <div class="btn">
            <P class="price">¥{{p.price*p.count}}</P>
            <button @click="reduce($event)" :data-iid="p.iid" :data-index="i">-</button>
            <span type="text" ref="myCount">{{p.count}}</span>
            <button @click="add($event)" :data-iid="p.iid" :data-index="i">+</button>
            <button class="del" @click="del($event)" :data-iid="p.iid" :date-index="i">删除</button>
          </div>

        </div>
      </div>
    </div>
    <div class="foot">
      <input class="selectAll" type="checkbox" v-model="isSelectedAll" @change="changeChecked">全选
      <span class="heji">合计:</span>
      <span class="total">¥{{total}}</span>
      <button class="jiesuan">去结算</button>
    </div>
  </div>
</template>
<script>
import Head from './common/Head'
export default {
  data(){
    return{
      pid:0,
      cList:[],//保存购物车数据
      isSelectedAll:false,
      total:0,
      uid:""
    }
  },
  components:{
    "myhead":Head
  },
  created(){
    var uid=this.$route.params.uid
    this.uid=uid
    this.getList()
    //遍历this.myList数组，给每一个对象天面一个属性isSelected来记录是否被选中
    for(var i=0;i<this.cList.length;i++){
      this.cList[i].isSelected=false
    }
    this.total=this.calcAll()
  },
  methods:{
    getList(){
      var uid=this.$route.params.uid
      this.uid=uid
      
     this.axios({
              url:"cart/list",
              method:"get",
              params:{user_id:uid}
              
            }).then((result)=>{
              console.log(result)
              if(result.data.code!=300){
                this.cList=result.data.data
              }
            })
    },
    jump(){
      this.$router.push("/Login")
    },
    reduce($event){
      var index=$event.target.dataset.index
      var iid=$event.target.dataset.iid
      var myCount=$event.currentTarget.nextElementSibling.innerHTML
       if(myCount>1){
         myCount--
       }else{
         myCount=1
       }
       $event.currentTarget.nextElementSibling.innerHTML=myCount
        this.cList[index].count=myCount
       this.countChange(iid,myCount)
       

    },
    add($event){
       var index=$event.target.dataset.index
       var iid=$event.target.dataset.iid
      var myCount=$event.currentTarget.previousElementSibling.innerHTML
         myCount++
       $event.currentTarget.previousElementSibling.innerHTML=myCount
        this.cList[index].count=myCount
       this.countChange(iid,myCount)
       
    },
    del($event){
      var index=$event.target.dataset.index
      var iid=$event.target.dataset.iid
      this.axios({
              url:"cart/del",
              method:"get",
              params:{iid:iid}
              
            }).then((result)=>{
              this.cList.splice(index,1)
              this.total=this.calcAll()
            })

    },
    countChange(iid,count){
      this.axios({
              url:"cart/updatecount",
              method:"get",
              params:{iid:iid,count:count}
              
            }).then((result)=>{
              this.total=this.calcAll()
            })
    },
    changeChecked(){
      for(var i=0;i<this.cList.length;i++){
        this.cList[i].isSelected=this.isSelectedAll
      }
      this.total=this.calcAll()
    },
    changeSelected(){
      //遍历购物车的每一个商品，做一个逻辑与运算，将最终的结果 赋值给this.isAllSelected
    var result=true
    for(var i=0;i<this.cList.length;i++){
      result=result&&this.cList[i].isSelected
    }
      this.isSelectedAll=result
      this.total=this.calcAll()
    },
     //计算被选中的商品的总价格
    calcAll(){
      var totalPrice=0;
      for(var i=0;i<this.cList.length;i++){
        if(this.cList[i].isSelected){
          //单价*数量
          totalPrice+=(this.cList[i].price*this.cList[i].count)
        }
      }
      return totalPrice
    }


  }
}
</script>
<style scoped>
  .cartList0{
    margin-top: 20px;
  }
  .cartList0 h3{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .listItem{
    display: flex;
    align-items: center

  }
  .btn{
    display: flex;
  }
  .select input{
    width: 20px;
    height:20px;
    margin-left: 10px;
  }
  .listImage img{
    width: 80px;
    height:80px;
  }
  .title{
    text-align: left;
    padding:10px;
    margin-bottom: 0;
  }
  .price{
    text-align: left;
    padding-left: 10px;
    color: red;
  }
  .btn{
    display: flex;
    align-items: center;
    /* justify-content: space-between */

  }
  .btn p{
    margin: 0;
    margin-right: 30px;
    position: relative;
  }
  .btn span{
    padding: 5px;
  }
  .del{
    position: absolute;
    right: 10px;
  }
  .foot{
    width: 100%;
    height:40px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    position: relative;
    
  }
  .selectAll{
    /* float: left; */
    width: 20px;
    height:20px;
    margin-left: 10px;
    margin-right: 5px;
  }
  .heji{
    margin-left: 20px;
  }
  .total{
    color: red;
    
  }
  .jiesuan{
    position: absolute;
    right: 30px;
    background-color: #f20;
    color: #fff;
    border-radius: 5px;
  }
  
  

</style>
