import { FormGroup } from '@mui/material';
import CheckItem from './CheckItem';

const CheckList = ({ layerList }) => (
  <FormGroup>
    {layerList.map(layerObj => (
      <CheckItem {...layerObj} />
    ))}
  </FormGroup>
);

export default CheckList;
