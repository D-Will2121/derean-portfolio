import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './container/Home/Home';
import About from './container/About/About'; 
import WebDev from './container/Web Dev/WebDev';
import GameDev from './container/Game Dev/GameDev';
import Contact from './container/Contact/Contact';
import './App.css';
import gameDev from './container/Game Dev/GameDev';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About/>
    <WebDev/>
    <GameDev/>
    <Contact/>
  </div>
);

export default App;