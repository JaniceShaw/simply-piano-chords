import React from 'react';
import './Keynote.scss';

class Keynote extends React.Component {
    render() {
        const sharp = '\u266F';
        const flat = '\u266D';
        let fl = "";
        let noteType = "white";
        let noteName = this.props.note;

        if (this.props.black === true) {
            noteType = "black";
            noteName = noteName + sharp;
            // fl = Omega;
        } else {
            noteType = "white"
        };

        let classes =
            "Keynote" +
            " " +
            noteName +
            this.props.octaveNum +
            " " +
            noteType
            ;
        return (

            <li className={classes}>
                <div className="Keynote-label">{noteName}</div>
            </li>

        );
    }
}



export default Keynote;

