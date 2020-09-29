import React from 'react';
import './App.css';
import Display from './Display.js';

function App() {
  return (
    <div className="App">

      <Display />
      {/* <Piano
        start={2}
        end={4}
        lf5={[2, "Cs"]}
        lf3={[2, "E"]}
        lf1={[2, "G"]}

        rf1={[4, "Cs"]}
        rf3={[4, "E"]}
        rf5={[4, "G"]}

        n2="G" />
      <Piano displayOctave={false} displayNote={false} />
      <Piano displayNote={false} />
      <Piano displayOctave={false} /> */}
    </div>
  );
}

export default App;
