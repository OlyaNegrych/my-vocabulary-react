import { TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const VocabularyFormItem = ({ onChangeInput, word, onDelete }) => {
  return (
    <div style={{display: 'block'}}>
      <TextField
        id="outlined-basic"
        label="English word"
        variant="outlined"
        name="engWord"
        onChange={onChangeInput}
        value={word.engWord}
      />
      <TextField
        id="outlined-basic"
        label="Ukrainian word"
        variant="outlined"
        name="ukrWord"
        onChange={onChangeInput}
        value={word.ukrWord}
      />
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => onDelete(word.id)}
      >
        Delete
      </Button>
    </div>
  );
};
export default VocabularyFormItem;
