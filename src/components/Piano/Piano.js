import React from 'react';
import './Piano.scss';
import Octave from './Octave/Octave.js'

//need to make look to display the chosen number of octaves


class Piano extends React.Component {
    static defaultProps = {
        start: 4,
        end: 4
    }
    render() {

        const start = this.props.start;
        let end = this.props.end;

        if (end < start) {
            end = start;
        }

        let n = start;
        let oct = [];

        while (n <= end) {
            oct.push(n);
            n = n + 1;
        }

        console.log(start, end, oct);

        return (
            <ul className="Piano">
                {oct.map(i =>

                    <Octave octaveNum={i} />)}



            </ul>
        );

    }

}


export default Piano;

