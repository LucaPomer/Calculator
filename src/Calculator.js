import React from 'react';
import Button from 'react-bootstrap/Button';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleNumChangeLeft=this.handleNumChangeLeft.bind(this);
        this.handleNumChangeRight=this.handleNumChangeRight.bind(this);
        this.state = {
            numLeft: 0,
            numRight: 0
        }

    }

    render() {
        const numLeft = this.state.numLeft;
        const numRight = this.state.numRight;
        return (
            <div>
                <NumberInput
                    numSide="l"
                    handleNumChange={this.handleNumChangeLeft}
                    numValue={numLeft}/>
                <Button variant="primary" onClick={this.addOperation}>+</Button>
                <NumberInput
                    numSide="r"
                    handleNumChange={this.handleNumChangeRight}
                    numValue={numRight}/>
            </div>

        )
    }

    handleNumChangeLeft(newNum) {
        console.log(newNum);
        this.setState({numLeft: newNum});
    }

    handleNumChangeRight(newNum) {
        this.setState({numRight: newNum});
    }

    addOperation() {
        console.log("add ");
    }
}

const numSide = {
    l: 'left',
    r: 'right'
};

class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleNumChange(event.target.value.replace(/[^0-9]/g, ''));
        //  this.setState({value: event.target.numberValue.replace(/[^0-9]/g, '')});
    }

    render() {
        const numValue = this.props.numValue;
        return (
            <input type="text" value={numValue} onChange={this.handleChange}/>
        );
    }

}


export default Calculator;