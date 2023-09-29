// import { Button } from '@mui/material';
// import { useForm } from "react-hook-form";
// import { BsTrash } from "react-icons/bs";
import { useState } from 'react';
import { Btn, Input } from './Vocabulary.styled';

const AddWordForm = ({ onFormSubmit }) => {
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
    localStorage.setItem("myWords", JSON.stringify(state));

//  const myWords = localStorage.getItem("myWords");
// if (storedData) {
//   const words = JSON.parse(myWords);
//   console.log(words);
// } else {
//   console.log("Дані не знайдені в localStorage");
// }
  };

  // const handleMoreItem = () => {
  //   // потрібно, щоб додавало у модалку ще 2 інпути для англ і укр слова.......
  //   // setState([...state, { id: Date.now(), engWord: '', ukrWord: '' }]);
  // };

  // const handleDelete = id => {
  //   setState(prev => prev.filter(word => word.id !== id));
  // };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      {/* тут потрібно мапати напевно не стейт, а якийсь масив, куди закидатимуться
      обєкти слів після їх створення за доп. кнопки Add one more */}
      
      {state.map(word => (
        <div key={word.id} style={{display: 'block'}}>
      <Input
        placeholder="English word"
        name="engWord"
        onChange={handleChangeInput}
        value={word.engWord}
      />
      <Input
        placeholder="Ukrainian word"
        name="ukrWord"
        onChange={handleChangeInput}
        value={word.ukrWord}
      />
      {/* <Btn
        style={{display: 'flex', alignItems: 'center', backgroundColor: '#f07777'}}
        onClick={() => onDelete(word.id)}
      >
        <BsTrash style={{marginRight: '10px'}}/>
        Delete
      </Btn> */}
    </div>
      ))}

      {/* <Btn type="submit" variant="contained" onClick={handleMoreItem}>
        Add one more
      </Btn> */}
      {/* наступна кнопка мала б розпиляти масив обєктів, сформованих за доп
      попередньої кнопки */}
      
      <Btn type="submit" onClick={handleSubmit}>
        Add word
      </Btn>
    </form>
  );
};

export default AddWordForm;
