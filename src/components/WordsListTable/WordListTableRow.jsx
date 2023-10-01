// import TableCell from '@mui/material/TableCell';
// import TableRow from '@mui/material/TableRow';
// import { Button, Checkbox, TextField } from '@mui/material';
import { useState } from 'react';
import { Btn, CheckBox, Input } from 'components/Vocabulary/Vocabulary.styled';

const WordListTableRow = ({ word, index, onDelete, onEditWord }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [engWord, setEngWord] = useState(word.engWord);
  const [ukrWord, setUkrWord] = useState(word.ukrWord);
  const [isChecked, setIsChecked] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      onEditWord({ ...word, engWord, ukrWord });
    }
  };

  const handleChangeInput = (e) => {
    if (e.target.name === 'engWord') {
      setEngWord(e.target.value);
    } else if (e.target.name === 'ukrWord') {
      setUkrWord(e.target.value);
    }
  };

  return (
    <tr>
      <td align="center">
        <CheckBox
          type="checkbox"
          id={`checkbox-${index + 1}`}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </td>
      <td align="center">{index + 1}</td>
      {isEdit ? (
        <>
          <td align="center">
            <Input
              id="outlined-basic"
              label="Edit english word"
              name="engWord"
              value={engWord}
              onChange={handleChangeInput}
            />
          </td>
          <td align="center">
            <Input
              id="outlined-basic"
              label="Edit ukrainian word"
              name="ukrWord"
              value={ukrWord}
              onChange={handleChangeInput}
            />
          </td>
        </>
      ) : (
        <>
          <td align="center">{word.engWord}</td>
          <td align="center">{word.ukrWord}</td>
        </>
      )}
      <td align="center">
        <Btn onClick={handleEdit} style={{ backgroundColor: isEdit ? '#9effa6' : '#fcff9e', marginRight: '8px', fontSize: '16px'}}>
          {isEdit ? 'Save' : 'Edit'}
        </Btn>
        <Btn onClick={() => onDelete(word.id)} style={{backgroundColor: '#ff9e9e', fontSize: '16px'}}>
          Delete
        </Btn>
      </td>
    </tr>
  );
}

export default WordListTableRow;