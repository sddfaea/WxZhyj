import * as echarts from '../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var data=[17];
  var xMax=20;
  var option = {
      xAxis : [
          {
            max:xMax,
            type : 'value',
            axisTick: {show: false},
            axisLine: {show:false},
            axisLabel: {show:false},
            splitLine: {show: false}
          }
      ],
      yAxis : [
          {
              type : 'category',
              position:'right',
              data : ['其他'],
              axisLabel: {show:false},
              axisTick: {show: false},
              axisLine: {show: false}
          }
      ],
      series : [
          { 
              name:' ',
              type: 'bar',
              barWidth:16,
              silent:true,
              itemStyle: {normal: {color: '#ccc'}},
              barGap:'-100%',
              barCategoryGap:'50%',
              data: data.map(function(d){return xMax}),
          },
          {
              name:' ',
              type:'bar',
              barWidth:16,
              label: {normal: {show: false,position: 'right',formatter: '{c}%'}},
              data:[{value:17,itemStyle:{normal:{color:'#f80'}}}]
          }
      ]
  };
  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  }
});
