import React from 'react';
import Keynote from '../Keynote/Keynote.js'

class Octave extends React.Component {
    render() {
        return (
            <div className="Octave">
                <div className="displayNum">{this.props.octaveNum}</div>

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
            </div>
        );

    }

}


export default Octave;

