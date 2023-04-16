import Box from '@mui/material/Box';
import Map from './components/Map';
import { projection, extent } from './projections/EPSG3978';
import LayerController from './components/Controls/LayerController';

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
      }}
    >
      <Map
        center={[-90.3468, 59.1304]}
        extent={extent}
        projection={projection}
        zoom={3}
      >
        <LayerController />  
      </Map>
    </Box>
  );
}

export default App;
