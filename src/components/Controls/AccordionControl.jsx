import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioList from './RadioList';
import CheckList from './CheckList';
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
        <AccordionDetails>
          <FormControl>
            {groupObj.control === 'radio' ? (
              <RadioList layerList={groupObj.layers}/>
            ) : (
              <CheckList layerList={groupObj.layers}/>
            )}
          </FormControl>
        </AccordionDetails>     
      </Accordion>
    ))}
  </>
);

export default AccordionControl;
