import { TextField } from '@mui/material';

const Filter = ({ value, onFilterChange }) => {
  return (
    <TextField
      id="standard-basic"
      label="Find word"
      variant="standard"
      value={value}
      onChange={onFilterChange}
      style={{ marginTop: '20px', marginBottom: '30px' }}
    />
  );
};

export default Filter;
