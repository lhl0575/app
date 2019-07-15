<template>
  <div class="container">
    <myhead title="注册"></myhead>
    <div class="name">
      <img src="../assets/my.png" alt="">
      <input type="text" v-model="uname" placeholder="请输入用户名">
    </div>
    <div class="pass">
      <img src="../assets/pwd.png" alt="">
      <input type="password" v-model="upwd" placeholder="请输入密码">
    </div>
    <div class="pass">
      <img src="../assets/pwd.png" alt="">
      <input type="password" v-model="upwd2" placeholder="请确认密码">
    </div>
    <mt-button @click="reg" class="btnReg" type="primary" size="large">注册</mt-button>
  </div>
</template>
<script>
import Head from './common/Head'
export default {
  data(){
    return {
      uname:"",
      upwd:"",
      upwd2:""
    }
  },
  components:{
    "myhead":Head
  },
  methods:{
    reg(){
      console.log(this.uname,this.upwd,this.upwd2)
      //1.获取用户输入的用户名3-10
            //2.获取用户输入密码3-8
            //3.创建正则表达式
            var ureg=/^[a-zA-Z0-9]{3,10}$/
            var preg=/^[a-zA-Z0-9]{6,8}$/
            //4.判断用户名格式不正确 提示出错
            if(!ureg.test(this.uname)){
                this.$toast("用户名长度3~10")
                return;
            }
            //5.判断密码格式不正确 提示出错
            if(!preg.test(this.upwd)){
                this.$toast("密码长度6~8")
                return;
            }
            //6.如果用户名和密码格式都正确但是两次密码输入不一致
            if(ureg.test(this.uname)&&preg.test(this.upwd)&&this.upwd!=this.upwd2){
              this.$toast("两次密码输入不一致")
                return;
            }
            //7.如果用户名和密码格式都正确并且两次密码输入一致
            if(ureg.test(this.uname)&&preg.test(this.upwd)&&this.upwd==this.upwd2){
              //检测用户名是否已注册
              this.axios({
                    url:"user/checkuname",
                    method:"get",
                    params:{uname:this.uname}
                }).then((result)=>{
                    if(result.data.code==200){
                      this.axios({
                        url:"user/register",
                        method:"post",
                        data:{
                          uname:this.uname,
                          upwd:this.upwd
                        }
                      }).then((result)=>{
                          console.log(result.data);
                          if(result.data.code==200){
                            this.$toast("注册成功")
                            this.$router.push('/Login')
                          }
                           
                        })
                    }else{
                      this.$toast("用户名已存在")
                    }
                })
            }
    }
  }
}
</script>

<style>
.name{
  margin-top: 20px;
}
.name,.pass{
  display: flex;
  background-color: #fff !important;
  align-items: center;
}

.name img,.pass img{
  width: 30px;
  height: 30px;
  padding: 5px;
}
.name input,.pass input{
  border: 0 !important;
  margin: 0 !important;
  margin-left: 10px !important;
  padding-left: 0px !important;
  border-bottom: 1px solid #ccc !important;
}
.pass{
  margin-top: 20px;
}
.btnReg{
  margin-top: 30px;
}
</style>
