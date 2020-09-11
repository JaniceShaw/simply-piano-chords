import React from 'react';
import './Octave.scss';
import Keynote from './Keynote/Keynote.js'

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

class Octave extends React.Component {
    static defaultProps = {
        // n1: "C",
        // n2: "B"
    }

    render() {
        const n1 = this.props.n1;
        const n2 = this.props.n2;

        const firstNote = notes.indexOf(n1);
        const startOctave = allNotes.slice(firstNote, allNotes.length);

        const lastNote = notes.indexOf(n2);
        const endOctave = allNotes.slice(0, lastNote + 1);

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

        const fingering = this.props.fingering;

        let display;

        if (n1 !== null) {

            // fingering.map(f =>

            //     if (f[0] === this.props.octaveNum) {
            //     console.log(f[0])
            // }
            // )


            if (lf1[0] === this.props.octaveNum) {
                display = startOctave.map(i =>
                    <Keynote
                        note={i[0]}
                        label={i[1]}
                        lf1={lf1}
                        octaveNum={this.props.octaveNum}
                        key={i[0] + this.props.octaveNum}
                    />
                )
            } else {
                display = startOctave.map(i =>
                    <Keynote
                        note={i[0]}
                        label={i[1]}
                        lf1={lf1}
                        lf2={lf2}
                        lf3={lf3}
                        lf4={lf4}
                        lf5={lf5}
                        octaveNum={this.props.octaveNum}
                        key={i[0] + this.props.octaveNum}
                    />
                )
            }

        } else {
            if (lf1[0] === this.props.octaveNum) {
                display = allNotes.map(i =>
                    <Keynote
                        note={i[0]}
                        label={i[1]}
                        lf1={lf1}
                        lf2={lf2}
                        lf3={lf3}
                        lf4={lf4}
                        lf5={lf5}
                        rf1={rf1}

                        octaveNum={this.props.octaveNum}
                        key={i[0] + this.props.octaveNum}
                    />
                )
            } else {
                display = allNotes.map(i =>
                    <Keynote
                        note={i[0]}
                        label={i[1]}
                        octaveNum={this.props.octaveNum}
                        key={i[0] + this.props.octaveNum}
                    />
                )
            }




            // display = allNotes.map(i =>
            //     <Keynote
            //         note={i[0]}
            //         label={i[1]}
            //         lf1={this.props.lf1}
            //         lf2={this.props.lf2}
            //         octaveNum={this.props.octaveNum}
            //         key={i[0] + this.props.octaveNum}
            //     />
            // )
        }
        if (n2 !== null) {
            display = endOctave.map(i =>
                // console.log("start octave", i)
                <Keynote
                    note={i[0]}
                    label={i[1]}
                    octaveNum={this.props.octaveNum}
                    key={i[0] + this.props.octaveNum}
                />
            )
        }

        return (
            <div className="Octave">
                {display}
                {/* {allNotes.map(i =>
                    <Keynote
                        note={i[0]}
                        label={i[1]}
                        octaveNum={this.props.octaveNum}
                        key={i[0] + this.props.octaveNum}

                    />
                )} */}

                <div className="Octave-displayNum">{this.props.octaveNum}</div>
            </div>
        );
    }
}
export default Octave;

