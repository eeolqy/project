<template>
    <div>
        <div >{{b}}</div>
        <el-button @click="changeB">B</el-button>
        <el-button @click="changeB1">B1</el-button>
        <el-button @click="changeB2">B2</el-button>
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
            changeB(){
                this.b.b3='B3'
            },
            changeB1(){
                this.b.b1='B1'
            },
            changeB2(){
                this.b.b2='B2'
            }
        }
    }
</script>

<style lang="less">

</style>
