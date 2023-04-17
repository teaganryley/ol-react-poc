import { FormGroup } from '@mui/material';
import CheckItem from './CheckItem';

const CheckList = ({ layerList }) => (
  <FormGroup>
    {layerList.map((layerObj, index) => (
      <CheckItem key={index} {...layerObj} />
    ))}
  </FormGroup>
);

export default CheckList;
