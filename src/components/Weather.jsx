import React, { useEffect } from 'react';
import useFetchWeather from '../hooks/useFetchWeather';

const Weather = () => {

    const {
        city: city,
        icon: icon,
        country: country,
        description: description,
        isCelsius: isCelsius,
        changeUnits: changeUnits,
        temp: temp,
        maxTemp: maxTemp,
        minTemp: minTemp,
        feelsLike: feelsLike,
        humidity: humidity,
        wind: wind,
        pressure: pressure,
        background: background
    } = useFetchWeather();


    let tSymbol = isCelsius ? ' °C' : ' °F';
    let speedUnits = isCelsius ? ' m/s' : ' mph';

    const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.20),rgba(0, 0, 0, 0.20))'



    return (
        <div className='weather-app' style={{ backgroundImage: `${linearGradient},url(${background})` }}>
            <h1><span>{city}, </span>{country}</h1>
            <div className='flex-row cntnr'>
                <div className='flex-column'>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                    <b>{description}</b>
                </div>
                <h2 className='temp'><span>{temp}</span>{tSymbol}</h2>
            </div>
            <div className='cntnr flex-column'>
                <p className='feels-lk'>Feels like <span>{feelsLike}</span>{tSymbol}</p>
                <p>
                    <i className="fa-solid fa-arrow-up"></i>
                    {maxTemp}{tSymbol}
                    <i className="fa-solid fa-arrow-down"></i>
                    {minTemp}{tSymbol}
                </p>
            </div>
            <div className='cntnr flex-column extra-info'>
                <p>
                    <i className="fa-solid fa-droplet"></i>
                    Humidity <span>{humidity}</span> %
                </p>
                <p>
                    <i className="fa-solid fa-wind"></i>
                    Wind <span>{wind}</span> {speedUnits}
                </p>
                <p>
                    <i className="fa-solid fa-gauge-simple"></i>
                    pressure <span>{pressure}</span> hPa
                </p>
            </div>

            <button className='button-80' onClick={changeUnits}>{isCelsius ?' °F'  :' °C' }</button>
        </div>
    );
};

export default Weather;