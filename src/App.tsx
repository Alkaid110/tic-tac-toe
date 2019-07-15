import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './component/Board'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>using typescript</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <Board />
      </header>
    </div>
  );
}

export default App;
