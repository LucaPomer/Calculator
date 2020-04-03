import React from "react";

class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleNumChange(event.target.value);
        //  this.setState({value: event.target.numberValue.replace(/[^0-9]/g, '')});
    }

    render() {
        const numValue = this.props.numValue;
        return (
            <input type="text" value={numValue} onChange={this.handleChange}/>
        );
    }

}

export default NumberInput;