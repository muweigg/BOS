import '../css/common/common.scss';
import * as BMapConfig from './custom_map_config.json';
import * as Echarts from 'echarts';

$(() => {
  initBMap();
  initLineChart();
});

const initBMap = () => {
  const map = new BMap.Map("bmap");
  const point = new BMap.Point(116.404, 39.915);
  map.centerAndZoom(point, 15);
  map.setMapStyleV2({
    styleJson: BMapConfig
  });
  return map;
}

const initLineChart = () => {
  const option = {
    textStyle: {
      color: '#fff',
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['工业总产值', '财务收入', '固定投资总额'],
      textStyle: {
        color: '#fff',
      },
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value'
    },
    series: [{
        name: '工业总产值',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '财务收入',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '固定投资总额',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
    ]
  };
  const dom = document.querySelector(".line-chart");
  const myChart = Echarts.init(dom);
  myChart.setOption(option, true);
  return myChart;
}