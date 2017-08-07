<template>
  <div class="hello">
    <h1 @click="a">{{ msg }}</h1>
    {{value}}
    <div></div>
    <hr>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        :render-header="formatter"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props:['value'],
  data () {
    return {
     msg: 'Welcome to Your Vue.js App',
     tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
    a(){
      this.$emit('input',9)
      //this.value=11;
      //num.v=3
    },
    formatter(h,{column,$index}){
      //console.log(h)
    //  return h('div',{

    //       },[
    //         h('p',{
    //         style:{
    //           border:'1px solid #f66'
    //         },
    //         on:{
    //           click(){
    //             alert(2)
    //           }
    //         },
    //         value:222
    //       }),
    //     h('p',1),
    //     h('p',1),
    //     h(
    //     'el-button',
    //     {
    //       props: {
    //         content: '222',
    //         effect: 'dark',
    //         placement: 'top'
    //       }
    //     })

    //   ])
    // }
      let children = [];
      children.push(h('p', {
        style:{
          background:'#f66'
        },
      },1)) //组件1
      children.push(h('p',{},333)) //组件2
      children.push(h('p', {})) //组件3
      return h('div', {},children)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
