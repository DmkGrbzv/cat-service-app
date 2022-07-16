import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';

import Home from './pages/Home';
import Navigation from './layout/Navigation';
function App() {
  
  return (
    <div className="App">
      <div className='App__content'>
        <div className='App__content__left-side'>
          <Navigation />
        </div>
        <div className='App__content__right-side'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
