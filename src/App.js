import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/material/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },

  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '이순신',
    'birthday': '971222',
    'gender': '남자',
    'job': '대학생2'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '강감찬',
    'birthday': '981222',
    'gender': '남자',
    'job': '대학생3'
  }
]
class App extends Component {
  render() {
    const { classes} = this.props;
    return (
      //<Paper className={classes.root}>
      <div>
        <Table >
        <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>  
          <TableBody>
             {customers.map(c => (
               // return (
                  <TableRow key={c.id} >
                                  
                  <TableCell>{c.id}</TableCell>
                  <TableCell>{c.image}</TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.birthday}</TableCell>
                  <TableCell>{c.gender}</TableCell>
                  <TableCell>{c.job}</TableCell>
                  </TableRow>    
               )
              )
            }
            
            
          </TableBody>
        </Table>
     </div>   
     //</Paper>
    );
  }
}

export default App;
//export default withStyles(styles)(App);