import React from 'react';
import './Keynote.scss';

class Keynote extends React.Component {
    render() {

        let noteType = "white";
        const { octaveNum, selectedNotesLeft, selectedNotesRight } = this.props;

        const noteName = this.props.note;
        const noteLabel = this.props.label;

        if (noteName.length > 1) {
            noteType = "black";
        } else {
            noteType = "white"
        };

        var leftSel = "";
        selectedNotesLeft.map(note => {

            if (note[0] === octaveNum && note[1] === noteName) {
                leftSel = `finger lf${note[2]}`;
            }
            return leftSel
        });

        var rightSel = "";
        selectedNotesRight.map(note => {

            if (note[0] === octaveNum && note[1] === noteName) {
                rightSel = `finger rf${note[2]}`;
            }
            return rightSel
        });

        let classes = `Keynote ${noteName} ${leftSel} ${rightSel} ${this.props.octaveNum} ${noteType}`;

        return (

            <li className={classes}>
                <div className="Keynote-label">{noteLabel}</div>
            </li>

        );
    }
}

export default Keynote;
