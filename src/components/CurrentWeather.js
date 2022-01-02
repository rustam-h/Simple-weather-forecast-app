import {React, useState, useEffect} from 'react';
import { Paper, Typography } from '@mui/material';
import axios from 'axios';
import CardCurrentWeather from './CardCurrentWeather';
import card from '../static/card-bg.jpg'
import ash from '../static/ash-bg.jpg'
import clear from '../static/clear-bg.jpg'
import clouds from '../static/clouds-bg.jpg'
import drizzle from '../static/drizzle-bg.jpg'
import dust from '../static/dust-bg.jpg'
import fog from '../static/fog-bg.jpg'
import haze from '../static/haze-bg.jpg'
import mist from '../static/mist-bg.jpg'
import rain from '../static/rain-bg.jpg'
import sand from '../static/sand-bg.jpg'
import smoke from '../static/smoke-bg.jpg'
import snow from '../static/snow-bg.jpg'
import squall from '../static/squall-bg.jpg'
import thunderstorm from '../static/thunderstorm-bg.jpg'
import tornado from '../static/tornado-bg.jpg'

function CurrentWeather(props) {
    const [weatherData, setWeatherData] = useState({});
    useEffect(() => {
        const fetchWeather = (city) => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0cd3423ac39fc676e2638460ef08c2d6`)
            .then(res => res.data)
            .then(res => setWeatherData(res))
            .catch((error) => {
                console.log(error)
            });
        }
        fetchWeather(props.city);
    }, [props.city])
    // useEffect(() => {
        //     fetchWeather(props.city);
    // }, [props.city])
    let bg_image = card;
    let bg_image_name = "";
    if (weatherData.weather){
        console.log(weatherData.weather[0].main)
        bg_image_name = weatherData.weather[0].main.toLowerCase();
    }
    let images = {
        'ash': ash,
        'clear': clear,
        'clouds': clouds,
        'drizzle': drizzle,
        'dust': dust,
        'fog': fog,
        'haze': haze,
        'mist': mist, 
        'rain': rain,
        'sand': sand,
        'smoke': smoke,
        'snow': snow,
        'squall': squall,
        'thunderstorm': thunderstorm,
        'tornado': tornado
    };
    bg_image = images[bg_image_name];
    console.log(bg_image);
    return (
        <>
        { (weatherData.weather) ?
        <Paper 
        elevation={0}
        sx={{ 
            backgroundImage: "url(" + `${bg_image}` + ")",

            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '83.7vh'
        }}
        >
            { props.display && props.city.length ? 
            <CardCurrentWeather data={weatherData}/> :
            null
            }
        </Paper>
        :   <Typography>
            Enter a city name to display its current weather
            </Typography>
    }
    </>
    )
}

export default CurrentWeather
