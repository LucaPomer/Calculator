import React from 'react';

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <NumberInput/>
            </div>

        )
    }
}

class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("new value " + event.target.value)
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            );
    }

}


export default Calculator;