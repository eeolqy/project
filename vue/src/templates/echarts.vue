<template>
    <div class="">
        <echarts :option="option" :config="echartsConfig" ></echarts>
        <echarts :option="circleOption" :config="echartsCircleConfig" ></echarts>
    </div>
</template>

<script>
    import Echarts from '@/components/echarts'
    export default {
        data(){
            return {
                option:{
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
                circleOption:{
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[]
                        }
                    ]
                },
                echartsConfig:{
                    loading:false,
                    path:'/static/lib/echarts.min.js'
                },
                echartsCircleConfig:{
                    loading:false,
                    path:'/static/lib/echarts.min.js'
                },
            }
        },
        created(){
            setTimeout(()=>{
                this.option.xAxis.data = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                this.circleOption.series[0].data=[{value:335, name:'直接访问'},{value:310, name:'邮件营销'},{value:234, name:'联盟广告'},{value:135, name:'视频广告'},{value:1548, name:'搜索引擎'}]
                this.echartsConfig.loading = true
                this.echartsCircleConfig.loading = true
            },2000)
        },
        components:{Echarts}
    }
</script>

<style lang="less">
</style>
