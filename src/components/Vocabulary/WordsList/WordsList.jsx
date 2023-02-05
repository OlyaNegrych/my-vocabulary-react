import { Component } from 'react';
// import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class WordList extends Component {
  render() {
    const wordList = this.props.wordsList;
    console.log(wordList);
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">N</TableCell>
              <TableCell align="center">English</TableCell>
              <TableCell align="center">Ukrainian</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wordList.map((word, index) => (
              <TableRow
                key={word.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{word.engWord}</TableCell>
                <TableCell align="center">{word.ukrWord}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default WordList;

// class WordList extends Component {
//   render() {
//     const wordList = this.props.wordsList;
//     return (
//         <ul>
//           {wordList.map(word => (
//             <li key={word.id}>
//               {word.engWord} - {word.ukrWord}
//               <Button type="submit" variant="contained">
//                 Edit
//               </Button>
//               <Button type="submit" variant="contained">
//                 Delete
//               </Button>
//             </li>
//           ))}
//         </ul>
//     );
//   }
// }
