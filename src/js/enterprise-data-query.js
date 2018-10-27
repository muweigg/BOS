import '../css/common/common.scss';

import Vue from 'vue';

new Vue({
  el: '.container-fluid',
  mounted () {
    const datatable = $('#responsive-datatable');
    const tableButtons = datatable.DataTable({
      lengthChange: false,
      searching: false,
      buttons: ['copy', 'excel', 'pdf'],
      keys: true
    });
    const buttons = tableButtons.buttons().container();
    const as = buttons.find('a');
    buttons.addClass('btn-group');
    as.addClass('btn').addClass('btn-secondary');
    buttons.appendTo('#responsive-datatable_wrapper .col-md-6:eq(0)');
  }
});

