import {React, useState, useEffect} from 'react'
import axios from 'axios';
import card from '../static/card-bg.jpg'
import images from '../static/imagesList';
import {Paper, Typography} from '@mui/material'
import LayoutForecast from './LayoutForecast';

function Forecast(props) {
    const [forecastData, setForecastData] = useState({});
    useEffect(() => {
        const fetchForecast = (city) => {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=0cd3423ac39fc676e2638460ef08c2d6`)
            .then(res => res.data)
            .then(res => setForecastData(res))
            .catch((error) => {
                console.log(error)
            });
        }
        fetchForecast(props.city);
    }, [props.city]);
    let bg_image = card;
    let bg_image_name = "";
    if (forecastData.list){
        bg_image_name = forecastData.list[0].weather[0].main.toLowerCase();
    }
    if(bg_image_name){
        bg_image = images[bg_image_name];
    }
    return (
        <>
        { (forecastData.list) ?
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
                <LayoutForecast data={forecastData}/> :
                null
            }
        </Paper> :
            <Typography 
                variant="h5"
                sx= {{
                    mt: 5
                }}
            >
                Enter a city name to display its 5 day weather forecast
            </Typography>
        }
    </>
    )
}

export default Forecast
