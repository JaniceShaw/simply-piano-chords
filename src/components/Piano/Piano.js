import React from 'react';
import './Piano.scss';
import Octave from './Octave/Octave.js'

class Piano extends React.Component {
    static defaultProps = {
        start: 4,
        end: 4,
        n1: "C",
        n2: "B",
        displayOctave: true,
        displayNote: true,
        lf1: [],
        lf2: [],
        lf3: [],
        lf4: [],
        lf5: [],
        rf1: [],
        rf2: [],
        rf3: [],
        rf4: [],
        rf5: []
    }


    render() {

        const start = this.props.start;
        let end = this.props.end;

        const n1 = this.props.n1;
        const n2 = this.props.n2;

        const displayOctave = this.props.displayOctave;
        const displayNote = this.props.displayNote;
        let displayClasses = "";

        const lf1 = this.props.lf1;
        const lf2 = this.props.lf2;
        const lf3 = this.props.lf3;
        const lf4 = this.props.lf4;
        const lf5 = this.props.lf5;

        const rf1 = this.props.rf1;
        const rf2 = this.props.rf2;
        const rf3 = this.props.rf3;
        const rf4 = this.props.rf4;
        const rf5 = this.props.rf5;

        let fingering = [lf5, lf4, lf3, lf2, lf1];
        // console.log("FIngering: ", fingering);

        //check for selected notes
        // if (lf1.length > 0) {
        // let selOctave = lf1[0];
        // let selNote = lf1[1];
        // console.log(lf1[0], lf1[1]);
        // }

        // if (lf2.length > 0) {
        // let selOctave = lf1[0];
        // let selNote = lf1[1];
        // console.log(lf2[0], lf2[1]);
        // }

        // check to see if should display notes and octave
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

        let n = start;
        let oct = [];

        //loop the number of octaves to show from start octave to end octave
        while (n <= end) {
            if (n === start) {
                oct.push([n, n1, null]);
            } else if (n === end) {
                oct.push([n, null, n2]);
            } else {
                oct.push([n, null, null]);
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
                            displayOctave={displayOctave}
                            displayNote={displayNote}
                            lf1={lf1}
                            lf2={lf2}
                            lf3={lf3}
                            lf4={lf4}
                            lf5={lf5}
                            rf1={rf1}
                            rf2={rf2}
                            rf3={rf3}
                            rf4={rf4}
                            rf5={rf5}
                            fingering={fingering}
                        />)
                }
            </ul>
        );
    }

}


export default Piano;

