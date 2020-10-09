import React from 'react';
import Piano from './components/Piano/Piano.js';
import Button from './components/Button/Button.js';

import './DisplaySpChords.scss';

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
        type: "triad - inversion - reverse",
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
        type: "triad - inversion - reverse",
        root: "A",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "A", 1]],
        rightHand: [[4, "C", 1], [4, "E", 2], [4, "A", 5]]
    },


    {
        level: 2,
        name: "F",
        type: "triad - inversion - middle",
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
        type: "triad - inversion - reverse",
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
        type: "seventh - inversion",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "G", 1]],
        rightHand: [[3, "B", 1], [4, "F", 4], [4, "G", 5]]
    },
    {
        level: 4,
        name: "C7",
        type: "seventh - inversion",
        root: "C",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "C", 5]],
        rightHand: [[3, "As", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        level: 4,
        name: "D7",
        type: "seventh - inversion",
        root: "D",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "D", 4]],
        rightHand: [[4, "C", 1], [4, "Fs", 3], [4, "A", 5]]
    },
    {
        level: 5,
        name: "Dm7 ",
        type: "seventh - inversion",
        root: "D",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "D", 4]],
        rightHand: [[4, "C", 1], [4, "F", 3], [4, "A", 5]]
    },
    {
        level: 5,
        name: "CMaj7",
        type: "four notes?",
        root: "C",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "C", 5]],
        rightHand: [[3, "B", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        level: 5,
        name: "Am7",
        type: "seventh - inversion",
        root: "A",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "A", 1]],
        rightHand: [[4, "C", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        level: 6,
        name: "A7",
        type: "seventh - inversion",
        root: "A",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "A", 1]],
        rightHand: [[4, "Cs", 1], [4, "E", 2], [4, "G", 4]]
    },
    {
        level: 6,
        name: "E7",
        type: "seventh - inversion",
        root: "E",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "E", 3]],
        rightHand: [[4, "D", 1], [4, "Gs", 3], [4, "B", 5]]
    },
    {
        level: 6,
        name: "F7",
        type: "seventh - inversion",
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
        type: "4 notes",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "G", 1]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "Fs", 4]]
    },
    {
        level: 6,
        name: "FMaj7",
        type: "4 notes",
        root: "F",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "F", 2]],
        rightHand: [[4, "C", 1], [4, "E", 2], [4, "A", 5]]
    },
];



class DisplaySpChords extends React.Component {
    static defaultProps = {
        buttonTxt: "Click",
    }

    constructor(props) {
        super(props);
        this.state = {
            displayOctave: true,
            displayNote: true,
            hideNote: "Hide note names"
        };

        this.handleClickOct = this.handleClickOct.bind(this);
        this.handleClickNote = this.handleClickNote.bind(this);
        this.getChords = this.getChords.bind(this);
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
            this.setState({ displayNote: false, hideNote: "Show note names" })
        } else {
            this.setState({ displayNote: true, hideNote: "Hide note names" })
        }
    }

    getChords(level) {

        return sp_chords.map(c => {
            if (c.level === level && !c.startNote) {
                console.log("1 return");
                return <Piano
                    title={c.name}
                    startOctave={c.octStart}
                    endOctave={c.octEnd}
                    selectedNotesLeft={c.leftHand}
                    selectedNotesRight={c.rightHand}
                    rootNote={c.root}
                    displayNote={this.state.displayNote}
                />
            } else if (c.level === level && c.startNote) {
                console.log("2 return")
                return <Piano
                    title={c.name}
                    startOctave={c.octStart}
                    endOctave={c.octEnd}
                    selectedNotesLeft={c.leftHand}
                    selectedNotesRight={c.rightHand}
                    firstNote={c.startNote}
                    rootNote={c.root}
                    displayNote={this.state.displayNote}

                />
            }
            return null
        }
        )

    }

    render() {

        return (
            <div className="DisplaySpChords">

                <Button
                    type="hideNote"
                    buttonTxt={this.state.hideNote}
                    click={this.handleClickNote} />

                <section className="DisplaySpChords__section">
                    <h1 className="DisplaySpChords__section__title">Pop chords I</h1>
                    {this.getChords(1)}
                </section>
                <section className="DisplaySpChords__section">
                    <h1 className="DisplaySpChords__section__title">Pop chords II</h1>
                    {this.getChords(2)}
                </section>
                <section className="DisplaySpChords__section">
                    <h1 className="DisplaySpChords__section__title">Pop chords III</h1>
                    {this.getChords(3)}
                </section>
                <section className="DisplaySpChords__section">
                    <h1 className="DisplaySpChords__section__title">Blues Chords I</h1>
                    {this.getChords(4)}
                </section>
                <section className="DisplaySpChords__section">
                    <h1 className="DisplaySpChords__section__title">Jazz Chords I</h1>
                    {this.getChords(5)}
                </section>
                <section className="DisplaySpChords__section">
                    <h1 className="DisplaySpChords__section__title">Jazz Chords II</h1>
                    {this.getChords(6)}
                </section>

            </div>
        );
    }
}

export default DisplaySpChords;
