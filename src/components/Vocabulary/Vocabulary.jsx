import { Component } from "react";
import VocabularyForm from "./VocabularyForm";
import WordList from "./WordsList/WordsList";

class Vocabulary extends Component {
  state = {
    words: [],
  };

    handleAddWord = (word) => {
        const newWord = { id: Date.now(), ...word}
        this.setState(
            prev => ({ words: [...prev.words, newWord] }),
            // () => console.log(this.state)
        );
  };

  render() {
    return (
      <>
          <VocabularyForm onFormSubmit={this.handleAddWord} />
          <WordList wordsList={this.state.words} />
      </>
    );
  }
}

export default Vocabulary;