import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Btn, Input } from '../Vocabulary/Vocabulary.styled'


const LearnWords = ({ words }) => {
    // console.log(words);

  const { register, handleSubmit, reset } = useForm();
 //   const [wordPairs, setWordPairs] = useState([{ id: Date.now(), engWord: '', ukrWord: '' }]);
   
    
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  const handleInputChange = (e) => {
    console.log('changing input', e.target.value)
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset style={{ marginBottom: '10px' }}>
          <legend>Translate</legend>
          <Input
            placeholder="Translate"
            {...register('wordTotranslate', { required: true })}
            // value={words[0]?.engWord}
            onChange={handleInputChange}
            style={{ marginBottom: '5px' }}
          />

          <Input
            placeholder="Translate"
            {...register('translation', { required: true })}
            // value={pair.ukrWord}
            onChange={handleInputChange}
            style={{ marginBottom: '5px' }}
          />  
          </fieldset>
          
      <Btn type="submit">Check</Btn>
    </form>
  );
};


export default LearnWords;
