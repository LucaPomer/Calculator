import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class CalcHistory extends React.Component {
    render() {
        const historyItems = this.props.calcHistoryItems;
        let historyItemsList = [];
        let index = 0;
        for (let key of historyItems){
            historyItemsList.push(<ListGroupItem key={index}>{key}
            </ListGroupItem>);
            index++;
        }
        return (
            <ListGroup>
                {historyItemsList}
            </ListGroup>
        );
    }
}

export default CalcHistory;