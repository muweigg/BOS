import '../css/common/common.scss';

import Vue from 'vue';

new Vue({
  el: '.container-fluid',
  mounted () {
    const datatable = $('#responsive-datatable');
    datatable.DataTable({
      lengthChange: false,
      searching: false,
      language: {
        info: "显示第 _START_ 到 _END_ 条，共 _TOTAL_ 条",
        infoEmpty: "当前没有任何数据",
      },
    });
  },
  methods: {
    gotoCreateTemplate () {
      window.location.assign('create-template.html');
    }
  }
});

