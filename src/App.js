import React from 'react';
import Octave from './components/Octave/Octave.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>piano keyboard</h1>
      </header>
      <ul className="piano">
        <Octave octaveNum={3} />
        <Octave octaveNum={4} />
        <Octave octaveNum={5} />
      </ul>

    </div>
  );
}

export default App;
