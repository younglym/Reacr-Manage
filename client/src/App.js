import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import CustomerDelete from './components/CustomerDelete';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/material/styles';

//import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
//import { fade } from '@mui/material/colorManipulator';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Box from '@mui/material/Box';





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
  },
  grow: {
    flexGrow:1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoings.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,    
  }




})

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        customers: '',
        completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });

    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
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
      <div className={classes.root}>
        
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" ariak-lavel>
              <MenuIcon />              
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inheritant">
              고객관리 시스템
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />                
              </div>
              <InputBase
                placeholder="검색하기"
                classes={{
                  //root: classes.inputRoot,
                  input: classes.inputInput,                    
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
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
                <TableCell>설정</TableCell>
              </TableRow>
            </TableHead>  
            <TableBody>
          
              {this.state.customers ? this.state.customers.map(c => (
                  //return (
                  //stateRefresh={this.props.stateRefresh}
                    <TableRow key={c.id}>                                  
                      <TableCell>{c.id}</TableCell>
                      <TableCell>{c.image}</TableCell>
                      <TableCell>{c.name}</TableCell>
                      <TableCell>{c.birthday}</TableCell>
                      <TableCell>{c.gender}</TableCell>
                      <TableCell>{c.job}</TableCell>
                      <TableCell><CustomerDelete stateRefresh={this.stateRefresh} id={c.id}/></TableCell>
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
      <CustomerAdd stateRefresh={this.stateRefresh}/>
     </div>   
     //</Paper>
    );
  }
}

//export default App;
export default withStyles(styles)(App);