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
        <el-checkbox-group 
            v-model="lang"
            >
            <el-checkbox v-for="(v,i) in langs" :label="v.value" v-on:click.native.prevent="doThat(i)" :key="i">{{v.lang}}</el-checkbox>
        </el-checkbox-group>
        <div v-for="(v,i) in langs" v-if="lang.indexOf(i)>-1" >
            <el-input v-model="langs[i].inputTxt" placeholder="请输入内容"></el-input>
        </div>
        <el-dialog
          title="提示"
          :visible.sync="config.dialogVisible"
          size="tiny"
          >
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="config.dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="sure">确 定</el-button>
          </span>
        </el-dialog>


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
		          }],
                  langs:[{
                    lang:'中文',
                    value:0,
                    inputTxt:''
                  },{
                    lang:'英文',
                    value:1,
                    inputTxt:''
                  }],
                  lang:[0],
                  config:{
                    dialogVisible:false,
                    callback:{
                        yes:function(){

                        }
                    }
                  }
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
            sure(){
                this.config.dialogVisible  = false
                this.config.callback.yes()
            },
            doThat(i){
                if(this.langs[i].inputTxt!==''){
                    this.config.dialogVisible = true
                    this.cb(()=>{
                        if(this.lang.indexOf(i)>-1){
                             this.lang.map((la,li)=>{
                                console.log(la,li)
                                if(la==i){
                                    this.lang.splice(li,1)
                                    this.langs[li].inputTxt = ''
                                }
                             })
                        }else{
                            this.lang.push(i)
                             this.langs[i].inputTxt = ''
                        }
                    })
                }else{
                    if(this.lang.indexOf(i)>-1){
                         this.lang.map((la,li)=>{
                            console.log(la,li)
                            if(la==i){
                                this.lang.splice(li,1)
                                // break
                            }
                         })
                    }else{
                        this.lang.push(i)
                    }
                }


                // if(this.lang.indexOf(i)>-1){
                //      this.lang.map((la,li)=>{
                //         console.log(la,li)
                //         if(la==i){
                //             this.lang.splice(li,1)
                //             // break
                //         }
                //      })
                // }else{
                //     this.lang.push(i)
                // }
            },
            cb(callback){
                this.config.callback.yes = callback
            },
            setLang(i){
                if(this.lang.indexOf(i)>-1){
                     this.lang.map((la,li)=>{
                        console.log(la,li)
                        if(la==i){
                            this.lang.splice(li,1)
                            // break
                            this.langs[li].inputTxt=''
                        }
                     })
                }else{
                    this.lang.push(i)
                    this.langs[i].inputTxt=''
                }
            },
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
