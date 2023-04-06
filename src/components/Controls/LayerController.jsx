import React, { useState} from 'react';
import { Paper, IconButton, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';

const layersObject = {
  base: {
    section: "Base Layers",
    layers: [],
  }
};

const LayerController = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Paper
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      {collapsed ? (
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
      )}
    </Paper>
  );
};

export default LayerController;
