<template>
  <div class="intro ov">
   <div class="fl fl_box" v-for="item in list">
      <img :src="item.src" alt="" class="fl">
      <div class="fl li_yu">
        <p class="p_title">{{ item.p_title }}</p>
        <p class="p_title_t">{{ item.p_title_t }}</p>
        <!--<button class="btn">立即购买</button>-->
        <router-link :to="{ path:item.tokey }" class="btn">立即购买</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Intro',
  data () {
    return {
      list: [{
        src:require('../assets/images/1.png'),
        p_title:'开放产品',
        p_title_t:'开放产品是一款开放产品',
        tokey:"./Detail/TiaoOne"
      },
        {
          src:require('../assets/images/2.png'),
          p_title:'开放产品',
          p_title_t:'开放产品是一款开放产品',
          tokey:"./Detail/TiaoTwo"
        },
        {
          src:require('../assets/images/3.png'),
          p_title:'开放产品',
          p_title_t:'开放产品是一款开放产品',
          tokey:"./Detail/TiaoThree"
        },
        {
          src:require('../assets/images/4.png'),
          p_title:'开放产品',
          p_title_t:'开放产品是一款开放产品',
          tokey:"./Detail/TiaoFour"
        }]
    }
  }
}
</script>
<style>
  .li_yu{
    margin-left:10px;
  }
  .p_title{
    font-size:20px;
    line-height:40px;
    font-weight:bold;
  }
  .btn{
    background-color: #4fc08d;
    margin-top:5px;
    border:none;
    color:#fff;
    font-size:16px;
    padding:5px;
    outline:none;
    cursor:pointer;
    display:block;
    width:70px;
    text-align:center;
  }
  .fl_box{
    margin:20px 0;
    width:50%;
    box-sizing:border-box;
    padding-left:30px;
  }
</style>
