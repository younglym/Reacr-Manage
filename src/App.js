import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name': '이순신',
  'birthday': '961226',
  'gender': '남자',
  'job': '대학생'
}

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}      
      />
    );
  }
}

export default App;
