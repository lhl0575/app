<template>
  <div>
    <myhead title="登录"></myhead>
    <div class="avatar">
      <img src="../image/avatar.jpg" alt="">
    </div>
    <div class="content">
      <mt-field label="账号:" placeholder="请输入账号" v-model="uname"></mt-field>
      <mt-field label="密码:" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
    </div>
    <div class="lReg">
      <span>忘记密码？</span>
      <span @click="reg">免费注册</span>
    </div>
    <div class="login">
      <mt-button type="primary" size="large" class="mybutton" @click="Login">登录</mt-button>
    </div>
  </div>
</template>
<script>
import Head from './common/Head'
export default {
  data(){
    return{
      uname:"",
      upwd:""
    }
  },
  components:{
    "myhead":Head
  },
  methods:{
    Login(){
            
            //完成用户登录
            //1.获取用户输入的用户名3-10
            //2.获取用户输入密码3-8
            //3.创建正则表达式
            var ureg=/^[a-zA-Z0-9]{3,10}$/
            var preg=/^[a-zA-Z0-9]{3,8}$/
            //4.判断用户名格式不正确 提示出错
            if(!ureg.test(this.uname)){
                this.$toast("用户名格式不正确")
                return;
            }
            //5.判断密码格式不正确 提示出错
            if(!preg.test(this.upwd)){
                this.$toast("密码格式不正确")
                return;
            }
            
            //6.将用户名和密码发送ajax请求
            if(ureg.test(this.uname)&&preg.test(this.upwd)){
                this.axios({
                    url:"user/login",
                    method:"post",
                    data:{
                        uname:this.uname,
                        upwd:this.upwd
                    }
                }).then((result)=>{
                    console.log(result.data);
                    this.$router.push('/Home')
                })
            }else{
                this.$toast("用户名或密码输入错误")
            }
            //7.并且获取服务器返回结果
            //8.返回失败 提示
            //9.返回成功 跳转Homexz.vue
        },
        reg(){
          this.$router.push("/Reg")
        }

  }
}
</script>
<style >
  .avatar{
    margin-top: 25px;
    margin-bottom:30px;
  }
  .avatar img{
    width: 150px;
    height:150px;
    border-radius: 50%;
  }
  .content .mint-cell-value input.mint-field-core{
    border: 0 !important;
    margin-bottom: 0 !important;
    padding-left: 0;
  }
  .login{
    width: 100%;
    text-align: center;
  }
  .login button{
     width:330px;
      height:45px;
      background: #0aa1ed;
      border-radius: 5px;
      margin-top: 30px;
      color: #fff;
      margin-left: 22px;
  }
  .lReg{
    display: flex;
    justify-content: space-between;
    height: 30px;
    align-items: center;
    margin-top: 20px;
  }
  .lReg span{
    padding: 20px;
  }
</style>

