import React from 'react';
import './Keynote.scss';

class Keynote extends React.Component {
    render() {

        // let noteType = "white";
        let noteType = "";
        const { octaveNum, selectedNotesLeft, selectedNotesRight, rootNote } = this.props;

        const noteName = this.props.note;
        const noteLabel = this.props.label;


        if (noteName.length > 1) {
            noteType = "black";
            // } else {
            //     noteType = "white"
        };

        let leftSel = "";
        selectedNotesLeft.map(note => {

            if (note[0] === octaveNum && note[1] === noteName) {
                leftSel = `finger lf${note[2]}`;

                if (noteName === rootNote) {
                    leftSel = `finger root lf${note[2]}`;
                }
            }
            return leftSel
        });

        let rightSel = "";
        selectedNotesRight.map(note => {

            if (note[0] === octaveNum && note[1] === noteName) {
                rightSel = `finger rf${note[2]}`;
                if (noteName === rootNote) {
                    rightSel = `finger root rf${note[2]}`;
                }
            }
            return rightSel
        });

        let classes = `Keynote ${noteName} ${leftSel} ${rightSel} ${this.props.octaveNum} ${noteType}`;

        return (

            <li className={classes}>
                <div className="Keynote__label">{noteLabel}</div>
            </li>

        );
    }
}

export default Keynote;
