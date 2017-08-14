<template>
    <div>
        <el-button :plain="true" @click="error">错误显示</el-button>
        <el-button :plain="true" @click="correct">正确显示</el-button>
        <h3>Checkbox</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                a:'',
                b:{
                    a:''
                },
                b:{
                    a:{
                        c:''
                    }
                }
            }
        },
        watch:{
            a(oldvalue,newValue){
                console.log(oldvalue,newValue)
            },
            b(oldvalue,newValue){
                console.log(oldvalue,newValue)
            }
        },
        methods:{
            error(){
                this.$message('错误的打开方式');
            },
            correct(){
                console.log(this.$message.closeAll())
                this.$message('正确的打开方式');
            }
        }
    }
</script>

<style lang="less">
    
</style>
