import { useMemo } from 'react';
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
import { useMapContext } from '../Map/map.context';
// import { groups as layerGroups } from '../../configs/groups';
import { groups, transformLayer } from '../../configs/groups';

const AccordionControl = () => {
  const { olMap } = useMapContext();

  const layerGroups = useMemo(() => {
    // get list of layers from OL, transform into useful shape
    const layerList = olMap.getAllLayers().map(layerObj => transformLayer(layerObj));

    return groups.map(group => {
      const filteredList = layerList.filter(layer => layer.type === group.id);

      return ({
        ...group,
        layers: filteredList
      });
    });
  }, [olMap]);

  return (
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
};

export default AccordionControl;
