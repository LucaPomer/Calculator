import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroupItem from "react-bootstrap/ListGroupItem";
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
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/v4-shims.css"/>
                        <h1>Calculator</h1>
                        <Row id={"mainRow"} className="justify-content-md-center">
                            <Col className={"calcArea"} xs lg="3">
                                <h2>Input</h2>
                                <NumberInput
                                    numSide="l"
                                    handleNumChange={this.handleNumChangeLeft}
                                    numValue={numLeft}/>
                                <NumberInput
                                    numSide="r"
                                    handleNumChange={this.handleNumChangeRight}
                                    numValue={numRight}/>
                                <Row className={"buttonRow"}>
                                    <Button variant="outline-dark" onClick={this.addOperation}><i
                                        className="fas fa-plus"/></Button>
                                    <Button variant="outline-dark" onClick={() => this.decreaseOperation()}><i
                                        className="fas fa-minus"/></Button>
                                    <Button variant="outline-dark" onClick={() => this.multiplyOperation()}><i
                                        className="fa fa-close"/></Button>
                                    <Button variant="outline-dark" onClick={() => this.rootOperation()}><i
                                        className="fa fa-square-root-alt"/></Button>
                                </Row>
                                <ListGroupItem variant="light">Calculation
                                    : {this.state.calculationString}</ListGroupItem>
                                <ListGroupItem variant="light">Result : {this.state.result}</ListGroupItem>
                            </Col>
                            <Col className={"historyArea"} xs lg="3">
                                <h2>History</h2>
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

        calcHistoryItemsCopy.push(newCalculation);
        if (calcHistoryItemsCopy.length > 6) {
        calcHistoryItemsCopy.shift();
    }

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
        let calcHistoryItemsCopy = this.state.calcHistoryList;
        if (this.checkIfNum(numLeft) && this.checkIfNum(numRight)) {
        newResult = parseInt(numLeft) - parseInt(numRight);
        newCalculation = ` ${numLeft} - ${numRight} = ${newResult} `;
    } else {
        newCalculation = 'not posiible -> invalid input';
        newResult = " ";
    }
        calcHistoryItemsCopy.push(newCalculation);
        if (calcHistoryItemsCopy.length > 6) {
        calcHistoryItemsCopy.shift();
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
        let calcHistoryItemsCopy = this.state.calcHistoryList;
        if (this.checkIfNum(numLeft) && this.checkIfNum(numRight)) {
        newResult = parseInt(numLeft) * parseInt(numRight);
        newCalculation = ` ${numLeft} * ${numRight} = ${newResult} `;

    } else {
        newCalculation = 'not posiible -> invalid input';
        newResult = " ";
    }
        calcHistoryItemsCopy.push(newCalculation);
        if (calcHistoryItemsCopy.length > 6) {
        calcHistoryItemsCopy.shift();
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
        let calcHistoryItemsCopy = this.state.calcHistoryList;
        if (this.checkIfNum(numLeft) && this.checkIfNum(numRight)) {
        if (numRight <= 0) {
        newCalculation = ` ${numLeft} root ${numRight} not possible `;
        newResult = 'root must be non zero';
    } else {
        newResult = Math.sqrt(parseInt(numRight));
        newResult*=parseInt(numLeft);
        newCalculation = ` ${numLeft} root ${numRight} = ${newResult}`;
    }
    } else {
        newCalculation = 'not possible -> invalid input';
        newResult = " ";
    }
        calcHistoryItemsCopy.push(newCalculation);
        if (calcHistoryItemsCopy.length > 6) {
        calcHistoryItemsCopy.shift();
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