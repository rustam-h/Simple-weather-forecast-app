import * as React from 'react'
import { Card, CardActions, CardContent, Button, Typography, Container, Box} from '@mui/material'
import Image from '../static/card_bg.jpg';
function CardCurrentWeather({data}) {
    return (
        <>
            <Container
            align="center"
            sx={{ mt: 2 }}
            >
                {(data.sys) ?
                <Card 
                    variant="outlined"
                    sx ={{ 
                    height: 450,
                    maxWidth:{xs: 350, sm: 500, md: 800},
                    backgroundImage: `url(${Image})`,
                    backgroundSize: 'cover'
                    }}>
                    <CardContent>
                        <Box display="flex" flexDirection="row">
                        <Box p={1}>
                            <Typography variant="h2" color='common.white'>
                                {data.name},{data.sys.country}
                            </Typography>
                            <Typography variant="caption" color='common.white'>
                            {data.coord.lon}, {data.coord.lat}
                            </Typography>
                        </Box>
                        </Box>
                    </CardContent>
                    <CardContent>
                        <Box display="flex" flexDirection="row-reverse">
                        <Box p={0}>
                            <Typography variant="h4" color="common.white">
                            Temp: {data.main.temp}
                            <span>&#176;</span>
                            {"C"}
                            </Typography>
                            <Typography variant="h6" color="common.white">
                                {data.weather[0].description}
                            </Typography>
                        </Box>
                        </Box>
                    </CardContent>
                    <CardContent
                    sx={{ mt: 17 }}
                    >
                        <Box display="flex" flexDirection="row-reverse">
                            <Box p={1}>
                                <Typography variant="h6" color="primary.dark">
                                Humidity: {data.main.humidity}%
                                </Typography>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="primary.dark">
                                Pressure: {data.main.pressure} pa
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                : <h1>Loading...</h1>
                }
            </Container>
        </>
    )
}


export default CardCurrentWeather
