import React from 'react'
import './App.css';

function Operator({operator, onClick}) {
    return (
        <div className="data-operation" 
        onClick={() => onClick(operator)}>{operator}
        </div>
    )
}

export default Operator;
