import React from "react";

class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleNumChange(event.target.value);
    }

    render() {
        const numValue = this.props.numValue;
        return (
            <input placeholder={"Write a number"} type="text" value={numValue} onChange={this.handleChange}/>
        );
    }

}

export default NumberInput;