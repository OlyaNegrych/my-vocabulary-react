import Box from '@mui/material/Box';

import Vocabulary from '../components/Vocabulary/Vocabulary';

const App = () => {
  return (
    <Box
      sx={{
        // width: 300,
        // height: 500,
        padding: 8,
        backgroundColor: 'lightblue',
        // '&:hover': {
        //   backgroundColor: 'mint',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <Vocabulary />
    </Box>
  );
};

export default App;
