import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import AppInterface from './AppInterface';

function App() {
  const [ text, setText ] = useState('bottom text');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! This is only a basic example.
        </p>
        <AppInterface text={text} />
      </header>
    </div>
  );
}

export default App;
