import React from 'react';

import './FindCity.css';

const findCity = ( props ) => {

    return (

        <div className="find-city-form">
            <div className="form-group">
                <label htmlFor="city">Enter the city</label>
                <input type="text" className="form-control" id="city" name="city" onChange={props.changed} />
            </div>
            <button type="button" className="btn-find" onClick={props.clicked}>Find</button>
        </div>
    )
};

export default findCity;