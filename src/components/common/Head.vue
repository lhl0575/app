<template>
  <div class="container">
    <div class="header">
      <img @click="back" src="../../assets/back.png" alt="">
      <span>{{title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  props:{
    title:{default:""}
  },
  methods:{
    back(){
      this.$router.push("/Home")
    }
  }

}
</script>
<style scoped>
.header{
  width: 100%;
  height:48px;
  background: #ccc;
  display: flex;
  align-items: center;
}
.header img{
  height:30px;
  width: 30px;
  margin-left: 10px;
}
.header span{
  margin-left: 120px;
}
</style>

