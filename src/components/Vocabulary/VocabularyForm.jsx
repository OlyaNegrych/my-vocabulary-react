import { Component } from 'react';
import {  TextField,  Button } from '@mui/material';

const initialState = { engWord: '', ukrWord: '' };

class VocabularyForm extends Component {
  state = {
   ...initialState
  };

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState({ ...initialState });
  };

  render() {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
        <TextField
          id="outlined-basic"
          label="English word"
          variant="outlined"
          name="engWord"
          onChange={this.handleChangeInput}
          value={this.state.engWord}
        />
        <TextField
          id="outlined-basic"
          label="Ukrainian word"
          variant="outlined"
          name="ukrWord"
          onChange={this.handleChangeInput}
          value={this.state.ukrWord}
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </form>
    );
  }
}

export default VocabularyForm;

/* <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
<Fab color="secondary" aria-label="edit">
  <EditIcon />
</Fab>
<Fab variant="extended">
  <NavigationIcon sx={{ mr: 1 }} />
  Navigate
</Fab>
<Fab disabled aria-label="like">
  <FavoriteIcon />
</Fab> */