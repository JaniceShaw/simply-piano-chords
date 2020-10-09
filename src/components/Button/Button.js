import React from 'react';
import './Button.scss';

class Button extends React.Component {
    static defaultProps = {
        buttonTxt: "Click",
        type: "default"

    }

    render() {
        const { buttonTxt, click, type } = this.props;


        return (
            <button className={`Button Button--${type}`} onClick={click}> {buttonTxt}</button >
        );
    }
}

export default Button;