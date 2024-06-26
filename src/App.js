import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '이순신',
  'birthday': '961226',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '971226',
  'gender': '남자',
  'job': '대학생2'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '강감찬',
  'birthday': '981226',
  'gender': '여자',
  'job': '대학생3'
}
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer 
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );    
  }
}

export default App;
