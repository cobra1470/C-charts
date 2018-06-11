<template>
    <content-box :header="pageHeader">
        <div slot="c">
            <div class="col-1 grid-item">
                <grid-item>
                    <div slot="chart" id="myChart-a" :style="{width: '100%', height: '300px'}"></div>
                </grid-item>
            </div>
            <div class="col-2">
                <div class="left grid-item">
                    <grid-item title="柱状图动画延迟" id="1234">
                        <div slot="chart" id="myChart-b" :style="{width: '100%', height: '300px'}"></div>
                    </grid-item>
                </div>
                <div class="right grid-item">
                    <grid-item title="南丁格尔玫瑰图" id="1234">
                        <div slot="chart" id="myChart-c" :style="{width: '100%', height: '300px'}"></div>
                    </grid-item>
                </div>
            </div>
        </div>
    </content-box>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      pageHeader: '数据概况'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // chart a
        let myChartA = this.$echarts.init(document.getElementById('myChart-a'));
        const dataA = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

        var dateList = dataA.map(function (item) {
            return item[0];
        });
        var valueList = dataA.map(function (item) {
            return item[1];
        });

        myChartA.setOption({
            // Make gradient line here
            visualMap: [{
                show: false,
                type: 'continuous',
                seriesIndex: 0,
                min: 0,
                max: 400
            }, {
                show: false,
                type: 'continuous',
                seriesIndex: 1,
                dimension: 0,
                min: 0,
                max: dateList.length - 1
            }],


            title: [{
                left: 'center',
                text: 'Gradient along the y axis'
            }, {
                top: '55%',
                left: 'center',
                text: 'Gradient along the x axis'
            }],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                data: dateList
            }, {
                data: dateList,
                gridIndex: 1
            }],
            yAxis: [{
                splitLine: {show: false}
            }, {
                splitLine: {show: false},
                gridIndex: 1
            }],
            grid: [{
                bottom: '60%'
            }, {
                top: '60%'
            }],
            series: [{
                type: 'line',
                showSymbol: false,
                data: valueList
            }, {
                type: 'line',
                showSymbol: false,
                data: valueList,
                xAxisIndex: 1,
                yAxisIndex: 1
            }]
        });

        // chart b
        let myChartB = this.$echarts.init(document.getElementById('myChart-b'));
        var xAxisData = [];
        var dataB1 = [];
        var dataB2 = [];
        for (var i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            dataB1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
            dataB2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
        }
        myChartB.setOption({
            title: {
                text: null
            },
            legend: {
                data: ['bar', 'bar2'],
                align: 'left'
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: 'bar',
                type: 'bar',
                data: dataB1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'bar2',
                type: 'bar',
                data: dataB2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        });

        // chart c
        let myChartC = this.$echarts.init(document.getElementById('myChart-c'));
        myChartC.setOption({
            title : {
                text: null,
                subtext: null,
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'半径模式',
                    type:'pie',
                    radius : [20, 110],
                    center : ['25%', '50%'],
                    roseType : 'radius',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                },
                {
                    name:'面积模式',
                    type:'pie',
                    radius : [30, 110],
                    center : ['75%', '50%'],
                    roseType : 'area',
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                }
            ]
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
