import { useState } from 'react';
import { FormControlLabel, Radio } from '@mui/material';

const RadioItem = ({
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
        <Radio
          checked={checked}
          onChange={handleClick}
        />
      }
    />
  );
};

export default RadioItem;
