import React from 'react';
import Piano from './components/Piano/Piano.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Piano start={3} end={5} n1="E" n2="F" />
      <Piano start={3} end={5} />
      <Piano displayOctave={false} displayNote={false} />
      <Piano displayNote={false} />
      <Piano displayOctave={false} />

      <Piano
        start={3}
        end={5}
        lf5={[3, "Cs"]} //octave number, note
        lf3={[3, "Ds"]}
        lf2={[3, "G"]}
        rf1={[4, "C"]} //octave number, note
        rf3={[4, "D"]}
        rf5={[4, "E"]}
        displayNote={false}
      />

    </div>
  );
}

export default App;
