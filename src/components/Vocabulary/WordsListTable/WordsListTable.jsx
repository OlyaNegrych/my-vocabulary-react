import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WordListTableRow from './WordListTableRow';
import Checkbox from '@mui/material/Checkbox';

export default function WordListTable({wordsList, onDelete, onEditWord}) {

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Learn all
                <Checkbox
                // checked={word.isLearn}
                // onChange={handleChangeLearn}
                />
              </TableCell>
              <TableCell align="center">N</TableCell>
              <TableCell align="center">English</TableCell>
              <TableCell align="center">Ukrainian</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wordsList.map((word, index) => (
              <WordListTableRow
                key={word.id}
                word={word}
                index={index}
                onDelete={onDelete}
                onEditWord={onEditWord}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  
}

