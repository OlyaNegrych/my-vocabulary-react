import { TextField, Button } from '@mui/material';
import { Input, Btn } from './Vocabulary.styled';
import { BsTrash } from "react-icons/bs";

const VocabularyFormItem = ({ onChangeInput, word, onDelete }) => {
  return (
    <div style={{display: 'block'}}>
      <Input
        placeholder="English word"
        name="engWord"
        onChange={onChangeInput}
        value={word.engWord}
      />
      <Input
        placeholder="Ukrainian word"
        name="ukrWord"
        onChange={onChangeInput}
        value={word.ukrWord}
      />
      {/* <Btn
        style={{display: 'flex', alignItems: 'center', backgroundColor: '#f07777', height: 'au'}}
        onClick={() => onDelete(word.id)}
      >
        <BsTrash style={{marginRight: '10px'}}/>
        Delete
      </Btn> */}
    </div>
  );
};
export default VocabularyFormItem;
