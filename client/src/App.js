import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
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
  },
  progress: {
    margin: theme.spacing.unit * 2,
  }
})

class App extends Component {

  state = {
    customer: "",
    completed: 0
  }
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }
  render() {
    const { classes} = this.props;
    return (
      //<Paper className={classes.root}>
      <div>
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
              {this.state.customers ? this.state.customers.map(c => (
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
                ) : 
                <TableRow>
                  <TableCell colspan="6" align="center">
                    <CircularProgress variant="determinate" value={this.state.completed}/>
                  </TableCell>
                </TableRow>
                }               
            </TableBody>
          </Table>
      </div>
      <CustomerAdd/>
     </div>   
     //</Paper>
    );
  }
}

export default App;
//export default withStyles(styles)(App);