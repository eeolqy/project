<template>
    <div class="father">
        <div class="sync-father">
            <h2>父组件</h2>
            <el-checkbox-group v-model="fatherToSon.confirmCheckboxs">
                <el-checkbox v-for="item in fatherToSon.selectedCheckboxs" :label="item.key" :key="item.key">{{item.lable}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="sync-son">
            <h2>子组件</h2>
            <son v-model="fatherToSon"></son>
        </div>
        <div class="sync-son last">
            <h2>另一个子组件</h2>
            <another-son></another-son>
        </div>
    </div>
</template>

<script>
    import VueEvent from '../bus/event.js'
    import Son from '@/components/sync_son'
    import AnotherSon from '@/components/another_son'
    console.log(VueEvent)
    export default {
        data(){
            return {
                fatherToSon:{
                    confirmCheckboxs:[],
                    selectedCheckboxs:[
                        {
                            key:'001',
                            lable:'北京'
                        },
                        {
                            key:'002',
                            lable:'上海'
                        },
                        {
                            key:'003',
                            lable:'广州'
                        },
                        {
                            key:'004',
                            lable:'山东'
                        },
                        {
                            key:'005',
                            lable:'武汉'
                        }
                    ]
                }

            }
        },
        components:{
            Son,AnotherSon
        }
    }
</script>

<style lang="less">
    .father{
        height:600px;
        border:1px solid #1D8CE0;
        .sync-father{
            height:200px;
            border-bottom:1px solid #1F2D3D
        }
        .sync-son{
            height:200px;
        }
        .last{
            border-top:1px solid #1F2D3D
        }
    }
</style>
