import React from 'react';

class Keynote extends React.Component {
    render() {
        let noteType = "white";
        let noteName = this.props.note;

        if (this.props.black === true) {
            noteType = "black";
            noteName += "#";
        } else {
            noteType = "white"
        };

        let classes =
            "keynote" +
            " " +
            noteName +
            this.props.octaveNum +
            " " +
            noteType
            ;
        return (

            <li className={classes}>
                <div className="label">{noteName} </div>

            </li>

        );
    }
}



export default Keynote;

