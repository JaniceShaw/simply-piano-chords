import React from 'react';
import './Keynote.scss';

class Keynote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handelHighlight = this.handelHighlight.bind(this);
    }

    handelHighlight() {
        this.props.highlight([this.props.note, this.props.octaveNum], true);
    }

    render() {

        // let noteType = "white";
        let noteType = "";
        const { octaveNum, selectedNotesLeft, selectedNotesRight, rootNote } = this.props;

        const noteName = this.props.note;
        const noteLabel = this.props.label;
       

        if (noteName.length > 1) {
            noteType = " black";
        };

        let leftSel = "";
        selectedNotesLeft.map(note => {

            if (note[0] === octaveNum && (note[1] === noteName || note[1] === noteName[0] || note[1] === noteName[1])) {

                leftSel = ` finger lf${note[2]}`;

                if (noteName === rootNote) {
                    leftSel = ` finger root lf${note[2]}`;
                }
            }
            return leftSel
        });

        let rightSel = "";

        selectedNotesRight.map(note => {

            if (note[0] === octaveNum && (note[1] === noteName || note[1] === noteName[0] || note[1] === noteName[1])) {

                rightSel = ` finger rf${note[2]}`;
                if (noteName === rootNote) {
                    rightSel = ` finger root rf${note[2]}`;
                }
            }

            return rightSel

        });

        // let classes = `Keynote ${noteName} ${leftSel} ${rightSel} ${this.props.octaveNum} ${noteType}`;
        let classes = `Keynote${leftSel}${rightSel}${noteType} ${noteName}`;

        return (

            <li className={classes} onClick={this.handelHighlight} >
                <div className="Keynote__label">{noteLabel}</div>
            </li >

        );
    }
}

export default Keynote;
