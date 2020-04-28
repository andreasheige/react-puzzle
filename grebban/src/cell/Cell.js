import React from 'react';

export default function Cell(props) {
    
    return (
        <div style={{'background' : props.children == 0 ? 'white' : ''}} onClick={props.clicked} className="cell" id={props.children}>
            {props.children != 0 ? props.children : 
            <span style={{'opacity' : '0'}}>0</span>
        }
        </div>
    )
}