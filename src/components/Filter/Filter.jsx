// import { TextField } from '@mui/material';
import { Input } from 'components/Vocabulary/Vocabulary.styled';

const Filter = ({ value, onFilterChange }) => {
  return (

    <Input
      placeholder='Find word'
      value={value}
      onChange={onFilterChange}
      style={{ marginTop: '20px', backgroundColor: '#c6fae2', marginBottom: '30px', borderBottom: '1px solid black', maxWidth: '240px' }}
    />
  );
};

export default Filter;
