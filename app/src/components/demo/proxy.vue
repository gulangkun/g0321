<template>
  <div>
    <h4>{{item.detailMovie.dra}}</h4>
  </div>
</template>
<script>
export default {
  data(){
    return {
      item:"", //输入用户名
    }
  },
  created:function(){
      this.proxy()
  },
  methods:{
    proxy(){
     var url = "/apis/ajax/detailmovie?movieId=32";
     this.axios.get(
       url
     ).then(res=>{
       console.log(res.data);
       this.item=res.data;
     });
    }
  }
}
</script>
