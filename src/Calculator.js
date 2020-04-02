import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {all, create} from 'mathjs'
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";


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
                <h1>Calculator</h1>
                <ListGroup className={"inputArea"}>
                        <Row>
                            <NumberInput
                                numSide="l"
                                handleNumChange={this.handleNumChangeLeft}
                                numValue={numLeft}/>
                        </Row>
                        <Row>
                            <NumberInput
                                numSide="r"
                                handleNumChange={this.handleNumChangeRight}
                                numValue={numRight}/>
                        </Row>
                        <Row className={"buttonRow"}>
                            <Button variant="outline-dark" onClick={this.addOperation}>+</Button>
                            <Button variant="outline-dark" onClick={() => this.decreaseOperation()}>-</Button>
                            <Button variant="outline-dark" onClick={() => this.multiplyOperation()}>*</Button>
                            <Button variant="outline-dark" onClick={() => this.rootOperation()}>root</Button>
                        </Row>
                </ListGroup>
                <div className={"outputArea"}>
                    <ListGroupItem variant="light">Calculation : {this.state.calculationString}</ListGroupItem>
                    <ListGroupItem variant="light">Result : {this.state.result}</ListGroupItem>
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

    checkIfNum(input) {
        if (isNaN(input)) {
            return false
        } else {
            return true;
        }
    }

    addOperation() {
        let numLeft = this.state.numLeft;
        let numRight = this.state.numRight;
        let newCalculation;
        let newResult;
        if (this.checkIfNum(numLeft) && this.checkIfNum(numRight)) {
            newCalculation = ` ${numLeft} + ${numRight} `;
            newResult = parseInt(numLeft) + parseInt(numRight);
        } else {
            newCalculation = 'not posiible -> invalid input';
            newResult = " ";
        }

        this.setState({
            calculationString: newCalculation,
            result: newResult
        });
    }

    decreaseOperation() {
        let numLeft = this.state.numLeft;
        let numRight = this.state.numRight;
        let newCalculation;
        let newResult;
        if (this.checkIfNum(numLeft) && this.checkIfNum(numRight)) {
            newCalculation = ` ${this.state.numLeft} - ${this.state.numRight} `;
            newResult = parseInt(this.state.numLeft) - parseInt(this.state.numRight);
        } else {
            newCalculation = 'not posiible -> invalid input';
            newResult = " ";
        }
        this.setState({
            calculationString: newCalculation,
            result: newResult
        });
    }

    multiplyOperation() {
        let numLeft = this.state.numLeft;
        let numRight = this.state.numRight;
        let newCalculation;
        let newResult;
        if (this.checkIfNum(numLeft) && this.checkIfNum(numRight)) {
            newCalculation = ` ${this.state.numLeft} * ${this.state.numRight} `;
            newResult = parseInt(this.state.numLeft) * parseInt(this.state.numRight);
        } else {
            newCalculation = 'not posiible -> invalid input';
            newResult = " ";
        }
        this.setState({
            calculationString: newCalculation,
            result: newResult
        });
    }


    rootOperation() {
        let numLeft = this.state.numLeft;
        let numRight = this.state.numRight;
        let newCalculation;
        let newResult;
        if (this.checkIfNum(numLeft) && this.checkIfNum(numRight)) {
            if (numLeft <= 0) {
                newCalculation = ` ${numLeft}th root of ${numRight}  not possible -> \n root must be non zero`;
                newResult = 'not a number';
            } else {
                const config = {};
                const math = create(all, config);
                newCalculation = ` ${numLeft}th root of ${numRight} `;
                newResult = math.nthRoot(parseInt(numRight), parseInt(numLeft));
            }
        } else {
            newCalculation = 'not possible -> invalid input';
            newResult = " ";
        }

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


export default Calculator;