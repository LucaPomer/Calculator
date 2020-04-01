import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { create, all } from 'mathjs'



class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleNumChangeLeft = this.handleNumChangeLeft.bind(this);
        this.handleNumChangeRight = this.handleNumChangeRight.bind(this);
        this.addOperation = this.addOperation.bind(this);
        this.state = {
            numLeft: 0,
            numRight: 0,
            calculationString: '',
            result: 0
        }

    }

    render() {
        const numLeft = this.state.numLeft;
        const numRight = this.state.numRight;
        return (
            <div>
                <div className={"input area"}>
                    <NumberInput
                        numSide="l"
                        handleNumChange={this.handleNumChangeLeft}
                        numValue={numLeft}/>
                    <Button variant="primary" onClick={this.addOperation}>+</Button>
                    <Button variant="primary" onClick={()=>this.decreaseOperation()}>-</Button>
                    <Button variant="primary" onClick={()=>this.multiplyOperation()}>*</Button>
                    <Button variant="primary" onClick={()=>this.rootOperation()}>root</Button>
                    <NumberInput
                        numSide="r"
                        handleNumChange={this.handleNumChangeRight}
                        numValue={numRight}/>
                </div>
                <div className={"outputArea"}>
                    <ListGroupItem variant="info">Callculation : {this.state.calculationString}</ListGroupItem>
                    <ListGroupItem variant="info">Result : {this.state.result}</ListGroupItem>
                </div>
            </div>

        )
    }

    handleNumChangeLeft(newNum) {
        this.setState({numLeft: newNum});
    }

    handleNumChangeRight(newNum) {
        this.setState({numRight: newNum});
    }

    addOperation() {
        let newCalculation = ` ${this.state.numLeft} + ${this.state.numRight} `;

        let newResult = parseInt(this.state.numLeft) + parseInt(this.state.numRight);
        this.setState({
            calculationString: newCalculation,
            result: newResult
        });
    }
    decreaseOperation() {
        let newCalculation = ` ${this.state.numLeft} - ${this.state.numRight} `;

        let newResult = parseInt(this.state.numLeft) - parseInt(this.state.numRight);
        this.setState({
            calculationString: newCalculation,
            result: newResult
        });
    }
    multiplyOperation() {
        let newCalculation = ` ${this.state.numLeft} * ${this.state.numRight} `;

        let newResult = parseInt(this.state.numLeft) * parseInt(this.state.numRight);
        this.setState({
            calculationString: newCalculation,
            result: newResult
        });
    }

    rootOperation() {
        const config = { };
        const math = create(all, config);
        let newCalculation = ` ${this.state.numLeft} th root of ${this.state.numRight} `;

        let newResult = math.nthRoot( parseInt(this.state.numRight),parseInt(this.state.numLeft));
        this.setState({
            calculationString: newCalculation,
            result: newResult
        });
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