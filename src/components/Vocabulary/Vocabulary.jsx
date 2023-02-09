import { Button } from '@mui/material';
import VocabularyForm from './VocabularyForm';
import Filter from 'components/Filter/Filter';
import WordsListTable from './WordsListTable/WordsListTable';
import {Modal} from '../Modal/Modal';
import { useState } from 'react';

const Vocabulary = () => {
  const [words, setWords] = useState([]);
  const [filter, setFilter] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onToggleModal = () => {
    setIsOpenModal(prev => !prev);
  };

  const handleAddWord = word => {
    // const newWord = { id: Date.now(), ...word };
    // setWords(prev => [...prev, newWord]);

    setWords(prev => [...prev, ...word]);

    onToggleModal();
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
        }
        return word;
      })
    );
  };

  const handleDelete = id => {
    setWords(prev => prev.filter(word => word.id !== id));
  };

  return (
    <>
      <Button
        type="button"
        variant="contained"
        style={{ marginBottom: '20px' }}
        onClick={onToggleModal}
      >
        Add new words
      </Button>

      {isOpenModal && (
        <Modal onCloseModal={onToggleModal}>
          <VocabularyForm onFormSubmit={handleAddWord} />
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
