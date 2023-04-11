import React, { useEffect, useState} from 'react';
import {
  Paper,
  IconButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress
} from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { layers } from '../../configs/layers';
import { useMapContext } from '../Map/map.context';

const LayerController = () => {
  const [collapsed, setCollapsed] = useState(true);
  const context = useMapContext();

  console.log(context.map?.getLayers());

  useEffect(() => {
    if (context.map === null) {
      console.log('map is null');
      return;
    }
    const layerList = context.map.getLayers();
    const layerGroups = context.map.getLayerGroup();
    layerList.forEach(layerObj => console.log(layerObj.getProperties()));
    //console.log(layerList.getProperties());
  }, [context]);

  return (
    <Paper
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      sx={{
        //height: '150px',
        //width: '150px',
        position: 'absolute',
        top: '20px',
        right: '20px',
        // bgcolor: 'lightcoral',
        zIndex: 2,
      }}
    >
      {/*collapsed ? (
        <IconButton>
          <LayersIcon />
        </IconButton>
      ) : (
        <Accordion>
          <AccordionSummary>
            <Typography>Base layers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Transport with labels</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>Transport w/o labels</Typography>
          </AccordionDetails>
        </Accordion>
      )*/}
      {context.map === null ? <CircularProgress />
        : (
          <div>Loaded</div>
        )}
    </Paper>
  );
};

export default LayerController;
