import React from 'react';
import './scss/Piano.scss';
import Octave from './Octave/Octave.js'

class Piano extends React.Component {

    static defaultProps = {
        start: 4, //octave to start at
        end: 4, // octave to end at this needs to change if less than start
        n1: "C", // start note if not C
        n2: "B", // end note if not B
        displayOctave: true,
        displayNote: true,
        lf1: [], lf2: [], lf3: [], lf4: [], lf5: [], rf1: [], rf2: [], rf3: [], rf4: [], rf5: []
    }

    constructor(props) {
        super(props);
        this.state = {
            start: this.props.start,
            end: this.props.end,
            n1: this.props.n1,
            n2: this.props.n2,
        };
    }


    render() {

        const { start, n1, n2 } = this.state;
        let end = this.state.end;
        //put the individual finger info into an array
        //going from lf5 - rf5
        const { lf5, lf4, lf3, lf2, lf1, rf1, rf2, rf3, rf4, rf5, displayOctave, displayNote } = this.props;
        let fingering = [lf5, lf4, lf3, lf2, lf1, rf1, rf2, rf3, rf4, rf5];
        let displayClasses = "";

        // check to see if should display notes and octave. adds class name to Piano
        if (!displayOctave) {
            displayClasses = "hideOctave"
        }
        if (!displayNote) {
            displayClasses += " hideNote"
        }

        //check that the end octave is higher than the start octave
        if (end < start) {
            end = start;
        }

        let n = start; //start is the octave number that has been chosen
        let oct = []; // array to fill with octaves eg. 4 default value only one octave starting at 4

        //loop to make the octave numbers and the start note and end note
        while (n <= end) { // while n is less than last octave
            if (n === start) { //if n = start octave
                oct.push([n, n1, null]); // add to oct array n [octave number], n1 [start note], n2[end note] 
            } else if (n === end) { // if oct num is == last oct num [the last octave]
                oct.push([n, null, n2]);//add to array end note info
            } else {
                oct.push([n, null, null]); // oct num != first oct or last oct add to array
            }
            n = n + 1;
        }

        return (
            <ul className={"Piano " + displayClasses} >
                {
                    oct.map(i =>
                        <Octave
                            octaveNum={i[0]}
                            key={i[0]}
                            n1={i[1]}
                            n2={i[2]}
                            fingering={fingering}
                        />)
                }
            </ul>

        );
    }

}

export default Piano;
