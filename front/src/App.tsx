import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppInterface from './AppInterface';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! This is only a basic example.
        </p>
        <AppInterface/>
      </header>
    </div>
  );
}

export default App;
