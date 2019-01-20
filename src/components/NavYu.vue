<template>
  <div class="nav">
    <div class="nav_top">
      <router-link v-bind:to="{path:'/'}">
        <img src="../assets/logo.png" alt="" class="logo_img">
      </router-link>
      <div class="nav_right">
        <a href="javascript:;">登录</a>
        <span>|</span>
        <a href="javascript:;">注册</a>
        <span>|</span>
        <a href="javascript:;">关于</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavYu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .nav {
    width: 100%;
    height: 80px;
    background-color: #363636;
    overflow: hidden;
  }
.nav_top{
  width:1200px;
  margin:0 auto;
}
  .logo_img {
    margin-left: 50px;
    margin-top: 20px;
    float: left;
    width: 40px;
    height: auto;
  }

  .nav_right {
    float: right;
    line-height: 80px;
    margin-right: 50px;
  }

  .nav_right span {
    color: #FFF;
  }

  a {
    margin: 0 10px;
  }
</style>
