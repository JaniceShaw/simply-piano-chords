import React from 'react';
import './NoteDisplay.scss';
import { ReactComponent as TrebleClef } from './svg/treble-clef-e.svg';
import { ReactComponent as BassClef } from './svg/bass-clef.svg';
import { ReactComponent as Note } from './svg/note.svg';
import { ReactComponent as Sharp } from './svg/sharp.svg';
import { ReactComponent as Flat } from './svg/flat.svg';
import { ReactComponent as Ledger } from './svg/ledger.svg';

class NoteDisplay extends React.Component {

    static defaultProps = {
        selectedNotesLeft: [],
        selectedNotesRight: [],
        RHand: false,
        LHand: false
    }

    render() {

        const { selectedNotesLeft, selectedNotesRight, selNote, selNoteR, RHand, LHand } = this.props;
        // console.log(RHand);

        //make the sharps and flats show up properly
        let selNoteFlatSharp;
        //checks that selNote exist then checks if ends in s / f (sharp or flat)

        //console.log(selNoteR[0]);
        //Sharp
        if (selNoteR[0] && selNoteR[0][0].endsWith("s")) {
            selNoteFlatSharp = selNoteR[0][0][0] + "\u266F";
            // console.log(selNoteR[0]);
        }
        //Flat
        if (selNoteR[0] && selNoteR[0][0].endsWith("f")) {
            selNoteFlatSharp = selNoteR[0][0][0] + "\u266D";
            // console.log(selNoteFlatSharp);
        }

        return (
            <div className="NoteDisplay">
                {/* adds class showy that make the clef enlarge */}
                <div className={'NoteDisplay__bassClef' + (LHand ? ' showy' : '')}>
                    {/* Displays the selected notes name */}
                    <div className="NoteDisplay__sel-note">{LHand && (selNote[0] && selNote[0][0].length > 1 ? selNoteFlatSharp : selNote[0])}</div>
                    <BassClef />
                    <div className="chord">
                        {selectedNotesLeft.map((n, i) =>
                            <div key={i} className={'note note_' + n[1] + n[0] + ((selNote[0] + selNote[1]) === (n[1] + n[0]) ? ' selNote' : '')}>
                                <Note />
                            </div>)
                        }
                    </div>
                </div>

                {/* adds class showy that make the clef enlarge */}
                <div className={'NoteDisplay__trebleClef' + (RHand ? ' showy' : '')}>
                    {/* Displays the selected notes name */}
                    <div className="NoteDisplay__sel-note">{
                        RHand &&
                        (selNoteR[0] && selNoteR[0][0].length > 1 ? selNoteFlatSharp : selNoteR[0])
                    }</div>
                    <TrebleClef />
                    <div className="chord">
                        {selectedNotesRight.map((n, i) =>
                            <div
                                key={i}
                                className={'note note_' + n[1] + n[0] + ((selNoteR[0] + selNoteR[1]) === (n[1] + n[0]) ? ' selNote' : '')}
                            >
                                {((n[1] === "C" && n[0] === 4) || (n[1] === "Cs" && n[0] === 4)) && <i><Ledger /></i>}
                                {((n[1] === "B" && n[0] === 3) || (n[1] === "Bf" && n[0] === 3)) && <i><Ledger /></i>}
                                {((n[1] === "G" && n[0] === 3) || (n[1] === "Gf" && n[0] === 3)) && <i><Ledger /></i>}
                                {n[1].endsWith("s") && <i><Sharp /></i>}
                                {n[1].endsWith("f") && <i><Flat /></i>}
                                <Note />

                            </div>)
                        }
                    </div>
                </div>

            </div >
        );
    }

}

export default NoteDisplay;
