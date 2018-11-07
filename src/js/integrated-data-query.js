import '../css/common/common.scss';

import Vue from 'vue';

new Vue({
  el: '.integrated-data-query',
  data: {
    queryType: 0,
    areaType: 0,
  },
  mounted () {
    this.initTree();
  },
  methods: {
    initTree () {

      const queryData = [
        {
          text: '国民经济核算',
          state: {
            opened: true,
            // selected: true
          },
          children: [
            {
              text: '地区生成总值',
              state: {
                selected: true
              },
            }
          ]
        },
        '能源',
        '国内贸易',
        '利用内资',
        {
          text: '财政',
          children: [
            '财政收入',
            '财政支出',
          ]
        },
        {
          text: '人民生活',
          children: [
            '居民人均可支配收入',
            '常住居民人均可支配收入',
          ]
        },
      ];

      $('.query-tree').jstree({core: { data: queryData }});

    }
  },
});