import { IconButton } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import styled from 'styled-components';
import Map from './components/Map';
import { projection } from './projections/EPSG3978';
//import 'node_modules/ol/ol.css';
import LayerController from './components/Controls/LayerController';

const MapContainer = styled.div`
  position: relative;
`;

/**
 * Thinking:
 *  I want the map to take up 100% of its parent container
 *  I want to superimpose the controller on top
 *  To start: I will start with a simple button
 *  -> width and height properties: read how they are affected by parent container
 *  -> set parent container size
 *  -> set map to occupy percentage of parent container
 *  -> read css grid
 *  -> overlay grid on top of map
 *  -> use grid to position button on top of map
 *  -> once this is working, position layer controller
 * 
 *  NOTE: use SX prop with mui components
 */

function App() {
  return (
    <MapContainer>
      <Map 
        zoom={3}
        center={[-90.3468, 59.1304]}
        projection={projection}
      />
      <IconButton>
        <LayersIcon />
      </IconButton>
    </MapContainer>
  );
}

export default App;
