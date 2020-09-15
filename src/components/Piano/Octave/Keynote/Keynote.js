import React from 'react';
import './Keynote.scss';

const theFingers = ["lf5", "lf4", "lf3", "lf2", "lf1", "rf1", "rf2", "rf3", "rf4", "rf5"];

class Keynote extends React.Component {
    render() {

        let noteType = "white";
        let finger = "";

        const { octaveNum, fingering } = this.props;

        const noteName = this.props.note;
        const noteLabel = this.props.label;

        if (noteName.length > 1) {
            noteType = "black";
        } else {
            noteType = "white"
        };

        fingering.map((f, index) => {
            if (f[0] === octaveNum && f[1] === noteName) {

                finger = `finger ${theFingers[index]} `
            }
            return finger;
        });

        let classes = `Keynote ${finger} ${noteName} ${this.props.octaveNum} ${noteType}`;

        return (

            <li className={classes}>
                <div className="Keynote-label">{noteLabel}</div>
            </li>

        );
    }
}

export default Keynote;
