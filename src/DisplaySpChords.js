import React from 'react';
import Piano from './components/Piano/Piano.js';
import Button from './components/Button/Button.js';

import './DisplaySpChords.scss';

const sp_chords = [
    // [octave, note, finger]
    {
        level: 1,
        name: "C",
        type: "Root",
        root: "C",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "C", 5]],
        rightHand: [[4, "C", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        level: 1,
        name: "G",
        type: "inversion - (reverse)",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "G", 1]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "G", 5]]
    },

    {
        level: 1,
        name: "D",
        type: "Root",
        root: "D",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "D", 4]],
        rightHand: [[4, "D", 1], [4, "Fs", 3], [4, "A", 5]]
    },
    {
        level: 1,
        name: "Em",
        type: "Root",
        root: "E",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "E", 3]],
        rightHand: [[4, "E", 1], [4, "G", 3], [4, "B", 5]]
    },
    {
        level: 1,
        name: "Am",
        type: "inversion - (reverse)",
        root: "A",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "A", 1]],
        rightHand: [[4, "C", 1], [4, "E", 2], [4, "A", 5]]
    },


    {
        level: 2,
        name: "F",
        type: "Second inversion - (middle)",
        root: "F",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "F", 2]],
        rightHand: [[4, "C", 1], [4, "F", 3], [4, "A", 5]]
    },
    {
        level: 2,
        name: "Dm",
        type: "Root",
        root: "D",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "D", 4]],
        rightHand: [[4, "D", 1], [4, "F", 3], [4, "A", 5]]
    },
    {
        level: 3,
        name: "E",
        type: "Root",
        root: "E",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "E", 3]],
        rightHand: [[4, "E", 1], [4, "Gs", 3], [4, "B", 5]]
    },

    {
        level: 3,
        name: "A",
        type: "inversion - (reverse)",
        root: "A",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "A", 1]],
        rightHand: [[4, "Cs", 1], [4, "E", 2], [4, "A", 5]]
    },
    {
        level: 3,
        name: "Bm",
        type: "Root",
        root: "B",
        octStart: 2,
        octEnd: 4,
        startNote: "B",
        endNote: "A",
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
        rightHand: [[3, "Bf", 1], [4, "E", 3], [4, "G", 5]]
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
        type: "seventh",
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
        rightHand: [[4, "C", 1], [4, "Ef", 2], [4, "A", 5]]
    },
    {
        level: 6,
        name: "Bdim",
        type: "triad",
        root: "B",
        octStart: 2,
        octEnd: 4,
        startNote: "B",
        endNote: "A",
        leftHand: [[2, "B", 5]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "F", 4]]
    },
    {
        level: 6,
        name: "GMaj7",
        type: "seventh",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "G", 1]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "Fs", 4]]
    },
    {
        level: 6,
        name: "FMaj7",
        type: "seventh",
        root: "F",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "F", 2]],
        rightHand: [[4, "C", 1], [4, "E", 2], [4, "A", 5]]
    },
    {
        level: 6,
        name: "Em7",
        type: "seventh",
        root: "E",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "E", 3]],
        rightHand: [[4, "D", 1], [4, "G", 3], [4, "B", 5]]
    },
    {
        level: 7,
        name: "G/C",
        type: "triad - inversion - reverse - Slash Chord",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "C", 5]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "G", 5]]
    },
    {
        level: 8,
        name: "C (root)",
        type: "Root Position",
        root: "C",
        octStart: 4,
        octEnd: 5,
        // startNote: "B",
        leftHand: [[3, "C", 5]],
        rightHand: [[4, "C", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        level: 8,
        name: "C (1st)",
        type: "First Inversion (reverse)",
        root: "C",
        octStart: 4,
        octEnd: 5,
        // startNote: "B",
        //  endNote: "C",
        leftHand: [[3, "C", 5]],
        rightHand: [[4, "E", 1], [4, "G", 2], [5, "C", 5]]
    },
    {
        level: 8,
        name: "C (2nd)",
        type: "Second Inversion (middle)",
        root: "C",
        octStart: 4,
        octEnd: 5,
        // startNote: "B",
        //  endNote: "C",
        leftHand: [[3, "C", 5]],
        rightHand: [[4, "G", 1], [5, "C", 3], [5, "E", 5]]
    },
    {
        level: 8,
        name: "C (root) octave up",
        type: "Root Position",
        root: "C",
        octStart: 4,
        octEnd: 5,
        // startNote: "B",
        leftHand: [[3, "C", 5]],
        rightHand: [[5, "C", 1], [5, "E", 3], [5, "G", 5]]
    },

    {
        level: 8,
        name: "G (root)",
        type: "Root position",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[2, "G", 1]],
        rightHand: [[3, "G", 1], [3, "B", 3], [4, "D", 5]]
    },
    {
        level: 8,
        name: "G (1st)",
        type: "First Inversion - (reverse)",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[2, "G", 1]],
        rightHand: [[3, "B", 1], [4, "D", 2], [4, "G", 5]]
    },
    {
        level: 8,
        name: "G (2nd)",
        type: "Second Inversion - (middle)",
        root: "G",
        octStart: 3,
        octEnd: 4,
        leftHand: [[2, "G", 1]],
        rightHand: [[4, "D", 1], [4, "G", 3], [4, "B", 5]]
    },

    {
        level: 8,
        name: "G (root) octave up",
        type: "Root position",
        root: "G",
        octStart: 4,
        octEnd: 5,
        leftHand: [[2, "G", 1]],
        rightHand: [[4, "G", 1], [4, "B", 3], [5, "D", 5]]
    },
    
];



class DisplaySpChords extends React.Component {
    static defaultProps = {
        buttonTxt: "Click",
    }

    constructor(props) {
        super(props);
        this.state = {
            noteDisplayShow: true, // for toggling the notation area "NoteDisplay" component
            displayNote: true, //show note names on keys
            hideNote: "Hide note names", // button text hide note names
            hideNotation: "Hide Notations"
        };

        this.handleClickDisplayNote = this.handleClickDisplayNote.bind(this);
        this.handleClickNote = this.handleClickNote.bind(this);
        this.getChords = this.getChords.bind(this);

    }

    handleClickDisplayNote() {
        if (this.state.noteDisplayShow === true) {
            this.setState({ noteDisplayShow: false, hideNotation: "Show notations" });
        } else {
            this.setState({ noteDisplayShow: true, hideNotation: "Hide notations" });
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

        return sp_chords.map((c, i) => {
            if (c.level === level && !c.startNote) {
                return <Piano
                    key={i}
                    title={c.name}
                    startOctave={c.octStart}
                    endOctave={c.octEnd}
                    selectedNotesLeft={c.leftHand}
                    selectedNotesRight={c.rightHand}
                    lastNote={c.endNote}
                    rootNote={c.root}
                    displayNote={this.state.displayNote}
                    noteDisplayShow={this.state.noteDisplayShow}
                />
            } else if (c.level === level && c.startNote) {
                return <Piano
                    key={i}
                    title={c.name}
                    startOctave={c.octStart}
                    endOctave={c.octEnd}
                    selectedNotesLeft={c.leftHand}
                    selectedNotesRight={c.rightHand}
                    firstNote={c.startNote}
                    lastNote={c.endNote}
                    rootNote={c.root}
                    displayNote={this.state.displayNote}
                    noteDisplayShow={this.state.noteDisplayShow}
                />
            }
            return null
        }
        )

    }

    render() {

        return (
            <div className="DisplaySpChords">
                <div className="DisplaySpChords__hands"><img src="./hands.png" alt="left and right hands with finger numbers" /></div>

                <div className="DisplaySpChords__options">

                    <Button
                        type="hideNote"
                        buttonTxt={this.state.hideNote}
                        click={this.handleClickNote} />

                    <Button
                        type="hideNote"
                        buttonTxt={this.state.hideNotation}
                        click={this.handleClickDisplayNote} />
                </div>

                <section className="DisplaySpChords__section">
                    <h2 className="DisplaySpChords__section__title">Pop chords I</h2>
                    {this.getChords(1)}
                </section>
                <section className="DisplaySpChords__section">
                    <h2 className="DisplaySpChords__section__title">Pop chords II</h2>
                    {this.getChords(2)}
                </section>
                <section className="DisplaySpChords__section">
                    <h2 className="DisplaySpChords__section__title">Pop chords III</h2>
                    {this.getChords(3)}
                </section>
                <section className="DisplaySpChords__section">
                    <h2 className="DisplaySpChords__section__title">Blues Chords I</h2>
                    {this.getChords(4)}
                </section>
                <section className="DisplaySpChords__section">
                    <h2 className="DisplaySpChords__section__title">Jazz Chords I</h2>
                    {this.getChords(5)}
                </section>
                <section className="DisplaySpChords__section">
                    <h2 className="DisplaySpChords__section__title">Jazz Chords II</h2>
                    {this.getChords(6)}
                </section>
                <section className="DisplaySpChords__section">
                    <h2 className="DisplaySpChords__section__title">Slash Chords</h2>
                    {this.getChords(7)}
                </section>
                <section className="DisplaySpChords__section DisplaySpChords__section--noBass">
                    <h2 className="DisplaySpChords__section__title">Chord Inversions</h2>
                    {this.getChords(8)}
                </section>

            </div>
        );
    }
}

export default DisplaySpChords;
