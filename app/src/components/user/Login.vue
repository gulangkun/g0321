<template>
  <div>
    <h4>Login.vue</h4>
    <!--1:用户名输入框-->
    <input ref="uname" placeholder="请输入用户名" v-model="uname" :attr="{autofocus:true}" />
    <!--2:密码输入框-->
    <input ref="upwd" placeholder="请输入密码" v-model="upwd">
    <!--3:登录按钮-->
    <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"", //输入用户名
      upwd:""   //输入密码
    }
  },
  methods:{
    login(){
     //功能:完成用户登录操作
     //1:获取用户输入用户名
     var u = this.uname;
     //2:获取用户输入密码
     var p = this.upwd;
     console.log("1:"+u+"_"+p);
     //3:创建正则表达式 3~12 字母数字
     var reg = /^[a-z0-9]{3,12}$/i;
     //4:验证用户名
     if(reg.test(u)==false){
      //5:验证不成功 提示消息
      window.alert("用户名格式不正确")
      return;
     }
     //6:验证密码
     if(reg.test(p)==false){
      //7:验证不成功 提示消息
      window.alert("密码格式不正确")
      return;
     }
     //8:发送ajax请求
     var url = "login";
     var obj = {uname:u,upwd:p};
     this.axios.get(
       url,
       {params:obj}
     ).then(res=>{
       console.log(res.data.code);
       if(res.data.code<0){
         window.alert("用户名或密码有误");
       }else{
         sessionStorage.setItem("uid", res.data.uname) ;
         this.$router.push("/home");
       }
     });
    }
  }
}
</script>
