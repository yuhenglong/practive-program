<template>
  <div class="detail_wrap ov">
    <div class="detail_left fl">
      <img v-bind:src="nowSrc" alt="" class="img_mar_top">
      <ul>
        <router-link v-bind:to="{ path:list.src }" v-for="list in detail_list" class="a_yu" active-class="active">{{ list.title }}</router-link>
      </ul>
    </div>
    <div class="detail_right fl">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
  export default {
    name:'Detail',
    data(){
      return {
        detail_list:[{
          src:'/Detail/TiaoOne',
          title:'数据统计'
        },{
          src:'/Detail/TiaoTwo',
          title:'数据预测'
        },{
          src:'/Detail/TiaoThree',
          title:'流量分析'
        },{
          src:'/Detail/TiaoFour',
          title:'广告发布'
        }],
        imgMap:{
          '/Detail/TiaoOne': require("../assets/images/1.png"),
          '/Detail/TiaoTwo': require("../assets/images/2.png"),
          '/Detail/TiaoThree': require("../assets/images/3.png"),
          '/Detail/TiaoFour': require("../assets/images/4.png")
        }
      }
    },
    computed:{
      nowSrc:function(){
        return this.imgMap[this.$route.path]
      }
    }
  }
</script>
<style scoped>
  .detail_wrap{
    width:1200px;
    height:auto;
    margin:0 auto;
  }
  .detail_left{
    width:200px;
    height:auto;
    background-color: #fff;
    text-align:center;
  }
  .img_mar_top{
    margin:10px 0;
   }
  .a_yu{
    list-style:none;
    text-align:left;
    padding-left:20px;
    font-size:20px;
    line-height:30px;
    color:#333;
    display:block;
  }
  .detail_right{
    width:1000px;
    height:auto;
  }
  .detail_left a.active,.detail_left a:hover{
    background-color: #4fc08d;
  }
</style>
