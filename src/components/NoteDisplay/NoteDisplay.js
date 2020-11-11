import React from 'react';
import './NoteDisplay.scss';
import { ReactComponent as TrebleClef } from './svg/treble-clef-e.svg';
import { ReactComponent as BassClef } from './svg/bass-clef.svg';
import { ReactComponent as Note } from './svg/note.svg';

// function janTest(tina) {

//     var flag = document.getElementsByClassName("note_" + tina);
//     console.log(flag);
//     // flag.classList.add("boo");
// }
// janTest("C4");

//selNote == props.selNot (["C",4]) -- how do i use this to highlight the note??

class NoteDisplay extends React.Component {

    static defaultProps = {
        selectedNotesLeft: [],
        selectedNotesRight: []
    }

    render() {

        const { selectedNotesLeft, selectedNotesRight, selNote } = this.props;

        return (
            <div className="NoteDisplay">

                <div className="NoteDisplay__bassClef">
                    <BassClef />
                    <div className="chord">
                        {selectedNotesLeft.map((n, i) => <div key={i} className={'note note_' + n[1] + n[0]}><Note /></div>)
                        }
                    </div>
                </div>

                <div className="NoteDisplay__trebleClef">
                    <div className="NoteDisplay__sel-note">{selNote[0]}</div>
                    <TrebleClef />
                    <div className="chord">
                        {selectedNotesRight.map((n, i) => <div key={i} className={'note note_' + n[1] + n[0]}><Note /></div>)
                        }
                    </div>
                </div>

            </div>
        );
    }

}

export default NoteDisplay;
