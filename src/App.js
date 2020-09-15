import React from 'react';
import Piano from './components/Piano/Piano.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Piano
        start={2}
        end={5}
        lf5={[2, "Cs"]}
        lf3={[2, "E"]}
        lf1={[2, "G"]}

        rf1={[4, "Cs"]}
        rf3={[4, "E"]}
        rf5={[4, "G"]}

        n2="G" />
      <Piano start={3} end={5} lf4={[3, "F"]} />
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
      />
    </div>
  );
}

export default App;
