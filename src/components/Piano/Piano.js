import React from 'react';
import './scss/Piano.scss';
import Octave from './Octave/Octave.js'
import NoteDisplay from '../NoteDisplay/NoteDisplay.js';

class Piano extends React.Component {

    static defaultProps = {
        startOctave: 4, //octave to start at
        endOctave: 4, // octave to end at this needs to change if less than start
        firstNote: "C", // start note if not C
        lastNote: "B", // end note if not B
        displayOctave: true,
        displayNote: true,
        selectedNotesLeft: [],
        selectedNotesRight: [],
        rootNote: 0
    }

    constructor(props) {
        super(props);
        this.state = {
            startOctave: this.props.startOctave,
            endOctave: this.props.endOctave,
            firstNote: this.props.firstNote,
            lastNote: this.props.lastNote,
            selNote: [],
            noteOn: false
        };

        this.highlight = this.highlight.bind(this);
    }

    highlight(clickedNote, noteState) {

        this.setState({ selNote: clickedNote })
        console.log(clickedNote, noteState);
    }

    render() {

        const { startOctave, firstNote, lastNote, selNote, noteOn } = this.state;
        let endOctave = this.state.endOctave;
        const { displayOctave, displayNote, selectedNotesLeft, selectedNotesRight, rootNote } = this.props;

        let displayClasses = "";

        // check to see if should display notes and octave. adds class name to Piano
        if (!displayOctave) {
            displayClasses = " hideOctave"
        }


        if (!displayNote) {
            displayClasses += " hideNote"
        }

        //check that the end octave is higher than the start octave
        if (endOctave < startOctave) {
            endOctave = startOctave;
        }

        let n = startOctave; //start is the octave number that has been chosen
        let oct = []; // array to fill with octaves eg. 4 default value only one octave starting at 4

        //loop to make the octave numbers and the start note and end note
        while (n <= endOctave) { // while n is less than last octave
            if (n === startOctave) { //if n = start octave
                oct.push([n, firstNote, null]); // add to oct array n [octave number], n1 [start note], n2[end note] 
            } else if (n === endOctave) { // if oct num is == last oct num [the last octave]
                oct.push([n, null, lastNote]);//add to array end note info
            } else {
                oct.push([n, null, null]); // oct num != first oct or last oct add to array
            }
            n = n + 1;
        }


        return (
            <div className="Piano">
                <h1 className="Piano__title">{this.props.title}</h1>

                <NoteDisplay selectedNotesRight={selectedNotesRight} selectedNotesLeft={selectedNotesLeft} selNote={selNote} noteOn={noteOn} />

                <ul className={"Piano__keys" + displayClasses} >
                    {
                        oct.map(i =>
                            <Octave
                                octaveNum={i[0]}
                                key={i[0]}
                                firstNote={i[1]}
                                lastNote={i[2]}
                                selectedNotesLeft={selectedNotesLeft}
                                selectedNotesRight={selectedNotesRight}
                                rootNote={rootNote}
                                highlight={this.highlight}
                            />)
                    }
                </ul >
            </div>

        );
    }

}

export default Piano;
