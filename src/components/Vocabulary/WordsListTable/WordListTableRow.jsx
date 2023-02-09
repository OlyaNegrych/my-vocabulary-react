import { Component } from 'react';
import { Button, Checkbox, TextField } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

class WordListTableRow extends Component {
  state = {
    isEdit: false,
    engWord: this.props.word.engWord,
    ukrWord: this.props.word.ukrWord,
  };

  onEdit = () => {
    this.setState(prev => ({ isEdit: !prev.isEdit }));
    if (this.state.isEdit) {
      this.props.onEditWord({...this.props.word, ...this.state})
    }
  };

  handleChangeLearn = (_, status) => {
  //   const updateWords = {
  //     engWord: state.engWord,
  //     ukrWord: state.ukrWord,
  //     isLearn: status,
  //     id: word.id,
  //   };
  }

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { word, index, onDelete } = this.props;
    return (
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="center">
          <Checkbox
          // checked={word.isLearn}
          // onChange={handleChangeLearn}
          />
        </TableCell>
        <TableCell align="center">{index + 1}</TableCell>
        {this.state.isEdit ? (
          <>
            <TableCell align="center">
              <TextField
                id="outlined-basic"
                label="Edit english word"
                variant="outlined"
                name="engWord"
                value={this.state.engWord}
                onChange={this.handleChangeInput}
              />
            </TableCell>
            <TableCell align="center">
              <TextField
                id="outlined-basic"
                label="Edit ukrainian word"
                variant="outlined"
                name="ukrWord"
                value={this.state.ukrWord}
                onChange={this.handleChangeInput}
              />
            </TableCell>
          </>
        ) : (
          <>
            <TableCell align="center">{word.engWord}</TableCell>
            <TableCell align="center">{word.ukrWord}</TableCell>
          </>
        )}
        <TableCell align="center">
          <Button variant="outlined" onClick={this.onEdit}>
            {this.state.isEdit ? 'Save' : 'Edit'}
          </Button>
          <Button variant="outlined" onClick={() => onDelete(word.id)}>
            Delete
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default WordListTableRow;