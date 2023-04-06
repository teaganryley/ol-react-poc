import { Projection } from 'ol/proj';

const extent = [-2750000.0, -1500000.0, 3500000.0, 3500000.0];

const projection = new Projection({
  code: 'EPSG:3978',
  extent: extent,
});

export { projection };