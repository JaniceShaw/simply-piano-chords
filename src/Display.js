import React from 'react';
import Piano from './components/Piano/Piano.js';
import Button from './components/Button/Button.js';

const chords = [
    {
        name: "C",
        type: "triad",
        start: 3,
        end: 4,

        "lf5Oct": 3,
        "lf5Note": "C",

        rf1Oct: 4,
        rf1Note: "C",

        rf3Oct: 4,
        rf3Note: "E",

        rf5Oct: 4,
        rf5Note: "G",
    },
    {
        name: "Dm",
        type: "triad",
        start: 3,
        end: 4,
        // fingers: [1, 3, 5],
        // bassFinger: 2,
        // bassNote: "D",
        // chordNotes: ["D", "F", "A"],
        notes: [
            [3, "D"],//l5
            [],
            [],
            [],
            [],

            [4, "D"],//r1
            [],
            [4, "F"],
            [],
            [4, "G"],
        ]
    }
];
// console.log(chords);
function test() {
    var result;

    chords.map(c => {
        // console.log("boob", c.lf5Oct)
        result = `
            start=${c.start}
            end=${c.end}
            lf5={[${c.lf5Oct}, "${c.lf5Note}"]}
        `

        return result;
    }

    )


}

console.log(test());
var jan = test();
// 

class Display extends React.Component {
    static defaultProps = {
        buttonTxt: "Click",
    }

    constructor(props) {
        super(props);
        this.state = {
            displayOctave: true,
            displayNote: true,
        };

        this.handleClickOct = this.handleClickOct.bind(this);
        this.handleClickNote = this.handleClickNote.bind(this);
    }

    handleClickOct() {
        if (this.state.displayOctave === true) {
            this.setState({ displayOctave: false });
        } else {
            this.setState({ displayOctave: true });
        }

    }
    handleClickNote() {
        if (this.state.displayNote === true) {
            this.setState({ displayNote: false })
        } else {
            this.setState({ displayNote: true })
        }
    }

    render() {
        const { displayOctave, displayNote } = this.state;


        return (
            <div className="Display">
                <h1>C</h1>
                <Piano
                    displayOctave={displayOctave}
                    displayNote={displayNote}
                    start={3}
                    end={4}
                    lf5={[3, "C"]}
                    rf1={[4, "C"]}
                    rf3={[4, "E"]}
                    rf5={[4, "G"]}

                />

                <Piano
                    displayOctave={displayOctave}
                    displayNote={displayNote}
                    start={3}
                    end={4}
                    lf5={jan}
                    lf4={jan}
                    lf3={jan}
                    lf2={jan}
                    lf1={jan}

                    rf1={jan}
                    rf2={jan}
                    rf3={jan}
                    rf4={jan}
                    rf5={jan}

                />


                <Button type="hideOctave" buttonTxt="hide Octave" click={this.handleClickOct} />
                <Button type="hideNote" buttonTxt="hide Note name" click={this.handleClickNote} />
            </div>
        );
    }
}

export default Display;