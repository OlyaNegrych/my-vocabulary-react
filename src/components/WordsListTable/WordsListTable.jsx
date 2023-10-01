import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WordListTableRow from './WordListTableRow';
import Checkbox from '@mui/material/Checkbox';

export default function WordListTable({ wordsList, onDelete, onEditWord }) {
  
   return (
    <table style={{backgroundColor: '#c7fbe1', borderRadius: '4px', padding: '4px'}}>
      <thead>
        <tr>
          <th align="center" style={{minWidth: '40px', textAlign: 'center'}}>Learn all</th>
          <th align="center" style={{minWidth: '40px', textAlign: 'center'}}>N</th>
          <th align="center" style={{minWidth: '200px', textAlign: 'center'}}>English</th>
          <th align="center" style={{minWidth: '200px', textAlign: 'center'}}>Ukrainian</th>
          <th align="center" style={{minWidth: '200px', textAlign: 'center'}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {wordsList.map((word, index) => (
          <WordListTableRow
            key={word.id}
            word={word}
            index={index}
            onDelete={onDelete}
            onEditWord={onEditWord}
          />
        ))}
      </tbody>
    </table>
  );
  
}

