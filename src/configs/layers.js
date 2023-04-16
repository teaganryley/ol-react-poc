import ImageLayer from 'ol/layer/Image';
import TileLayer from 'ol/layer/Tile';
import LayerGroup from 'ol/layer/Group';
import ImageWMS from 'ol/source/ImageWMS';
import TileWMS from 'ol/source/TileWMS';

const base = [
  /*new ImageLayer({
    //extent: [-13884991, 2870341, -7455066, 6338219],
    title: 'Transport basemap',
    type: 'base',
    source: new ImageWMS({
      url: 'http://geogratis.gc.ca/maps/CBMT',
      params: {'LAYERS': 'CBMT'},
      ratio: 1,
      mapServer: 'geoserver'
    }),
  }),*/
  new TileLayer({
    title: 'Transport basemap',
    type: 'base',
    source: new TileWMS({
      url: 'https://maps-cartes.services.geo.ca/server2_serveur2/services/BaseMaps/CBMT3978/MapServer/WMSServer',
      params: {
        'LAYERS': '0,1',
        'FORMAT': 'image/png',
      }
    })
  }),
  /*
  new LayerGroup({
    title: 'Transport with labels (composed)',
    type: 'base',
    layers: [
      new TileLayer({
        source: new TileWMS({
          url: 'https://maps-cartes.services.geo.ca/server2_serveur2/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMSServer',
          params: {
            'LAYERS': '0,1',
            'FORMAT': 'image/png',
          }
        })
      }),
      new TileLayer({
        source: new TileWMS({
          url: 'https://maps-cartes.services.geo.ca/server2_serveur2/services/BaseMaps/CBMT_TXT_3978/MapServer/WMSServer',
          params: {
            'LAYERS': '0,1',
            'FORMAT': 'image/png',
          }
        })
      }),
    ],
  }),*/
];  
  
const railway = [
  new TileLayer({
    title: 'Railway tracks',
    type: 'railway',
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
    type: 'railway',
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
    type: 'railway',
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

const layers = [
  ...base,
  ...railway
];

export {
  base,
  railway,
  layers 
};
