import {React, useState, useEffect} from 'react';
import axios from 'axios';
import CardCurrentWeather from './CardCurrentWeather';

function CurrentWeather(props) {
    const [weatherData, setWeatherData] = useState({});
    const fetchWeather = (city) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0cd3423ac39fc676e2638460ef08c2d6`)
        .then(res => res.data)
        .then(res => setWeatherData(res))
        .catch((error) => {
            console.log(error)
        });
    }
    useEffect(() => {
        fetchWeather(props.city);
    }, [props.city])

    return (
        <div>
            { props.display && props.city.length ? 
            <CardCurrentWeather data={weatherData}/> :
            <h2>Enter a city name to display its current weather</h2> }
        </div>
    )
}

export default CurrentWeather
