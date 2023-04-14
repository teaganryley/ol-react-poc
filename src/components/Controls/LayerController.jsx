import React, {
  useEffect,
  useState,
  useMemo,
} from 'react';
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
import ControlItem from './ControlItem';
import { groups } from '../../configs/groups';
import { useMapContext } from '../Map/map.context';

const LayerController = () => {
  const [collapsed, setCollapsed] = useState(true);
  // const { olMap } = useMapContext();

  console.log('groups: ', groups);
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
      ) : groups.map((groupObj, index) => (
        <Accordion key={index}>
          <AccordionSummary>
            <Typography>{groupObj.title}</Typography>
          </AccordionSummary>
          {groupObj.layers.map(layerObj => (
            <ControlItem
              control={groupObj.control}
              {...layerObj}
            />
          ))}
        </Accordion>
      ))}
    </Paper>
  );
};

export default LayerController;
