import React from 'react';
import Contact from './Components/Contact/Contact';

import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       
        <Contact Name ='Stephen Douglas' Avatar='https://randomuser.me/api/portraits/men/40.jpg' Status={true}/>
        <Contact Name ='Allen Larson' Avatar='https://randomuser.me/api/portraits/men/55.jpg' Status={true}/>
        <Contact Name ='Sue Rodriguez' Avatar='https://randomuser.me/api/portraits/women/82.jpg' Status={false}/>

      
      </header>
    </div>
  );
}

export default App;
