<template>
    <div>
        <el-checkbox-group v-model="value.confirmCheckboxs">
            <el-checkbox v-for="item in value.selectedCheckboxs" :label="item.key" :key="item.key">{{item.lable}}</el-checkbox>
        </el-checkbox-group>
        <el-button @click="toAnotherSon"  type="primary-link">传递同级的组件</el-button>
    </div>
</template>

<script>
    import VueEvent from '../bus/event.js'
    export default {
        props:['value'],
        data(){
            return {
                msg:'我是A向兄弟组件发送消息'
            }
        },
        watch:{
            'value':{
                handler(){
                    VueEvent.$emit('methodsAForConfirmCheckboxs',this.value.confirmCheckboxs)
                },
                deep:true
            }
        },
        methods:{
            toAnotherSon(){
                VueEvent.$emit('methodsA',this.msg)
            }
        }
    }
</script>

<style lang="less">

</style>
