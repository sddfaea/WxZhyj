// pages/overview/overview.js
import * as echarts from '../../ec-canvas/echarts';
let chart = null;
Page({
    data: {
      pie:{
        onInit: pieChart
      },
      pie1:{
        onInit: pie1Chart
      },
      pie2:{
        onInit: pie2Chart
      },
      ec: {
        onInit: initChart
      },
      ec1: {
        onInit: initChart1
      }
  },
  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  }
})
function pieChart(canvas, width, height, dpr) {
  
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var option = {
    title:{
      text:'输电',
      textStyle:{fontSize:13},
      subtext:'输电数量6个',
      subtextStyle:{fontWeight:100},
    },
    color: ["#cccccc", "#ff8000"],
    series: [{
      legendHoverLink :false,
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['40%', '60%'],
      data: [{
        value: 55,
      }, {
        value: 20,
      }],
      label: {
         normal: {
             position: 'center',
             show : true,
             formatter:function (argument) {
                  var html='60%';
                       return html;
                   },
                    textStyle:{
                    fontSize: 15,
                    color:'#333333'
                  }
          },
        }
    }]
  };
  chart.setOption(option);
  return chart;
}
function pie1Chart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var option = {
    title:{
      text:'变电',
      textStyle:{fontSize:13},
      subtext:'变电数量8个',
      subtextStyle:{fontWeight:100},
    },
    color: ["#cccccc", "#ff8000"],
    series: [{
      legendHoverLink :false,
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['40%', '60%'],
      data: [{
        value: 55,
      }, {
        value: 40,
      }],
      label: {
         normal: {
             position: 'center',
             show : true,
             formatter:function (argument) {
                  var html='80%';
                       return html;
                   },
                    textStyle:{
                    fontSize: 15,
                    color:'#333333'
                  }
          },
        }
    }]
  };
  chart.setOption(option);
  return chart;
}
function pie2Chart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var option = {
    title:{
      text:'电缆',
      textStyle:{fontSize:13},
      subtext:'电缆数量9个',
      subtextStyle:{fontWeight:100},
    },
    color: ["#cccccc", "#ff8000"],
    series: [{
      legendHoverLink :false,
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['40%', '60%'],
      data: [{
        value: 55,
      }, {
        value: 40,
      }],
      label: {
         normal: {
             position: 'center',
             show : true,
              formatter:function (argument) {
                  var html='90%';
                       return html;
                   },
                    textStyle:{
                    fontSize: 15,
                    color:'#333333'
                  }
          },
        }
    }]
  };
  chart.setOption(option);
  return chart;
}
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  var option = {
    title:{text:"故障原因"         //标题
          ,textStyle:{fontSize:13}
            },
    color: ['#37a2da'],
    tooltip: {},        //提示框
    xAxis: {data:["有异物","电压不稳","断电","损坏","跳闸"]  //x轴显示项
            ,axisLabel: {  //设置x轴显示文字过长换行
                interval: 0,  
                formatter:function(value)  
                {  
                    var ret = "";//拼接加\n返回的类目项  
                    var maxLength = 3;//每项显示文字个数  
                    var valLength = value.length;//X轴类目项的文字个数  
                    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                    if (rowN > 1)//如果类目项的文字大于3,  
                    {  
                        for (var i = 0; i < rowN; i++) {  
                            var temp = "";//每次截取的字符串  
                            var start = i * maxLength;//开始截取的位置  
                            var end = start + maxLength;//结束截取的位置  
                            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                            temp = value.substring(start, end) + "\n";  
                            ret += temp; //凭借最终的字符串  
                        }  
                        return ret;  
                    }  
                    else {  
                        return value;  
                    }  
                }  
            }  
            },
    yAxis: {},
    series: [{
      name: '数量',  // 系列名称
      type: 'bar',  // 系列图表类型
      data: [5, 20, 36, 10, 10]  // 系列中的数据内容
    }],
    grid: {
      left: 1,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    }
  };
  chart.setOption(option);
  return chart;
}
function initChart1(canvas, width, height, dpr) {
    chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);
    var option = {
      title:{text:"设备管理",            //标题
      textStyle:{fontSize:13}
      },   
      color: ['#37a2da'],
      xAxis: [
        {
          show:false,
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#666'
          }
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['绝缘子', '分布式检测装置', '在线监测', '杆塔', '线路', '站用变压器', '电压互感器','电流互感器','电容器','电抗器','开关柜','隔离开关','组合电器','断路器','主变压器'],
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#666'
            }  
        },
        {
          type : 'category',
          nameTextStyle: {
            align: 'left',
            verticalAlign: 'middle',
            },
            position: 'right',
            offset: 1,
            axisLine: {
                show: false
            },
            axisTick : {show: false},
            data : [300, 270, 340, 344, 300, 320, 310,222,553,223,111,222,342,231,321],
        }
      ],
      series: [
        {
          name: '阴影',
          type: 'bar',
          silent: true,
          barGap:'-100%',
          legendHoverLink:false,
              data: [600, 600, 600, 600, 600, 600, 600,600,600,600,600,600,600,600,600],
              itemStyle:{
                normal: {
                    color: '#d9d9d9',
                }
            }
          },
        {
          name: '数量',
          type: 'bar',
          label: {
            normal: {
              show: false
            },
          },
              data: [300, 270, 340, 344, 300, 320, 310,222,553,223,111,222,342,231,321],
              
            
          }
        ],
      grid: {
          left: 1,
          right: 20,
          bottom: 15,
          top: 40,
          containLabel: true
        },
    };
  chart.setOption(option);
  return chart;
}