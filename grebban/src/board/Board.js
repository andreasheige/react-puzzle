import React from 'react';
import Cell from '../cell/Cell';
import Row from '../row/Row';

export default function Board(props) {

    const board = props.collection.map( (row,i) => (
        <Row key={i}>
            {row.map((cell,j) => (
                <Cell clicked={props.clicked} key={j}>{cell}</Cell>
            ))}
        </Row>
    ));

    return(
        <div className="board" id="board">
            {board}
        </div>
    )
}