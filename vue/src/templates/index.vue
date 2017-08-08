<template id="">
    <div class="">
        <echarts  :config="echartsConfig" :option="option"  @ready="initEcharts"></echarts>
        <el-button @click="change">切换</el-button>
    </div>
</template>

<script type="text/javascript">
    import Echarts from '../components/echarts.vue'
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
                }
            }
        },
        created(){
            setTimeout(()=>{
                this.option.xAxis.data = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                this.echartsConfig.loading = true
            },2000)
        },
        components:{
            Echarts
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
