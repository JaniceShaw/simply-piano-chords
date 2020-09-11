import React from 'react';
import './Keynote.scss';

class Keynote extends React.Component {
    render() {

        let noteType = "white";
        let noteName = this.props.note;
        let noteLabel = this.props.label;
        let finger = "";

        if (this.props.note.length > 1) {
            noteType = "black";
        } else {
            noteType = "white"
        };

        if (this.props.lf1 && this.props.lf1[1] === noteName) {

            finger = "finger lf1 "
        }

        if (this.props.lf2 && this.props.lf2[1] === noteName) {

            finger += " finger lf2 "
        }

        if (this.props.lf3 && this.props.lf3[1] === noteName) {

            finger += " finger lf3 "
        }

        if (this.props.lf4 && this.props.lf4[1] === noteName) {

            finger += " finger lf4 "
        }

        if (this.props.lf5 && this.props.lf5[1] === noteName) {

            finger += " finger lf5 "
        }

        if (this.props.rf5 && this.props.rf5[1] === noteName) {

            finger += " finger rf5 "
        }


        let classes =
            "Keynote " +
            finger +
            noteName +
            this.props.octaveNum +
            " " +
            noteType
            ;
        return (

            <li className={classes}>
                <div className="Keynote-label">{noteLabel}</div>
            </li>

        );
    }
}


export default Keynote;

