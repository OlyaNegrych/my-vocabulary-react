import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { Btn } from './Vocabulary.styled';
import AddWordForm from './AddWordForm';
import LearnWords from 'components/LearnWords/LearnWords';
import Filter from 'components/Filter/Filter';
import WordsListTable from '../WordsListTable/WordsListTable';
import { Modal } from '../Modal/Modal';


const Vocabulary = () => {
  const initialWords = JSON.parse(localStorage.getItem('words')) || [];
  const [words, setWords] = useState(initialWords);
  const [filter, setFilter] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [startLearnWords, setStartearnWords] = useState(false);
  const [learnWordsIDS, setLearnWordsIDS] = useState({});
  const [wordsToLearnIDS, setWordsToLearnIDS] = useState([]);
  const [wordsToLearnFinal, setWordsToLearnFinal] = useState([]);
  // console.log(wordsToLearnFinal);


  useEffect(() => {
  const updateWordsToLearn = () => {
    const updatedWordsToLearn = [...wordsToLearnIDS];
    Object.entries(learnWordsIDS).forEach(([key, value]) => {
      if (value === true) {
        const index = updatedWordsToLearn.findIndex(obj => Object.keys(obj)[0] === key);
        if (index !== -1) {
          // Якщо об'єкт із ключем key вже існує в масиві, оновлюємо його значення
          updatedWordsToLearn[index][key] = value;
        } else {
          // Якщо об'єкт із ключем key не існує в масиві, додаємо його до wordsToLearn
          updatedWordsToLearn.push(+key);
        }
      } else if (value === false) {
        // Якщо значення ключа false, перевіряємо чи об'єкт із таким ключем вже існує в масиві та видаляємо його
        const index = updatedWordsToLearn.findIndex(item => item === key);
        if (index !== -1) {
          updatedWordsToLearn.splice(index, 1);
        }
      }
    });
    setWordsToLearnIDS(updatedWordsToLearn);
  };

  updateWordsToLearn();
  }, [learnWordsIDS]);
  
  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);

  const onToggleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const handleAddWord = word => {
    const updatedWords = [...words, ...word];
    setWords(updatedWords);

    onToggleModal();
    Notiflix.Notify.success('Word added successfully!');
  };

  const setLearnWord = () => {
    //потрібно перебрати words чи вони містять обєкти де id дорівнює елементу масиву wordsToLearn
    //якщо так, тоді треба з них сформувати новий масив і передати його в <LearnWords words={wordsToLearn} />

    const setWordsToLearn = () => {
      const filteredWords = words.filter(word => wordsToLearnIDS.includes(word.id));
      // console.log(filteredWords);
      setWordsToLearnFinal(filteredWords);
    };

    if (wordsToLearnIDS.length === 0) {
      Notiflix.Notify.info('Choose the words to learn!');
    } else {
      setStartearnWords(true);
      setWordsToLearn();
    }
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleFilterWords = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return words.filter(word => {
      return (
        word.engWord.toLowerCase().includes(normalizedFilter) ||
        word.ukrWord.toLowerCase().includes(normalizedFilter)
      );
    });
  };

  const handleEditWords = editedWord => {
    setWords(prev =>
      prev.map(word => {
        if (word.id === editedWord.id) {
          word.engWord = editedWord.engWord;
          word.ukrWord = editedWord.ukrWord;
          Notiflix.Notify.success('Word is successfully edited.');
        }
        return word;
      })
    );
  };

  const handleDelete = id => {
    Notiflix.Confirm.show(
    'Warning',
    'Are you sure you want to delete this word?',
    'Yes',
    'No',
    function () {
     setWords(prev => prev.filter(word => word.id !== id));
     Notiflix.Notify.success('The word was successfully deleted.');
    },
    function () {
      Notiflix.Notify.warning('Deletion was canceled.');
    }
   );
  };

  const handleLearnWords = (id) => {
    setLearnWordsIDS(id);
  };



  return (
    <>
      <Btn
        type="button"
        style={{ marginBottom: '20px', marginRight: '40px' }}
        onClick={onToggleModal}
      >
        Add new words
      </Btn>

      <Btn
        type="button"
        style={{ marginBottom: '20px', backgroundColor: '#0efe62' }}
        onClick={setLearnWord}
      >
        Learn words
      </Btn>

      {isOpenModal && (
        <Modal onCloseModal={onToggleModal}>
          <AddWordForm onFormSubmit={handleAddWord} />
        </Modal>
      )}

       {startLearnWords && !isOpenModal && (
        <Modal onCloseModal={onToggleModal}>
          <LearnWords words={wordsToLearnFinal} />
        </Modal>
      )}

      <Filter value={filter} onFilterChange={handleFilter} />

      <WordsListTable
        wordsList={handleFilterWords()}
        learnWords={handleLearnWords}
        onDelete={handleDelete}
        onEditWord={handleEditWords}
      />
    </>
  );
};

export default Vocabulary;
