import { Button } from '@mui/material';
import { useState } from 'react';
// import { useReducer } from 'react';
import VocabularyFormItem from './VocabularyFormItem';

// const initialState = [{id: Date.now(), engWord: '', ukrWord: '' }];

// const reducer = (state, action) => {
//   switch (action.type) {
//     // need to change return into array of objects....
//     case 'engWord':
//       return { ...state, [action.type]: action.payload };
//     //   state.map(word => {
//     //     if (word.id === action.payload.id) {
//     //       return { ...word,  [action.type]: action.payload }
//     //     };
//     //   });
//     // return state;

//     case 'ukrWord':
//       return { ...state, [action.type]: action.payload };

//     case 'reset':
//       return initialState;

//     case 'addMore':
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// }

const VocabularyForm = ({ onFormSubmit }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [state, setState] = useState([
    { id: Date.now(), engWord: '', ukrWord: '' },
  ]);

  // const wordsForList = [];

  const handleChangeInput = e => {
    // dispatch({ type: e.target.name, payload: e.target.value });

    state.map(word => {
      //якост прив'язати до конткретного id.............
      return setState([{ ...word, [e.target.name]: e.target.value }]);
    });
 
    // setState([...state, newWord]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(state);
    // dispatch({ type: 'reset' });
    setState([{ id: Date.now(), engWord: '', ukrWord: '' }]);
  };

  const handleMoreItem = () => {
    // dispatch({
    //   type: 'addMore',
    //   payload: { id: Date.now(), engWord: '', ukrWord: '' },
    // });
    setState([...state, { id: Date.now(), engWord: '', ukrWord: '' }]);
  };

  const handleDelete = id => {
    setState(prev => prev.filter(word => word.id !== id));
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
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
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        Add all words
      </Button>
    </form>
  );
};

export default VocabularyForm;
