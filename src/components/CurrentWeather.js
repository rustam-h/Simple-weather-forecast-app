import {React, useState, useEffect} from 'react';
import { Paper, Typography } from '@mui/material';
import axios from 'axios';
import CardCurrentWeather from './CardCurrentWeather';
import card from '../static/card-bg.jpg'
import images from '../static/imagesList';

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
    let bg_image = card;
    let bg_image_name = "";
    if (weatherData.weather){
        bg_image_name = weatherData.weather[0].main.toLowerCase();
    }
    if(bg_image_name){
        bg_image = images[bg_image_name];
    }
    return (
        <>
        { (weatherData.weather) ?
        <Paper 
        elevation={0}
        square={true}
        sx={{ 
            backgroundImage: `url(${bg_image})`,
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
        :   <Typography 
            variant="h5"
            sx= {{
                mt: 5
            }}>
            Enter a city name to display its current weather
            </Typography>
    }
    </>
    )
}

export default CurrentWeather
