import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';
import { get as getProjection } from 'ol/proj';

const extent = [-2750000.0, -1500000.0, 3500000.0, 3500000.0];

proj4.defs("EPSG:3978","+proj=lcc +lat_0=49 +lon_0=-95 +lat_1=49 +lat_2=77 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs");
register(proj4);

const projection = getProjection('EPSG:3978');

export {
  extent,
  projection,
};