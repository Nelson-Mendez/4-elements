import React from 'react';
import logo from './logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Four Elements!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>returning player? <a>click here!</a></h3>
        <h3>new player? <a>try this one!</a></h3>
        
      </header>
    </div>
  );
}

export default App;
