<template>
    <div>
        <h2>特性示例：渐变色 阴影 点击缩放</h2>
        <div id="main">
            柱状图
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    name: 'stepThree',
    data() {
        return {

        }
    },
    mounted() {
        this.initBarChart();
    },
    methods: {
        initBarChart() {
            var chartDom = document.getElementById('main');
            var myChart = echarts.init(chartDom);
            var option;

            // prettier-ignore
            let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
            // prettier-ignore
            let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
            
            option = {
                xAxis: {
                    data: dataAxis,
                    /* axisLabel: {
                        inside: true,
                        color: '#fff'
                    }, */
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    z: 10
                },
                yAxis: {
                    name:'单位：次',
                    nameTextStyle: {
                        padding: [0, 0, 0, -10]
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#999'
                    }
                },
                grid:{//x\left相当于padding-left,y相当于padding-top,解决图表太靠左，或太靠上的问题
                    // x: '50px',
                    // x: '50%',
                    // y: '30px',
                    // y: '30%'
                    left: '50px',
                    right: '15px',
                    bottom: '30px',
                },
                dataZoom: [
                    {
                        type: 'inside'
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        showBackground: false,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                // { offset: 0, color: '#83bff6' },
                                // { offset: 0.5, color: '#188df0' },
                                // { offset: 1, color: '#188df0' }
                                { offset: 0, color: '#67EDE0' },
                                { offset: 1, color: '#DCFFF2' }
                            ])
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#378b83' },
                                    { offset: 1, color: '#DCFFF2' }
                                ])
                            }
                        },
                        data: data
                    }
                ]
            };
            option && myChart.setOption(option);
            window.onresize = () => {
                myChart.resize();
            };
        }
    }
}
</script>
<style lang="scss" scoped>
#main {
    width: 500px;
    height: 400px;
    border: 1px solid #999;
    margin: 0 auto;
}
</style>