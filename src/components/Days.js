import React from 'react';

import Day from './Day';

const days = (props) => props.days.map( ( day, index ) => {

        return <Day key={index}
            dt={day.dt_txt}
            icon={"http://openweathermap.org/img/w/" + day.weather[0].icon + ".png"}
            weather={day.weather[0].main}
            temp={Math.round(day.main.temp)} />
      } );

export default days;