import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Ropost from './Components/Ropost/Ropost';
import {action,orginals,horror, Romance}from'./url'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Ropost url={orginals} title='Netflix Orginal'/>
      <Ropost url={action} title='Action'/>
      <Ropost url={horror} title='Horror'/>
      <Ropost url={Romance} title='Romance'/>
      
    </div>
  );
}

export default App;
