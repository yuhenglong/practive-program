<template>
  <div id="app">
    <nav-yu></nav-yu>
    <router-view/>
    <footer-yu></footer-yu>

  </div>
</template>

<script>
import navYu from './components/navYu'
import wrapYu from './components/wrapYu'
import footerYu from './components/footerYu'
export default {
  name: 'App',
  components: { footerYu, wrapYu, navYu }
}
</script>

<style>
  *{
    padding:0;
    margin:0;
  }
  a{
    text-decoration: none;
    color:#fff;
  }
  .fl{
    float:left;
  }
  .fr{
    float:right;
  }
  .ov{
    overflow:hidden;
  }
  #app{
    background: #f0f2f5;
  }
</style>
