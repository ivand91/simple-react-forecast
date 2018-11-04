import React from 'react';

import './Now.css';

const now = ( props ) => {

    return (

        <table className="current">
            <tbody>
                <tr>
                    <td><img src={props.icon} alt="weather icon"/></td>
                    <td className="name">{props.name}</td>
                </tr>
                <tr>
                    <td>{props.weather}</td>
                    <td rowSpan="2" className="text-weather">Current<br/>Weather</td>
                </tr>
                <tr>
                    <td>{props.temp} &#x2103;</td>
                </tr>
            </tbody>
        </table>
    )
};

export default now;