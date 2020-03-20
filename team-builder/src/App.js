import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import Member from './Member';
import Form from './Form';

function App() {
const [teamMembers, setTeamMembers] = useState([dummyData]);

useEffect(() => {
  setTeamMembers(dummyData);
},[]);



  return (
    <div className="App">
      <Form />
      <div className='team-members'>
        {teamMembers.map(member => {
          return <Member member={member}/>
        })}
      </div>
    </div>
  );
}

export default App;
