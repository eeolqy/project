<template>
    <div class="">
        <el-table
          :data="tableData"
          border
          v-if="flag"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            v-if="checkbox.indexOf('日期')>-1"
            width="180">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            v-if="checkbox.indexOf('姓名')>-1"
            width="180">
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop="address"
            v-if="checkbox.indexOf('地址')>-1"
            label="地址">
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table-column>
        </el-table>
        {{checkbox}}
        {{checkbox.indexOf('日期')}}
        <el-checkbox-group @change="checkboxChange" v-model="checkbox">
            <el-checkbox-button v-for="city in options" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              flag:true,
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
              }],
              options:['日期','姓名','地址'],
              checkbox:['日期','姓名','地址']

            }
      },
      methods:{
          checkboxChange(value){
              this.flag = false
              this.$nextTick(()=>{
                  this.flag = true
              })
          }
      }
    }
</script>

<style lang="less">
</style>
