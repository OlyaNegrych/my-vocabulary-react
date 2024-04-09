import Notiflix from 'notiflix';
import { Btn } from './Vocabulary.styled';
import AddWordForm from './AddWordForm';
import Filter from 'components/Filter/Filter';
import WordsListTable from '../WordsListTable/WordsListTable';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

const Vocabulary = () => {
  const [words, setWords] = useState([]);
  const [filter, setFilter] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  // console.log(words)

  const onToggleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const handleAddWord = word => {
    // console.log(word);
    setWords(prev => [...prev, ...word]);
    onToggleModal();
    Notiflix.Notify.success('Word added successfully!');
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
          Notiflix.Notify.success('Word successfully edited.');
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

  return (
    <>
      <Btn
        type="button"
        style={{ marginBottom: '20px' }}
        onClick={onToggleModal}
      >
        Add new words
      </Btn>

      {isOpenModal && (
        <Modal onCloseModal={onToggleModal}>
          <AddWordForm onFormSubmit={handleAddWord} />
        </Modal>
      )}

      <Filter value={filter} onFilterChange={handleFilter} />

      <WordsListTable
        wordsList={handleFilterWords()}
        onDelete={handleDelete}
        onEditWord={handleEditWords}
      />
    </>
  );
};

export default Vocabulary;
