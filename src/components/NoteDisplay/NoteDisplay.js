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

class NoteDisplay extends React.Component {

    static defaultProps = {
        selectedNotesLeft: [],
        selectedNotesRight: []
    }

    render() {

        return (
            <div className="NoteDisplay">

                <div className="NoteDisplay__bassClef">
                    <BassClef />
                    <div className="chord">
                        {this.props.selectedNotesLeft.map((n, i) => <div key={i} className={'note note_' + n[1] + n[0]}><Note /></div>)
                        }
                    </div>
                </div>

                <div className="NoteDisplay__trebleClef">
                    <TrebleClef />
                    <div className="chord">
                        {this.props.selectedNotesRight.map((n, i) => <div key={i} className={'note note_' + n[1] + n[0]}><Note /></div>)
                        }
                    </div>
                </div>

            </div>
        );
    }

}

export default NoteDisplay;
