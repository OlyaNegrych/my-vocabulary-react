import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Btn, BtnRemove, Input } from './Vocabulary.styled';


const AddWordForm = ({ onFormSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [wordPairs, setWordPairs] = useState([{ id: Date.now(), engWord: '', ukrWord: '' }]);

  const onSubmit = () => {
    onFormSubmit(wordPairs);
    reset();
  };

  const addInputPair = () => {
    setWordPairs([...wordPairs, { id: Date.now(), engWord: '', ukrWord: '' }]);
  };

  const removeInputPair = (id) => {
    const newWordPairs = wordPairs.filter(pair => pair.id !== id);
    setWordPairs(newWordPairs);
  };

  const handleInputChange = (id, name, value) => {
    const newWordPairs = wordPairs.map(pair => {
      if (pair.id === id) {
        return { ...pair, [name]: value };
      }
      return pair;
    });
    setWordPairs(newWordPairs);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {wordPairs.map((pair, index) => (
        <fieldset key={pair.id} style={{ marginBottom: '10px' }}>
          <legend>Word {index + 1}</legend>
          <BtnRemove type="button" onClick={() => removeInputPair(pair.id)}>X</BtnRemove>
          <Input
            placeholder="English word"
            {...register(`wordPairs[${pair.id}].engWord`, { required: true })}
            value={pair.engWord}
            onChange={(e) => handleInputChange(pair.id, 'engWord', e.target.value)}
            style={{ marginBottom: '5px' }}
          />
          {/* {errors?.wordPairs?.[pair.id]?.engWord && <span>Enter English word, please...</span>} */}
          <Input
            placeholder="Ukrainian word"
            {...register(`wordPairs[${pair.id}].ukrWord`, { required: true })}
            value={pair.ukrWord}
            onChange={(e) => handleInputChange(pair.id, 'ukrWord', e.target.value)}
            style={{ marginBottom: '5px' }}
          />
          {/* {errors?.wordPairs?.[pair.id]?.ukrWord && <span>Enter Ukrainian word, please...</span>} */}
          
        </fieldset>
      ))}
      <Btn type="button" onClick={addInputPair} style={{marginRight: '6px'}}>New word</Btn>
      <Btn type="submit">Add ALL</Btn>
    </form>
  );
};


export default AddWordForm;
