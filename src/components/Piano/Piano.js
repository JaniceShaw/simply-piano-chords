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
            selNoteR: [],
            noteOn: false,
            RHand: false,
            LHand: false
        };

        this.highlight = this.highlight.bind(this);
    }

    highlight(clickedNote, hand) {

        let left = this.props.selectedNotesLeft;  // [[3, "C", 5]]
        let right = this.props.selectedNotesRight; // [[4, "C", 1],[4, "E", 3],[4, "G", 5]]

        let rh = false;
        let lh = false;
        let flatSharpR;

        //Right hand -- check is in the same octave
        if (clickedNote[1] === right[0][0] || clickedNote[1] === right[1][0] || clickedNote[1] === right[2][0]) {
            //check to see if the clicked note was a sharp/flat
            if (clickedNote[0].length > 1) {
                // find out if it was a flat or sharp clicked on
                if (right[0][1] === clickedNote[0][0] ||
                    right[1][1] === clickedNote[0][0] ||
                    right[2][1] === clickedNote[0][0]) {
                    flatSharpR = [[clickedNote[0][0]], [clickedNote[1]]];
                    rh = true;
                } else if (right[0][1] === clickedNote[0][1] ||
                    right[1][1] === clickedNote[0][1] ||
                    right[2][1] === clickedNote[0][1]) {
                    flatSharpR = [[clickedNote[0][1]], [clickedNote[1]]];
                    rh = true;
                } else {
                    flatSharpR = "";
                }

                this.setState({ selNoteR: flatSharpR, RHand: rh })
            } else if

                // check white notes
                (
                (right[0][1] === clickedNote[0] && right[0][0] === clickedNote[1]) ||
                (right[1][1] === clickedNote[0] && right[1][0] === clickedNote[1]) ||
                (right[2][1] === clickedNote[0] && right[2][0] === clickedNote[1])
            ) {
                this.setState({ selNoteR: clickedNote, RHand: true })
                // RHand = true;
            } else {
                this.setState({ selNoteR: [], RHand: false })
            }


        } else {
            this.setState({ selNoteR: [], RHand: false })
        }


        //LEFT hand -- check is in the same octave

        let flatSharp;
        if (clickedNote[1] === left[0][0]) {
            //check to see if the clicked note was a sharp/flat
            if (clickedNote[0].length > 1) {
                // find out if it was a flat or sharp clicked on
                if (left[0][1] === clickedNote[0][0]) {
                    flatSharp = [[clickedNote[0][0]], [clickedNote[1]]];
                    lh = true;
                } else if (left[0][1] === clickedNote[0][1]) {
                    flatSharp = [[clickedNote[0][1]], [clickedNote[1]]];
                    lh = true;
                } else {
                    flatSharp = "";
                }
                this.setState({ selNote: flatSharp, LHand: lh })
            } else if
                // check white notes
                (left[0][1] === clickedNote[0] && left[0][0] === clickedNote[1]) {
                this.setState({ selNote: clickedNote, LHand: true })
                // RHand = true;
            } else {
                this.setState({ selNote: [], LHand: false })
            }

        } else {
            this.setState({ selNote: [], LHand: false })
        }
    }

    render() {

        const { startOctave, firstNote, lastNote, selNote, selNoteR, noteOn, RHand, LHand } = this.state;
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
                <h3 className="Piano__title">{this.props.title}</h3>

                <NoteDisplay
                    selectedNotesRight={selectedNotesRight}
                    selectedNotesLeft={selectedNotesLeft}
                    selNote={selNote}
                    selNoteR={selNoteR}
                    noteOn={noteOn}
                    RHand={RHand}
                    LHand={LHand}
                />

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
