import React from 'react';
import moment from 'moment';
import './Day.css';

const day = ( props ) => {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayNumber = moment(props.dt).day();
    let dayName = days[dayNumber];

    return (

        <table className="days">
            <tbody>
                <tr>
                    <td className="day-name">{dayName}</td>
                </tr>
                <tr>
                    <td className="weather-icon">
                        <img src={props.icon} alt="weather icon"/> 
                        <span className="temp">{props.temp} &#x2103;</span>
                    </td>
                </tr>
                <tr>
                    <td className="weather">{props.weather}</td>
                </tr>
            </tbody>
        </table>
    )
};

export default day;