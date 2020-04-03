import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {all, create} from 'mathjs'
import Row from "react-bootstrap/Row";
import NumberInput from './NumberInput.js';
import CalcHistory from "./CalcHistory";
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
            result: 0,
            calcHistoryList: [],
        }

    }

    render() {
        const numLeft = this.state.numLeft;
        const numRight = this.state.numRight;
        return (
            <div>
                <h1>Calculator</h1>
                <Row id={"mainRow"} className="justify-content-md-center">
                    <Col xs lg="3">
                        <NumberInput
                            numSide="l"
                            handleNumChange={this.handleNumChangeLeft}
                            numValue={numLeft}/>
                        <NumberInput
                            numSide="r"
                            handleNumChange={this.handleNumChangeRight}
                            numValue={numRight}/>
                        <Row className={"buttonRow"}>
                            <Button variant="outline-dark" onClick={this.addOperation}>+</Button>
                            <Button variant="outline-dark" onClick={() => this.decreaseOperation()}>-</Button>
                            <Button variant="outline-dark" onClick={() => this.multiplyOperation()}>*</Button>
                            <Button variant="outline-dark" onClick={() => this.rootOperation()}>root</Button>
                        </Row>
                        <ListGroupItem  variant="light">Calculation : {this.state.calculationString}</ListGroupItem>
                        <ListGroupItem variant="light">Result : {this.state.result}</ListGroupItem>
                    </Col>
                    <Col xs lg="3">
                        <CalcHistory calcHistoryItems={this.state.calcHistoryList}/>
                    </Col>
                </Row>
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
        let calcHistoryItemsCopy = this.state.calcHistoryList;
        if (this.checkIfNum(numLeft) && this.checkIfNum(numRight)) {
            newResult = parseInt(numLeft) + parseInt(numRight);
            newCalculation = ` ${numLeft} + ${numRight} = ${newResult}`;
        } else {
            newCalculation = 'not posiible -> invalid input';
            newResult = " ";
        }
        if(calcHistoryItemsCopy.length>6){
            calcHistoryItemsCopy.shift();
        }
        calcHistoryItemsCopy.push(newCalculation);
        this.setState({
            calculationString: newCalculation,
            result: newResult,
            calcHistoryList: calcHistoryItemsCopy,
        });
    }

    decreaseOperation() {
        let numLeft = this.state.numLeft;
        let numRight = this.state.numRight;
        let newCalculation;
        let newResult;
        if (this.checkIfNum(numLeft) && this.checkIfNum(numRight)) {
            newResult = parseInt(numLeft) - parseInt(numRight);
            newCalculation = ` ${numLeft} - ${numRight} = ${newResult} `;
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
            newResult = parseInt(numLeft) * parseInt(numRight);
            newCalculation = ` ${numLeft} * ${numRight} = ${newResult} `;

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
                newResult = math.nthRoot(parseInt(numRight), parseInt(numLeft));
                newCalculation = ` ${numLeft}th root of ${numRight} = ${newResult}`;
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


export default Calculator;