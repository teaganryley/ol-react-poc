import { RadioGroup } from '@mui/material';
import RadioItem from './RadioItem';

const RadioList = ({ layerList }) => (
  <RadioGroup>
    {layerList.map(layerObj => (
      <RadioItem {...layerObj} />
    ))}
  </RadioGroup>
);

export default RadioList;
