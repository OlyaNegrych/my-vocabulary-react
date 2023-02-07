import { Button } from '@mui/material';
import { useReducer } from 'react';
import VocabularyFormItem from './VocabularyFormItem';

const initialState = [{id: Date.now(), engWord: '', ukrWord: '' }];

const reducer = (state, action) => {
  switch (action.type) {
    // need to change into array of objects....
    case 'engWord':
      return {...state, [action.type]: action.payload};

    case 'ukrWord':
      return { ...state, [action.type]: action.payload };
    
    case 'reset':
      return initialState;
    
    case 'addMore':
      return [...state, action.payload]
    
    default:
      return state;
  }
}

const VocabularyForm = ({onFormSubmit}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // need to fix-----
  const handleChangeInput = e => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(state);
    dispatch({ type: 'reset' });
  };

  const handleMoreItem = () => {
    dispatch({
      type: 'addMore',
      payload: { id: Date.now(), engWord: '', ukrWord: '' },
    });
  }

  const handleDelete = (id) => {
//--------------------
  }

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
        Add more
      </Button>
      <Button type="submit" variant="contained">
        Add all words
      </Button>
    </form>
  );
};

export default VocabularyForm;
