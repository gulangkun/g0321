<template>
  <div class="hello">
      <div class="title">这是首页</div>
      <div>这里显示用户id:{{uid}}</div>
      <router-link to="/Login"></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      uid:""
    }
  },
  created() {
    // 登陆状态的uid 
    this.uid = sessionStorage.getItem("uid");
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
