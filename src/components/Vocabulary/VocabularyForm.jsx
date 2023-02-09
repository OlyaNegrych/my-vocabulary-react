import { Button } from '@mui/material';
import { useState } from 'react';
import VocabularyFormItem from './VocabularyFormItem';

const VocabularyForm = ({ onFormSubmit }) => {
  const [state, setState] = useState([
    { id: Date.now(), engWord: '', ukrWord: '' },
  ]);

  const handleChangeInput = e => {
    state.map(word => {
      return setState([{ ...word, [e.target.name]: e.target.value }]);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(state);
    setState([{ id: Date.now(), engWord: '', ukrWord: '' }]);
  };

  const handleMoreItem = () => {
    // потрібно, щоб додавало у модалку ще 2 інпути для англ і укр слова.......

    // setState([...state, { id: Date.now(), engWord: '', ukrWord: '' }]);
  };

  const handleDelete = id => {
    setState(prev => prev.filter(word => word.id !== id));
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      {/* тут потрібно мапати напевно не стейт, а якийсь масив, куди закидатимуться
      обєкти слів після їх створення за доп. кнопки Add one more */}
      {state.map(word => (
        <VocabularyFormItem
          key={word.id}
          onChangeInput={handleChangeInput}
          word={word}
          onDelete={handleDelete}
        />
      ))}

      <Button type="submit" variant="contained" onClick={handleMoreItem}>
        Add one more
      </Button>
      {/* наступна кнопка мала б розпиляти масив обєктів, сформованих за доп
      попередньої кнопки */}
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        Add all words
      </Button>
    </form>
  );
};

export default VocabularyForm;
