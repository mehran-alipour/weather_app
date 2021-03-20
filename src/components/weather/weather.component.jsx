import React from 'react';
import './weather.styles.css';

export const Weather = (props) => (

  <div className='weatherCard' >
    <h1>{props.info.title}</h1>
    <img alt="weather icon" src={`https://www.metaweather.com/static/img/weather/png/64/${props.info.consolidated_weather[0].weather_state_abbr}.png`} />
    <h3>Low: {Math.round(props.info.consolidated_weather[0].min_temp)}</h3>
    <h3>High: {Math.round(props.info.consolidated_weather[0].max_temp)}</h3>
    <h3>Humidity: {props.info.consolidated_weather[0].humidity}</h3>
  </div >

)

