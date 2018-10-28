import '../css/common/common.scss';
import * as BMapConfig from './custom_map_config.json';

$(() => {
  initBMap();
});

const initBMap = () => {
  const map = new BMap.Map("bmap");
  const point = new BMap.Point(116.404, 39.915);
  map.centerAndZoom(point, 15);
  map.setMapStyleV2({styleJson: BMapConfig});
}