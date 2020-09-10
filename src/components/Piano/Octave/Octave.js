import React from 'react';
import './Octave.scss';
import Keynote from './Keynote/Keynote.js'

// need to make a start note variable to that it is possible to display not a complete octave

//check start note and display from there
//check end note and end there
//make an array with the require notes
//map array to display needed notes

class Octave extends React.Component {
    render() {
        let allNotes = [["C", false], ["C", true], ["D", false], ["D", true], ["E", false], ["F", false], ["F", true], ["G", false], ["G", true]];
        const n1 = this.props.n1;

        if (n1 !== "C") {

        }

        return (
            <div className="Octave">
                <Keynote note="C" octaveNum={this.props.octaveNum} />
                <Keynote note="C" octaveNum={this.props.octaveNum} black />
                <Keynote note="D" octaveNum={this.props.octaveNum} />
                <Keynote note="D" octaveNum={this.props.octaveNum} black />
                <Keynote note="E" octaveNum={this.props.octaveNum} />
                <Keynote note="F" octaveNum={this.props.octaveNum} />
                <Keynote note="F" octaveNum={this.props.octaveNum} black />
                <Keynote note="G" octaveNum={this.props.octaveNum} />
                <Keynote note="G" octaveNum={this.props.octaveNum} black />
                <Keynote note="A" octaveNum={this.props.octaveNum} />
                <Keynote note="A" octaveNum={this.props.octaveNum} black />
                <Keynote note="B" octaveNum={this.props.octaveNum} />

                <div className="Octave-displayNum">{this.props.octaveNum}</div>
            </div>
        );
    }
}
export default Octave;

