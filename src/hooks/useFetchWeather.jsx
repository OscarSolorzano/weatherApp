import React, { useEffect, useState } from 'react';
import axios from 'axios'
import useFetchBackground from '../hooks/useFetchBackground';

const useFetchWeather = () => {

    const [weather, setWeather] = useState({});
    const [isCelsius, setIsCelsius] = useState(true);
    const [loading, setLoading] = useState(true);
    const [lastCity, setLasCity] = useState('');

    useEffect(() => {
        const succes = pos => {

            if (lastCity !== '') {
                fetchWeatherByCity(lastCity)
            }
            else {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=57fce174ec8306210d0005f4f0bcc2a3&units=${isCelsius ? 'metric' : 'imperial'}`)
                    .then(res => setWeather(res.data))
                    .finally(setLoading(false))
            }

        }
        navigator.geolocation.getCurrentPosition(succes);
    }, [isCelsius])

    const fetchWeatherByCity = (city) => {
        setLoading(true)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57fce174ec8306210d0005f4f0bcc2a3&units=${isCelsius ? 'metric' : 'imperial'}`)
            .then(res => setWeather(res.data))
            .finally(
                setLoading(false),
                setLasCity(city)
            )

    }

    const changeUnits = () => {
        setIsCelsius(!isCelsius)
    };


    const city = weather.name;
    const country = weather.sys?.country;
    const icon = weather.weather?.[0]?.icon;
    const description = weather.weather?.[0].description;
    const temp = weather.main?.temp;
    const maxTemp = weather.main?.temp_max;
    const minTemp = weather.main?.temp_min;
    const feelsLike = weather.main?.feels_like;
    const humidity = weather.main?.humidity;
    const wind = weather.wind?.speed;
    const pressure = weather.main?.pressure;
    const background = useFetchBackground(icon);



    return {
        loading,
        weather,
        city,
        country,
        icon,
        description,
        isCelsius,
        changeUnits,
        temp,
        maxTemp,
        minTemp,
        feelsLike,
        humidity,
        wind,
        pressure,
        background,
        fetchWeatherByCity
    };
};

export default useFetchWeather;