<template>
  <div class="wrap_con">
    <slide-show :slides="slides" :inv="invTime"></slide-show>
    <introduct></introduct>
  </div>
</template>
<script>
import Introduct from './Introduct'
import slideShow from '../components/slideShow'
export default{
  name: 'WrapCon',
  components: {
    Introduct,
    slideShow
  },
  data () {
    return {
      invTime: 2000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: '1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: '2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: '3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: '4',
          href: 'detail/forecast'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .wrap_con {
    padding:0 10px;
  }

  li {
    list-style: none;
  }
</style>
