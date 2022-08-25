<template>
    <div>
        <h2>特性示例：在引线上显示名称</h2>
        <div id="main">
            饼图
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts5';

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

            var datas = [
                ////////////////////////////////////////
                [
                    { name: '圣彼得堡来客', value: 5.6 },
                    { name: '陀思妥耶夫斯基全集', value: 1 },
                    { name: '史记精注全译（全6册）', value: 0.8 },
                    { name: '加德纳艺术通史', value: 0.5 },
                ]
            ];
            option = {
                title: {
                    text: '阅读书籍分布',
                    left: 'center',
                    textStyle: {
                        color: '#999',
                        fontWeight: 'normal',
                        fontSize: 14
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c} ({d}%)'
                },
                series: datas.map(function (data, idx) {
                    return {
                        type: 'pie',
                        radius: [43, 60],
                        center:['50%', '50%'],
                        left: 'center',
                        // width: 400,
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        label: {
                            alignTo: 'edge',
                            formatter: '\n\n\n{name|{b}}\n{time|{d}%}',
                            minMargin: 5,
                            edgeDistance: 10,
                            lineHeight: 15,
                            rich: {
                                time: {
                                    fontSize: 10,
                                    color: '#999'
                                }
                            }
                        },
                        labelLine: {
                            length: 15,
                            length2: 0,
                            maxSurfaceAngle: 80
                        },
                        labelLayout: function (params) {
                            const isLeft = params.labelRect.x < myChart.getWidth() / 2;
                            const points = params.labelLinePoints;
                            // Update the end point.
                            points[2][0] = isLeft
                                ? params.labelRect.x
                                : params.labelRect.x + params.labelRect.width;
                            return {
                                labelLinePoints: points
                            };
                        },
                        data: data
                    };
                })
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
    width: 700px;
    height: 500px;
}
</style>