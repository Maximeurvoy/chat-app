import React from 'react';
import Contact from './Components/Contact/Contact';

import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       
        <Contact Avatar='https://randomuser.me/api/portraits/men/40.jpg' Name ='Stephen Douglas' Status={true}/>
        <Contact Avatar='https://randomuser.me/api/portraits/men/55.jpg' Name ='Allen Larson'  Status={true}/>
        <Contact Avatar='https://randomuser.me/api/portraits/women/82.jpg' Name ='Sue Rodriguez'  Status={false}/>

      
      </header>
    </div>
  );
}

export default App;
