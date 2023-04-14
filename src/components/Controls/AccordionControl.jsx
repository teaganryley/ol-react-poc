import {
  Typography,
  Accordion,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ControlItem from './ControlItem';
import { groups as layerGroups } from '../../configs/groups';

const AccordionControl = () => (
  <>
    {layerGroups.map((groupObj, index) => (
      <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            {groupObj.title}
          </Typography>
        </AccordionSummary>
        {groupObj.layers.map(layerObj => (
          <ControlItem 
            control={groupObj.control}
            {...layerObj}
          />
        ))}
      </Accordion>
    ))}
  </>
);

export default AccordionControl;
