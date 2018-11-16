import '../css/common/common.scss';

import Vue from 'vue';

new Vue({
  el: '.container-fluid',
  mounted () {
    $('.summernote').summernote({
      height: 350,
      minHeight: null,
      maxHeight: null,
      focus: false
    });
  }
});

