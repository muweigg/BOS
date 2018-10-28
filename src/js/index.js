import '../css/common/common.scss';
import * as BMapConfig from './custom_map_config.json';
import * as Echarts from 'echarts';

$(() => {
  initBMap();
  initLineChart();
  initPieChart();
  initRadarChart();
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
      type: 'value',
      splitLine: false,
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

const initPieChart = () => {
  const data = {
    legendData: [
      '农、牧、林、渔',
      '采矿和采石',
      '制造',
      '点、煤气、蒸汽和空调供应',
      '建筑',
      '其他',
    ],
    selected: {
      ['农、牧、林、渔']: true,
      ['采矿和采石']: true,
      ['制造']: true,
      ['点、煤气、蒸汽和空调供应']: true,
      ['建筑']: true,
      ['其他']: true,
    },
    seriesData: [{
        name: "农、牧、林、渔",
        value: 37757
      },
      {
        name: "采矿和采石",
        value: 6358
      },
      {
        name: "制造",
        value: 87502
      },
      {
        name: "点、煤气、蒸汽和空调供应",
        value: 5702
      },
      {
        name: "建筑",
        value: 30622
      },
      {
        name: "其他",
        value: 92045
      },
    ]
  };
  const option = {
    textStyle: {
      color: '#fff',
    },
    title: {
      text: '工业总产值（亿元）',
      x: 'center',
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: data.legendData,
      selected: data.selected,
      textStyle: {
        color: '#fff',
      },
    },
    series: [{
      // name: '姓名',
      type: 'pie',
      radius: '55%',
      center: ['40%', '50%'],
      data: data.seriesData,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
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
    }]
  };
  const dom = document.querySelector(".pie-chart");
  const myChart = Echarts.init(dom);
  myChart.setOption(option, true);
  return myChart;
}

const initRadarChart = () => {
  const option = option = {
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      textStyle: {
        color: '#fff',
      },
      data: ['木耳物流园', '两江新区']
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          // backgroundColor: '#999',
          // borderRadius: 3,
          // padding: [3, 5]
        }
      },
      indicator: [{
          name: '工业生产总值',
          max: 6500
        },
        {
          name: '从业人员数',
          max: 16000
        },
        {
          name: '居民消费支出',
          max: 30000
        },
        {
          name: '财政收入',
          max: 38000
        },
        {
          name: '固定投资总额',
          max: 52000
        },
      ],
      radius: '70%',
      center: ['50%', '50%'],
    },
    series: [{
      name: '木耳物流园 vs 两江新区',
      type: 'radar',
      // areaStyle: {normal: {}},
      data: [{
          value: [4300, 10000, 28000, 35000, 50000],
          name: '木耳物流园'
        },
        {
          value: [5000, 14000, 28000, 31000, 42000],
          name: '两江新区'
        }
      ]
    }]
  };
  const dom = document.querySelector(".radar-chart");
  const myChart = Echarts.init(dom);
  myChart.setOption(option, true);
  return myChart;
}