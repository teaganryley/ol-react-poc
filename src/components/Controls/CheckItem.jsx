import { useState } from 'react';
import {
  Checkbox,
  FormControlLabel
} from '@mui/material';

const CheckItem = ({
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
    <FormControlLabel
      label={title}
      control={
        <Checkbox 
          checked={checked}
          onChange={handleClick}
        />
      }
    />
  );
};

export default CheckItem;
