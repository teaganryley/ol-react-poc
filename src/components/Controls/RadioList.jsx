import { RadioGroup } from '@mui/material';
import RadioItem from './RadioItem';

const RadioList = ({ layerList }) => (
  <RadioGroup>
    {layerList.map((layerObj, index )=> (
      <RadioItem key={index} {...layerObj} />
    ))}
  </RadioGroup>
);

export default RadioList;
