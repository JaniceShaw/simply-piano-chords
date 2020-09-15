import React from 'react';
import './Octave.scss';
import Keynote from './Keynote/Keynote.js'

//data  used by component
const allNotes = [
    ["C", "C"],
    ["Cs", "C\u266F D\u266D"],
    ["D", "D"],
    ["Ds", "D\u266F E\u266D"],
    ["E", "E"],
    ["F", "F"],
    ["Fs", "F\u266F G\u266D"],
    ["G", "G"],
    ["Gs", "G\u266F A\u266D"],
    ["A", "A"],
    ["As", "A\u266F B\u266D"],
    ["B", "B"],
];
//make array that contains only note name
let notes = [];
allNotes.map(i => notes.push(i[0]));
// END data

class Octave extends React.Component {

    render() {
        const { n1, n2, octaveNum } = this.props;

        //make an array for the fist octave so that it can start at the chosen note
        const firstNote = notes.indexOf(n1); // get the index of the first note
        const startOctave = allNotes.slice(firstNote, allNotes.length); // make array from start note
        //make an array for the last octave so that it can end at the end note
        const lastNote = notes.indexOf(n2);
        const endOctave = allNotes.slice(0, lastNote + 1);

        const fingering = this.props.fingering;
        let display;

        //check if need to show the octave that dose not start at c
        if (n1 !== null) {
            // console.log("nnnn", startOctave[0]);
            display = startOctave.map(i =>

                <Keynote
                    note={i[0]}
                    label={i[1]}
                    octaveNum={octaveNum}
                    key={i[0] + octaveNum}
                    fingering={fingering}
                />
            )
        } else {
            //displays all note c - b 
            display = allNotes.map(i =>
                <Keynote
                    note={i[0]}
                    label={i[1]}
                    octaveNum={octaveNum}
                    key={i[0] + octaveNum}
                    fingering={fingering}
                />
            )
        }

        //checks that last octave not finishing on b then displays to correct note
        if (n2 !== null) {
            display = endOctave.map(i =>
                <Keynote
                    note={i[0]}
                    label={i[1]}
                    octaveNum={octaveNum}
                    key={i[0] + octaveNum}
                    fingering={fingering}
                />
            )
        }

        return (
            <div className="Octave">
                {display}
                <div className="Octave-displayNum">{octaveNum}</div>
            </div>
        );
    }
}
export default Octave;
