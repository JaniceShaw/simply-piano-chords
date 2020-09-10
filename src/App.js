import React from 'react';
import Piano from './components/Piano/Piano.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Piano start={3} end={5} n1="E" n2="F" />
    </div>
  );
}

export default App;
