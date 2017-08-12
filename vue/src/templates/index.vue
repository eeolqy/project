<style lang="less">
    .index{
        position:relative;
        width:100%;
        height:100%;
        .index-content{
            position:absolute;
            top:60px;
            bottom:0;
            left:0;
            right:0;
            .index-content-left{
                position:absolute;
                left:0;
                top:0px;
                bottom:0;
                width:200px;
                background:#EFF2F7
            }
            .index-content-right{
                position:absolute;
                left:200px;
                right:0;
                bottom:0;
                top:0;
            }
        }
    }
</style>

<template>
    <div class="index">
        <index-header></index-header>
        <div class="index-content">
            <div class="index-content-left">
                <nav-menu :navMenuConfig="navMenuConfig"></nav-menu>
            </div>
            <div class="index-content-right">
                <router-view></router-view>
            </div>
        </div>
        <!-- <echarts  :config="echartsConfig" :option="option"  @ready="initEcharts"></echarts> -->
        <!-- <el-button @click="change">切换</el-button> -->
    </div>
</template>

<script type="text/javascript">
    import Echarts from '../components/echarts.vue'
    import NavMenu from '../components/nav_menu.vue'
    import IndexHeader from '../components/header.vue'
    export default{
        name:'index',
        data(){
            return {
                option:{
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: []
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                },
                echartsConfig:{
                    loading:false,
                    path:'../lib/echarts.min.js'
                },
                navMenuConfig:[
                    {
                        lable:'Vue-Api',
                        icon:'el-icon-menu',
                        children:[{
                            lable:'watch属性',
                            icon:'',
                            path:'/watch',
                        },
                        {
                            lable:'',
                            icon:'',
                            path:'/two',
                        }]
                    },
                    {
                        lable:'',
                        icon:'el-icon-menu',
                        children:[{
                            lable:'',
                            icon:'',
                            path:'/one',
                        },
                        {
                            lable:'',
                            icon:'',
                            path:'/two',
                        }]
                    },
                    {
                        lable:'',
                        icon:'el-icon-menu',
                        children:[{
                            lable:'',
                            icon:'',
                            path:'/one',
                        },
                        {
                            lable:'',
                            icon:'',
                            path:'/two',
                        },
                        {
                            lable:'',
                            icon:'',
                            path:'/two',
                        }]
                    }
                ]
            }
        },
        created(){
            setTimeout(()=>{
                this.option.xAxis.data = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                this.echartsConfig.loading = true
            },2000)
        },
        components:{
            Echarts,NavMenu,IndexHeader
        },
        watch:{
            option(){
                console.log(this)
            },
            a(){
                console.log(this)
            }
        },
        methods:{
            initEcharts(value){
                //console.log(value)
            },
            change(){
                this.echartsConfig.loading = false
                setTimeout(()=>{
                    this.echartsConfig.loading = true
                    this.option.xAxis.data = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋"]
                    this.option.series = [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10]
                    }]

                },2000)
            }
        }
    }
</script>
