import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LayersIcon from '@mui/icons-material/Layers';
import Map from './components/Map';
import { projection } from './projections/EPSG3978';
import LayerController from './components/Controls/LayerController';
import Tester from './components/Tester';
import { color } from '@mui/system';


/**
 *  -> read css grid
 *  -> overlay grid on top of map
 *  -> use grid to position button on top of map
 *  -> once this is working, position layer controller
 * 
 *  NOTE: use SX prop with mui components
 */

/*<MapContainer>
      <Map 
        zoom={3}
        center={[-90.3468, 59.1304]}
        projection={projection}
      />
      <IconButton>
        <LayersIcon />
      </IconButton>
    </MapContainer>*/


function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        padding: 0,
        margin: 0,
      }}
    >
      {/*<Paper
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
          bgcolor: 'navajowhite',
        }}
      >*/}
      
      <Map
        zoom={3}
        center={[-90.3468, 59.1304]}
        projection={projection}
      >
        <LayerController />  
      </Map>
    </Box>
  );
}

export default App;
