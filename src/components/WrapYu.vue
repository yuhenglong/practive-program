<template>
  <div class="wrap ov">
    <div class="slidebar fl">
      <div class="slide_til">全部产品</div>
      <dl>
        <dt>PC产品</dt>
        <dd>数据统计</dd>
        <dd>数据预测</dd>
        <dd>流量分析<i class="hot">hot</i></dd>
        <dd>产品发布</dd>
      </dl>
      <div class="line"></div>
      <dl>
        <dt>手机应用类</dt>
        <dd>91助手</dd>
        <dd>产品助手<i class="hot">hot</i></dd>
        <dd>智能地图</dd>
        <dd>团队语音</dd>
      </dl>

      <div class="line"></div>
      <div class="slide_til">全部产品</div>
      <dl>
        <dt>最新消息</dt>
        <dd>新闻条目一</dd>
        <dd>新闻条目二</dd>
        <dd>新闻条目三</dd>
        <dd>新闻条目四</dd>
      </dl>
    </div>
    <div class="slide_con fr">
      <wrap-con></wrap-con>
    </div>
  </div>
</template>
<script>
import WrapCon from './WrapCon'
export default{
  name: 'WrapYu',
  components: { WrapCon }
}
</script>
<style>
  .wrap {
    width: 1200px;
    height: auto;
    background: #fff;
    margin: 20px auto;
  }

  .slidebar {
    box-shadow: 0 0 1px #ddd;
    width: 300px;
    height: auto;
    background-color: #fff;
  }

  .slide_con {
    width: 900px;
    height: auto;
    background-color: #fff;
  }

  .slide_til {
    padding: 10px 15px;
    background-color: #4fc08d;
    color: #fff;
    font-size: 20px;
    line-height: 20px;
  }

  .slidebar dl {
    padding: 10px 0;
  }

  .slidebar dl dt {
    font-size: 20px;
    color: #333;
    padding:0 15px 10px;
  }

  .slidebar dl dd {
    font-size: 16px;
    color: #666;
    margin: 5px 16px;
  }
  .hot{
    background-color: red;
    padding:1px 3px;
    color:#fff;
    font-size:20px;
    font-style:normal;
    margin-left:5px;
  }
  .line{
    width:100%;
    height:1px;
    background-color: #e4e4e4;
  }
</style>
