import { Box, Paper, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useMapContext } from '../Map/map.context';

const Zoom = () => {
  const { olMap } = useMapContext();

  // TODO: we need to constrain adjustments beyond max/min zoom
  const handlePlusClick = () => {
    console.log('plus clicked');
    olMap.getView().adjustZoom(1);
  };

  const handleMinusClick = () => {
    console.log('minus clicked');
    olMap.getView().adjustZoom(-1);
  };

  return (
    <Box
      sx={{
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 2,
      }}
    >
      <Paper>
        <IconButton onClick={handlePlusClick}>
          <AddIcon />
        </IconButton>
      </Paper>
      <Paper>
        <IconButton onClick={handleMinusClick}>
          <RemoveIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Zoom;