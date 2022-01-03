import * as React from 'react'
import {Card, CardContent, Typography, Container, Box} from '@mui/material'

function CardCurrentWeather({data}) {
    return (
        <>
            <Container
            align="center"
            sx={{ pt: 10 }}
            >
                {(data.sys) ?
                <Card 
                    elevation={20}
                    sx ={{ 
                        height: '100%',
                        maxWidth:{xs: 400, sm: 500, md: 700, lg: 800},
                        backgroundColor: '#fdfff5',
                        opacity: 0.75,
                        borderRadius: 5
                    }}>
                    <CardContent>
                        <Box display="flex" flexDirection="row">
                        <Box p={1}>
                            <Typography variant="h2" color='primary.dark'>
                                {data.name},{data.sys.country}
                            </Typography>
                            <Typography variant="caption" color='secondary.main'>
                            {data.coord.lon}, {data.coord.lat}
                            </Typography>
                        </Box>
                        </Box>
                    </CardContent>
                    <CardContent>
                        <Box display="flex" flexDirection="row-reverse">
                        <Box p={0}>
                            <Typography variant="h3" color="primary.dark">
                            Temp: {data.main.temp}
                            <span>&#176;</span>
                            {"C"}
                            </Typography>
                            <Typography variant="h5" color="secondary.main">
                                {data.weather[0].description}
                            </Typography>
                        </Box>
                        </Box>
                    </CardContent>
                    <CardContent
                    sx={{ mt: 15 }}
                    >
                        <Box display="flex" flexDirection="row">
                            <Box p={1}>
                                <Typography variant="h5" color="primary.dark">
                                Humidity: {data.main.humidity}%
                                </Typography>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h5" color="primary.dark">
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
