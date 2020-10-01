import React from 'react';
import Piano from './components/Piano/Piano.js';
import Button from './components/Button/Button.js';

const sp_chords = [
    {
        level: 1,
        name: "C",
        type: "triad",
        root: "C",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "C", 5]],
        rightHand: [[4, "C", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        level: 1,
        name: "G",
        type: "triad",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "G", 1]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "G", 5]]
    },

    {
        level: 1,
        name: "D",
        type: "triad",
        root: "D",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "D", 4]],
        rightHand: [[4, "D", 1], [4, "Fs", 3], [4, "A", 5]]
    },
    {
        level: 1,
        name: "Em",
        type: "triad",
        root: "E",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "E", 3]],
        rightHand: [[4, "E", 1], [4, "G", 3], [4, "B", 5]]
    },
    {
        level: 1,
        name: "Am",
        type: "triad",
        root: "A",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "A", 1]],
        rightHand: [[4, "C", 1], [4, "E", 2], [4, "A", 5]]
    },


    {
        level: 2,
        name: "F",
        type: "triad",
        root: "F",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "F", 2]],
        rightHand: [[4, "C", 1], [4, "F", 3], [4, "A", 5]]
    },
    {
        level: 2,
        name: "Dm",
        type: "triad",
        root: "D",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "D", 4]],
        rightHand: [[4, "D", 1], [4, "F", 3], [4, "A", 5]]
    },
    {
        level: 3,
        name: "E",
        type: "triad",
        root: "E",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "E", 3]],
        rightHand: [[4, "E", 1], [4, "Gs", 3], [4, "B", 5]]
    },

    {
        level: 3,
        name: "A",
        type: "triad",
        root: "A",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "A", 1]],
        rightHand: [[4, "Cs", 1], [4, "E", 2], [4, "A", 5]]
    },
    {
        level: 3,
        name: "Bm",
        type: "triad",
        root: "B",
        octStart: 2,
        octEnd: 4,
        startNote: "B",
        leftHand: [[2, "B", 5]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "Fs", 4]]
    },
    {
        level: 4,
        name: "G7",
        type: "triad",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "G", 1]],
        rightHand: [[3, "B", 1], [4, "F", 4], [4, "G", 5]]
    },
    {
        level: 4,
        name: "C7",
        type: "triad",
        root: "C",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "C", 5]],
        rightHand: [[3, "As", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        level: 4,
        name: "D7",
        type: "triad",
        root: "D",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "D", 4]],
        rightHand: [[4, "C", 1], [4, "Fs", 3], [4, "A", 5]]
    },
    {
        level: 5,
        name: "Dm7",
        type: "triad",
        root: "D",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "D", 4]],
        rightHand: [[4, "C", 1], [4, "F", 3], [4, "A", 5]]
    },
    {
        level: 5,
        name: "CMaj7",
        type: "triad",
        root: "C",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "C", 5]],
        rightHand: [[3, "B", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        level: 5,
        name: "Am7",
        type: "triad",
        root: "A",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "A", 1]],
        rightHand: [[4, "C", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        level: 6,
        name: "A7",
        type: "triad",
        root: "A",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "A", 1]],
        rightHand: [[4, "Cs", 1], [4, "E", 2], [4, "G", 4]]
    },
    {
        level: 6,
        name: "E7",
        type: "triad",
        root: "E",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "E", 3]],
        rightHand: [[4, "D", 1], [4, "Gs", 3], [4, "B", 5]]
    },
    {
        level: 6,
        name: "F7",
        type: "triad",
        root: "F",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "F", 2]],
        rightHand: [[4, "C", 1], [4, "Ds", 2], [4, "A", 5]]
    },
    {
        level: 6,
        name: "Bdim",
        type: "triad",
        root: "B",
        octStart: 2,
        octEnd: 4,
        startNote: "B",
        leftHand: [[2, "B", 5]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "F", 4]]
    },
    {
        level: 6,
        name: "GMaj7",
        type: "triad",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "G", 1]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "Fs", 4]]
    },
];

function getChords(level) {

    return sp_chords.map(c => {
        if (c.level === level && !c.startNote) {

            return <Piano
                title={c.name}
                startOctave={c.octStart}
                endOctave={c.octEnd}
                selectedNotesLeft={c.leftHand}
                selectedNotesRight={c.rightHand}
            />
        } else if (c.level === level && c.startNote) {

            return <Piano
                title={c.name}
                startOctave={c.octStart}
                endOctave={c.octEnd}
                selectedNotesLeft={c.leftHand}
                selectedNotesRight={c.rightHand}
                firstNote={c.startNote}
            />
        }
    }
    )

}

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

                <h1>Pop chords I</h1>
                {getChords(1)}
                <hr />
                <h1>Pop chords II</h1>
                {getChords(2)}
                <hr />
                <h1>Pop chords III</h1>
                {getChords(3)}
                <hr />
                <h1>Blues Chords I</h1>
                {getChords(4)}
                <hr />
                <h1>Jazz Chords I</h1>
                {getChords(5)}
                <hr />
                <h1>Jazz Chords II</h1>
                {getChords(6)}

            </div>
        );
    }
}

export default Display;
