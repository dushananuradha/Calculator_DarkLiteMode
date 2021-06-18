import React from 'react'
import './App.css';


function Number({number, onClick}) {
    return (
        <div className="data-number" onClick={() => onClick(number)}>
        {number}
        </div>
    )
}

export default Number;
