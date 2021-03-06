import React from 'react';
import './Octave.scss';
import Keynote from './Keynote/Keynote.js'

const allNotes = [
    ["C", "C"],
    [["Cs", "Df"], "C\u266F D\u266D"],
    ["D", "D"],
    [["Ds", "Ef"], "D\u266F E\u266D"],
    ["E", "E"],
    ["F", "F"],
    [["Fs", "Gf"], "F\u266F G\u266D"],
    ["G", "G"],
    [["Gs", "Af"], "G\u266F A\u266D"],
    ["A", "A"],
    [["As", "Bf"], "A\u266F B\u266D"],
    ["B", "B"],
];

//make array that contains only note name
let notes = [];
allNotes.map(i => notes.push(i[0]));
// END data

class Octave extends React.Component {

    render() {
        const { noteDisplayShow, firstNote, lastNote, octaveNum, selectedNotesLeft, selectedNotesRight, rootNote, highlight } = this.props;

        //make an array for the fist octave so that it can start at the chosen note
        const firstNoteIndex = notes.indexOf(firstNote); // get the index of the first note
        const startOctave = allNotes.slice(firstNoteIndex, allNotes.length); // make array from start note
        //make an array for the last octave so that it can end at the end note
        const lastNoteIndex = notes.indexOf(lastNote);
        const endOctave = allNotes.slice(0, lastNoteIndex + 1);

        let display;

        //check if need to show the octave that dose not start at c
        if (firstNote !== null) {
            display = startOctave.map(i =>

                <Keynote
                    note={i[0]}
                    label={i[1]}
                    octaveNum={octaveNum}
                    key={i[0] + octaveNum}
                    selectedNotesLeft={selectedNotesLeft}
                    selectedNotesRight={selectedNotesRight}
                    rootNote={rootNote}
                    highlight={highlight}
                    noteDisplayShow={noteDisplayShow}
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
                    selectedNotesLeft={selectedNotesLeft}
                    selectedNotesRight={selectedNotesRight}
                    rootNote={rootNote}
                    highlight={highlight}
                    noteDisplayShow={noteDisplayShow}
                />
            )
        }

        //checks that last octave not finishing on b then displays to correct note
        if (lastNote !== null) {
            display = endOctave.map(i =>
                <Keynote
                    note={i[0]}
                    label={i[1]}
                    octaveNum={octaveNum}
                    key={i[0] + octaveNum}
                    selectedNotesLeft={selectedNotesLeft}
                    selectedNotesRight={selectedNotesRight}
                    rootNote={rootNote}
                    highlight={highlight}
                    noteDisplayShow={noteDisplayShow}
                />
            )
        }

        return (
            <div className="Octave">
                {display}
                <div className="Octave__displayNum">{octaveNum}</div>
            </div>
        );
    }
}
export default Octave;
