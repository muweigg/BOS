import 'script-loader!./third-party/ubold/modernizr.min.js';

import 'script-loader!./third-party/ubold/jquery.min';
import 'script-loader!./third-party/ubold/popper.min';
import 'script-loader!./third-party/ubold/bootstrap.min';
import 'script-loader!./third-party/ubold/wow.min';
import 'script-loader!./third-party/ubold/jquery.scrollTo.min';
// import 'script-loader!./third-party/ubold/waypoints/lib/jquery.waypoints.min';
// import 'script-loader!./third-party/ubold/counterup/jquery.counterup.min';
import 'script-loader!./third-party/ubold/morris/morris.min';
// import 'script-loader!./third-party/ubold/raphael/raphael-min';

import 'script-loader!babel-loader!./third-party/ubold/detect';
import 'script-loader!babel-loader!./third-party/ubold/fastclick';
import 'script-loader!babel-loader!./third-party/ubold/jquery.slimscroll';
import 'script-loader!babel-loader!./third-party/ubold/jquery.blockUI';
import 'script-loader!babel-loader!./third-party/ubold/waves';
import 'script-loader!babel-loader!./third-party/ubold/jquery.nicescroll';

import 'script-loader!./third-party/ubold/datatables/jquery.dataTables.min';
import 'script-loader!./third-party/ubold/datatables/dataTables.bootstrap4.min';
import 'script-loader!./third-party/ubold/datatables/dataTables.buttons.min';
import 'script-loader!./third-party/ubold/datatables/jszip.min';
import 'script-loader!./third-party/ubold/datatables/pdfmake.min';
import 'script-loader!babel-loader!./third-party/ubold/datatables/vfs_fonts';
import 'script-loader!./third-party/ubold/datatables/buttons.html5.min';
import 'script-loader!./third-party/ubold/datatables/buttons.print.min';
import 'script-loader!./third-party/ubold/datatables/dataTables.keyTable.min';
import 'script-loader!./third-party/ubold/datatables/dataTables.responsive.min';
import 'script-loader!./third-party/ubold/datatables/responsive.bootstrap4.min';
import 'script-loader!./third-party/ubold/datatables/dataTables.select.min';
// import 'script-loader!babel-loader!./third-party/ubold/jquery-knob/jquery.knob';

import 'script-loader!babel-loader!./third-party/ubold/jquery.core';
import 'script-loader!babel-loader!./third-party/ubold/jquery.app';

export const isIE = () => {
    let match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : undefined;
}
