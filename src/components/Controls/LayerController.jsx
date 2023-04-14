import React, { useState } from 'react';
import {
  Paper,
  IconButton,
} from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import AccordionControl from './AccordionControl';

const LayerController = () => {
  const [collapsed, setCollapsed] = useState(true);

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
      {collapsed ? (
        <IconButton>
          <LayersIcon />
        </IconButton>
      ) : (
        <AccordionControl />
      )}
    </Paper>
  );
};

export default LayerController;
