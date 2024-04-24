import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { Btn } from './Vocabulary.styled';
import AddWordForm from './AddWordForm';
import Filter from 'components/Filter/Filter';
import WordsListTable from '../WordsListTable/WordsListTable';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

const Vocabulary = () => {
  const initialWords = JSON.parse(localStorage.getItem('words')) || [];
  const [words, setWords] = useState(initialWords);
  const [filter, setFilter] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [learnWords, setLearnWords] = useState([]);
  
  console.log(learnWords);


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

  const handleLearnWord = words => {

    // onToggleModal();
    Notiflix.Notify.info('Choose the words to learn!');
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
    setLearnWords(id);
  };

//   const handleLearnWords = (id) => {
//   setLearnWords(prevLearnWords => {
//     const updatedWords = prevLearnWords?.map(word => {
//       if (word.id === id) {
//         // Якщо id вже існує, переписуємо значення
//         return { id: id, /* ваші поля об'єкта */ };
//       }
//       return word;
//     });
//     // Якщо об'єкт з таким id не знайдено, додаємо його до стану
//     if (!updatedWords.some(word => word.id === id)) {
//       updatedWords.push({ id: id, /* ваші поля об'єкта */ });
//     }
//     return updatedWords;
//   });
//   };
  
//   const handleLearnWords = (id) => {
//   setLearnWords(prevLearnWords => {
//     const existingWordIndex = prevLearnWords.findIndex(word => word.id === id);
//     if (existingWordIndex !== -1) {
//       // Якщо id вже існує, переписуємо значення
//       const updatedWords = [...prevLearnWords];
//       updatedWords[existingWordIndex] = { id: id, /* ваші поля об'єкта */ };
//       return updatedWords;
//     } else {
//       // Якщо об'єкт з таким id не знайдено, додаємо його до стану
//       return [...prevLearnWords, { id: id, /* ваші поля об'єкта */ }];
//     }
//   });
// };

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
        onClick={handleLearnWord}
      >
        Learn words
      </Btn>

      {isOpenModal && (
        <Modal onCloseModal={onToggleModal}>
          <AddWordForm onFormSubmit={handleAddWord} />
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
