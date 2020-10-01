import React from 'react';
import Piano from './components/Piano/Piano.js';
import Button from './components/Button/Button.js';

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
                <Piano
                    title="C"
                    displayOctave={displayOctave}
                    displayNote={displayNote}

                    startOctave={3}
                    endOctave={4}

                    selectedNotesLeft={[[3, "C", 5]]}
                    selectedNotesRight={[[4, "C", 1], [4, "E", 3], [4, "G", 5]]}
                />

                <Piano
                    title="G"
                    displayOctave={displayOctave}
                    displayNote={displayNote}

                    startOctave={3}
                    endOctave={4}

                    selectedNotesLeft={[[3, "G", 1]]}
                    selectedNotesRight={[[3, "B", 1], [4, "D", 2], [4, "G", 5]]}
                />

                <Piano
                    title="D"
                    displayOctave={displayOctave}
                    displayNote={displayNote}

                    startOctave={3}
                    endOctave={4}

                    selectedNotesLeft={[[3, "D"]]}
                    selectedNotesRight={[[4, "D", 0], [4, "Fs", 0], [4, "A", 0]]}
                />

                <Button type="hideOctave" buttonTxt="hide Octave" click={this.handleClickOct} />
                <Button type="hideNote" buttonTxt="hide Note name" click={this.handleClickNote} />
            </div>
        );
    }
}

export default Display;