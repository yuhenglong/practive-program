<template>
  <div class="tiao_one">
    <p class="p_til">数据统计</p>
    <p class="p_green">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    <table>
      <tr>
        <td>产品类型：</td><td><ul><li v-for="(lis,index) in li_list" v-on:click="addLiClass(index)" v-bind:class="{active:index == nowIndex}">{{ lis.msg }}</li></ul></td>
      </tr>
      <tr>
        <td>适用地区：</td>
        <td>
          <select name="" id="" class="sel">
            <option :value="sels.msg" v-for="sels in sel_list">{{ sels.msg }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>有效时间：</td>
        <td>半年</td>
      </tr>
      <tr>
        <td>总价：</td>
        <td> {{ onePrice }} </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button class="btn_two">立即购买</button>
        </td>
      </tr>
    </table>
    <div class="tab">
      <p class="p_til">产品说明</p>
      <p class="p_til_two">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      <table border="0" cellspacing="1" cellpadding="0">
        <tr>
          <td>安全安保</td>
          <td>办公文教</td>
          <td>彩票</td>
          <td>车辆物流</td>
          <td>成人用品</td>
          <td>出版传媒</td>
          <td>电脑硬件</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TiaoOne',
  data () {
    return {
      li_list:[{
        msg:'红色版'
      },{
        msg:'绿色版'
      },{
        msg:'紫色版'
      }],
      sel_list:[{
        msg:'北京'
      },{
        msg:'上海'
      },{
        msg:'广州'
      },{
        msg:'深圳'
      }],
      onePrice:0,
      nowIndex: 0
    }
  },
  methods:{
    addLiClass:function(index){
      console.log(index);
      this.nowIndex = index;
    }
  }
}
</script>
<style>
  .tab table{
    width: 100%;
    table-layout:fixed;
    text-align:center;
  }
  .tab table{ background:#F00}
  .tab table td{ background:#FFF}
  .btn_two{
    width:100px;
    text-align:center;
    background-color: #4fc08d;
    color:#fff;
    font-size:16px;
    line-height:30px;
    border:1px solid #d3d3d3;
    cursor:pointer;
  }
  .sel{
    margin:10px 0;
    padding:5px;
    font-size:16px;
    line-height:16px;
  }
  .tiao_one{
    background-color: #fff;
    padding:10px 20px;
  }
.p_til{
  font-size:20px;
  line-height:40px;
}
.p_til_two{
  font-size:16px;
  line-height:16px;
}
  .p_green{
    background-color: #f7fcff;
    font-size:16px;
    line-height:20px;
    padding:5px;
  }
  table{
    margin-bottom:30px;
  }
  table li{
    display:inline-block;
    padding:5px;
    background-color: #fff;
    margin-right:10px;
    color:#333;
    border-radius:4px;
    font-size:16px;
    line-height:26px;
    border:1px solid #d3d3d3;
  }
  table li:hover{
    cursor:pointer;
  }
  table li.active{
    background-color: #4fc08d;
    color:#fff;
  }
  table tr{
    padding:10px 0;
    font-size:16px;
    line-height:30px;
  }
  table tr td:first-child{
    width:80px;
  }
  table tr td:nth-child(2){
    padding-left:10px;
  }
</style>
