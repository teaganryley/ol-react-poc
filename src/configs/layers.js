import ImageLayer from 'ol/layer/Image';
import TileLayer from 'ol/layer/Tile';
import ImageWMS from 'ol/source/ImageWMS';
import TileWMS from 'ol/source/TileWMS';

const layers = [
  new ImageLayer({
    //extent: [-13884991, 2870341, -7455066, 6338219],
    title: 'Transport basemap',
    type: 'base',
    source: new ImageWMS({
      url: 'http://geogratis.gc.ca/maps/CBMT',
      params: {'LAYERS': 'CBMT'},
      ratio: 1,
      mapServer: 'geoserver'
    }),
  }),
  new TileLayer({
    title: 'Railway tracks',
    visible: false,
    source: new TileWMS({
      url: 'http://maps.geogratis.gc.ca/wms/railway_en',
      params: {
        'LAYERS': 'railway.track',
        'FORMAT': 'image/png',
        'TRANSPARENT': true,
      },
    })
  }),
  new TileLayer({
    title: 'Railway stations',
    visible: false,
    source: new TileWMS({
      url: 'http://maps.geogratis.gc.ca/wms/railway_en',
      params: {
        'LAYERS': 'railway.station',
        'FORMAT': 'image/png',
        'TRANSPARENT': true,
      },
    })
  }),
  new TileLayer({
    title: 'Railway crossings',
    visible: false,
    source: new TileWMS({
      url: 'http://maps.geogratis.gc.ca/wms/railway_en',
      params: {
        'LAYERS': 'railway.crossing',
        'FORMAT': 'image/png',
        'TRANSPARENT': true,
      },
    })
  }),
];

export { layers };
