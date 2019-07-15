<template>
  <div class="container">
    <div class="myTop">
      <div class="avitor">
        <img src="../assets/a.jpg" alt="">
      </div>
      <div class="login">
        <span id="login" @click="login">登录</span>
        <span id="reg" @click="reg">注册</span>
      </div>
      
    </div>
    <div class="content">
      <div class="rowInfo">
        <ul>
          <li>
            <img src="../assets/myInfo.png" alt="">
            <span>个人信息</span>
          </li>
          <li>
            <img src="../assets/qiandao.png" alt="">
            <span>签到</span>
          </li>
          <li>
            <img src="../assets/dengji.png" alt="">
            <span>我的等级</span>
          </li>
          <li>
            <img src="../assets/chongzhi.png" alt="">
            <span>充值兑换</span>
          </li>
        </ul>
      </div>
      <div class="clInfo">
        <div class="guanzhu">
          <div>
            <img src="../assets/guanzhu.png" alt="">
            <span>我的关注</span>
          </div>
          <span>&gt;</span>
        </div>
        <ul>
          <li class="cItem">
            <div>
              <img src="../assets/myOrder.png" alt="">
              <span>我的订单</span>
            </div>
            <span>&gt;</span>
          </li>
          <li class="cItem">
            <div>
              <img src="../assets/renwu.png" alt="">
              <span>新手任务</span>
            </div>
            <span>&gt;</span>
          </li>
          <li class="cItem">
            <div>
              <img src="../assets/huiyuan.png" alt="">
              <span>会员中心</span>
            </div>
            <span>&gt;</span>
          </li>
          <li class="cItem">
            <div>
              <img src="../assets/about.png" alt="">
              <span>关于我们</span>
            </div>
            <span>&gt;</span>
          </li>
        </ul>
      </div>
    </div>
    <mt-button class="logout" @click="logout" type="primary" size="large">退出登录</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    login(){
      this.$router.push("/Login")
    },
    reg(){
    this.$router.push("/Reg")
    },
    logout(){
      this.axios({
        url:"user/logout",
        method:"get"
      }).then((result)=>{
        if(result.data.code==200){
          this.$router.push("/Login")
        }
      })
    }
      
  }
}
</script>
<style >
.avitor{
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
}
.avitor img{
  width: 100px;
  height:100px;
  border-radius: 50%;

}
.myTop{
  display: flex;
  align-items: center;
}
#login{
  padding: 5px;
  margin-right: 10px;
}
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.rowInfo{
  background: #fff;
  margin-top: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.rowInfo ul{
  display: flex;
  justify-content: space-around;
  padding: 0;
}
.rowInfo ul li{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rowInfo ul li img{
  width:50px;
  height: 50px;
}
.guanzhu{
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

}
.guanzhu div{
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.guanzhu img{
  width:30px;
  height: 30px;
  margin-right: 10px;

}
.guanzhu>span{
  margin-right: 15px;
}
.clInfo{
  margin-top: 10px;
}
.cItem{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #fff;
  margin-bottom: 3px;

}
.cItem>span{
  margin-right: 15px;
}
.cItem div{
  display: flex;
  align-items: center;
  padding-left: 10px;

}
.cItem img{
  width:30px;
  height: 30px;
  margin-right: 10px;
}
.logout{
  margin-top: 30px;
}
</style>
