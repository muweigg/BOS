import '../css/common/common.scss';

import Vue from 'vue';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

new Vue({
  el: '.container-fluid.different-contrast',
  data: {
    translateX: 0,
    enterprises: [
      {id: 1, name: '重庆时代建设（集团）有限公司', dateTime: '2017年8月'},
      {id: 2, name: '重庆时代建设（集团）有限公司', dateTime: '2017年9月'},
      {id: 3, name: '重庆福星物业发展有限公司', dateTime: '2017年8月'},
      {id: 4, name: '重庆福星物业发展有限公司', dateTime: '2017年7月'},
      {id: 5, name: '重庆福星物业发展有限公司', dateTime: '2017年6月'},
    ],
    sections: [
      {
        title: '企业属性与基础信息',
        rows: [
          {
            name: '所属行业',
            data: ['7010-房地产开发', '7010-房地产开发', '7010-房地产开发', '7010-房地产开发', '7010-房地产开发']
          },
          {
            name: '报表类别',
            data: ['X.房地产开发经营', 'X.房地产开发经营', 'X.房地产开发经营', 'X.房地产开发经营', 'X.房地产开发经营']
          },
          {
            name: '单位规模',
            data: ['大型', '大型', '中型', '小型', '小型']
          },
          {
            name: '登记注册类型',
            data: ['国有', '集体', '国有', '集体', '外资企业']
          },
          {
            name: '是否台商投资',
            data: ['否', '否', '是', '否', '否']
          },
          {
            name: '营业状态',
            data: ['营业', '停业（歇业）', '当年注销', '营业', '营业']
          },
          {
            name: '执行会计标准类别',
            data: ['企业会计制度', '行政单位会计制度', '民间非营利组织会计制度', '民间非营利组织会计制度', '民间非营利组织会计制度']
          },
          {
            name: '机构类型',
            data: ['企业', '民办非企业单位', '企业', '民办非企业单位', '机关']
          },
          {
            name: '（开业）成立时间',
            data: ['2015-12-12', '2015-12-12', '2016-12-12', '2016-12-12', '2016-12-12']
          },

        ]
      },
      {
        title: '从业人员',
        rows: [
          {
            name: '从业人员期末数',
            data: ['88', '70', '65', '52', '44']
          },
          {
            name: '其中：女性从业人数',
            data: ['50', '23', '22', '19', '11']
          },
        ]
      },
      {
        title: '企业主要经济指标',
        rows: [
          {
            name: '营业收入（千元）',
            data: ['2288', '1270', '1165', '1152', '1144']
          },
          {
            name: '其中：主营业务收入（千元）',
            data: ['1350', '1123', '222', '119', '111']
          },
          {
            name: '营业税金及附加（千元）',
            data: ['1250', '1023', '1022', '919', '811']
          },
          {
            name: '其中：主营业务税金及附加（千元）',
            data: ['550', '523', '322', '219', '111']
          },
        ]
      },
      {
        title: '行业信息',
        rows: [
          {
            name: '从业人员期末数',
            data: ['——', '——', '——', '——', '——']
          },
          {
            name: '其中：女性从业人数',
            data: ['——', '——', '——', '——', '——']
          },
        ]
      },
    ]
  },
  mounted() {
    const header = document.querySelector('.enterprises');
    fromEvent(document.querySelector('.section-wrap'), 'scroll')
      .pipe(
        map(e => e.target.scrollLeft * -1)
      )
      .subscribe(left => this.translateX = left);
  },
  methods: {
    toggle(e) {
      const dom = $(e.currentTarget);
      const i = dom.find('i.fa');
      const list = dom.next();
      if (i.hasClass('fa-minus')) {
        i.removeClass('fa-minus');
        i.addClass('fa-plus');
      } else {
        i.removeClass('fa-plus');
        i.addClass('fa-minus');
      }

      list.is(':visible') ? list.hide() : list.show();
    },
    transposition(from, dir) {
      this.positionTransposition(this.enterprises, from, dir);
      this.sections.forEach(section => section.rows.forEach(row => this.positionTransposition(row.data, from, dir)));
    },
    positionTransposition (collection, from, dir) {
      let item = collection.splice(from, 1)[0];
      if (dir === 1) {
        collection.splice(from - 1, 0, item);
      } else if (dir === 2) {
        collection.splice(from + 1, 0, item);
      }
    }
  }
});

