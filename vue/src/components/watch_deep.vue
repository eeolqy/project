<template>
    <div>
        <div >{{b}}</div>
        <el-button @click="changeB">B</el-button>
        <el-button @click="changeB1">B1</el-button>
        <el-button @click="changeB2">B2</el-button>
        
        <hr />
        <br />
        <br />
        <el-table
	      :data="tableData"
	      style="width: 100%">
	      <el-table-column
	        prop="date"
	        label="日期"
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
	        <template scope="scope">
	        	{{scope.row.address}}
	        	<el-popover
				  placement="right"
				  width="200"
				  @show="popoverShow"
				  @hide="popoverHide"
				  :trigger='manual'
				  :value="popoverflag"
				  >
				  <p style="position:absolute;top:0;background:#f66;left:0;bottom:0;right:0;" @mouseleave= 'mouseleave'>444444444444444</p>
				  <el-button @click.native="btn"  slot="reference">focus 激活</el-button>
				</el-popover>
	        </template>
	      </el-table-column>
	    </el-table>
	    
	     <!--<el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
		    <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
		  </el-tooltip>-->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                b:{
                    b1:'b1',
                    b2:'b2',
                    b3:'b3'
                },
                a:true,
                popoverflag:false,
                manual:'manual',
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
        watch:{
            // b:{
            //     handler(newValue){
            //         console.log(newValue)
            //         //this.$message(newValue);
            //     },
            //     deep:true
            // },
            'b.b1'(newValue){
                console.log(newValue)
                this.$message(newValue);
            },
            'b.b2'(newValue){
                console.log(newValue)
                this.$message(newValue);
            }
        },
        methods:{
            changeB(){
                this.b.b3='B3'
            },
            changeB1(){
                this.b.b1='B1'
            },
            changeB2(){
                this.b.b2='B2'
            },
            popoverShow(){
            	
            },
            popoverHide(){
            	
            },
            btn(){
            	this.popoverflag = true
            	
            	this.manual="hover"
//          	setTimeout(()=>{
//          		this.popoverflag = false
//          	},1000)
           },
           mouseleave(){
           	console.log(111)
           }
        }
    }
</script>

<style lang="less">

</style>
