import React from 'react';
class Button extends React.Component {
    static defaultProps = {
        buttonTxt: "Click",

    }

    render() {
        const { buttonTxt, click } = this.props;


        return (
            <button className="Button" onClick={click}> {buttonTxt}</button >
        );
    }
}

export default Button;