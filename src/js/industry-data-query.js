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
          select: {
              rows: {
                  _: "已选择 %d 家企业",
                  1: "已选择 1 家企业"
              }
          }
      },
      select: {
        style: 'multi'
      }
    });

    const contrast = $(`<a href="different-contrast.html" class="btn btn-primary">对比</a>`);
    contrast.insertAfter('.dataTables_info .select-info');

    datatable.on('select.dt deselect.dt',  () => {
      contrast.remove();
      contrast.insertAfter('.dataTables_info .select-info');
    });
  }
});

