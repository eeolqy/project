<template>
    <div>
        <el-button :plain="true" @click="error">错误显示</el-button>
        <el-button :plain="true" @click="correct">正确显示</el-button>
        <h3>Checkbox</h3>
        <Render></Render>
        <div v-for="item in c"  class="">
            <aaaa :cellBoxData="item"></aaaa>
        </div>
    </div>
</template>

<script>
    import Render from './render.vue'
    export default {
        props:['config'],
        data(){
            return{
                c:[1,2,3,4,56,76],
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
        components:{
            aaaa:{
                props:['cellBoxData'],
                render(h){
                    return this.config.renderBox(h,this.cellBoxData)
                }
            },
            Render
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
