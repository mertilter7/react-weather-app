import React from 'react'
import './weather.css'

function Weatherresult({date,mintemp,maxtemp,condition,icon}) {
    return (
        <div className="result">
            <h2>{date}</h2>
            <ul>
                <li> <img src={icon} alt=""/> </li>
                <li>{condition}</li>
                <li>{mintemp} / {maxtemp}</li>
            </ul>
        </div>
    )
}

export default Weatherresult
