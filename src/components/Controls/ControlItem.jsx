import { useState } from 'react';
import {
  AccordionDetails,
  Checkbox,
  FormControlLabel
} from '@mui/material';

const ControlItem = ({
  control,
  layer,
  title,
  visible,
}) => {
  const [checked, setChecked] = useState(visible);
  
  const handleClick = event => {
    console.log('event fired: ', event.target.checked);
    layer.setVisible(event.target.checked);
    setChecked(event.target.checked);
  };

  return (
    <AccordionDetails>
      <FormControlLabel
        label={title}
        control={
          <Checkbox 
            checked={checked}
            onChange={handleClick}
          />
        }
      />
    </AccordionDetails>
  );
};

export default ControlItem;
