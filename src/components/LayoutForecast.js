import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function LayoutForecast({data}) {
    let cardsData = [];
    if(data.list){
        cardsData = [
            {
                'temp': "Temperature",
                'dt': "Date",
                'desc': "Weather Description",
                'pop': "Probability of raining"
            },
            {
                'temp': data.list[0].main.temp,
                'dt': data.list[0].dt_txt.split(" ")[0],
                'desc': data.list[0].weather[0].description,
                'pop': data.list[0].pop
            },
            {
                'temp': data.list[8].main.temp,
                'dt': data.list[8].dt_txt.split(" ")[0],
                'desc': data.list[8].weather[0].description,
                'pop': data.list[8].pop
            },
            {
                'temp': data.list[16].main.temp,
                'dt': data.list[16].dt_txt.split(" ")[0],
                'desc': data.list[16].weather[0].description,
                'pop': data.list[16].pop
            },
            {
                'temp': data.list[24].main.temp,
                'dt': data.list[24].dt_txt.split(" ")[0],
                'desc': data.list[24].weather[0].description,
                'pop': data.list[24].pop
            },
            {
                'temp': data.list[32].main.temp,
                'dt': data.list[32].dt_txt.split(" ")[0],
                'desc': data.list[32].weather[0].description,
                'pop': data.list[32].pop
            },
        ]
    }
  return (
    <>
        {(data.list) ?
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cardsData.map((card, index) => (
              <Grid item key={card} xs={12}>
                { (index) ?
                <Card
                  sx={{ 
                    height: '100%', 
                    flexDirection: 'column',
                    margin: 'auto',
                    maxWidth:{xs: 400, sm: 550, md: 800, lg: 1200},
                    opacity: 0.8,
                    borderRadius: 5
                  }}
                  
                >
                  <CardContent 
                  sx={{ 
                    display: 'flex',
                    flexWrap: 'nowrap',
                    width: '100%',
                    flexDirection: 'row'    
                }}>
                    <Typography gutterBottom variant="h6" component="h2" sx={{flex:'25%', color:'secondary.main'}}>
                      {card.dt}
                    </Typography>
                    <Typography sx={{flex:'25%'}}>
                      {card.temp}
                      <span>&#176;</span>
                        {"C"}
                    </Typography>
                    <Typography sx={{flex:'25%'}}>
                      {card.desc}
                    </Typography>
                    <Typography sx={{flex:'25%'}}>
                      {card.pop}
                    </Typography>
                  </CardContent>
                </Card> :

                <Card
                  sx={{ 
                    height: '100%', 
                    flexDirection: 'column',
                    margin: 'auto',
                    maxWidth:{xs: 400, sm: 550, md: 800, lg: 1200},
                    opacity: 0.8,
                    borderRadius: 5
                  }}
                >
                  <CardContent 
                  sx={{ 
                    display: 'flex',
                    flexWrap: 'nowrap',
                    width: '100%',
                    flexDirection: 'row'    
                }}>
                    <Typography gutterBottom variant="h6" component="h2" sx={{flex:'25%', color:'primary.main'}}>
                        Date
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2" sx={{flex:'25%', color:'primary.main'}}>
                        Temperature
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2" sx={{flex:'25%', color:'primary.main'}}>
                        Weather Condition
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2" sx={{flex:'25%', color:'primary.main'}}>
                        Probability of raining
                    </Typography>
                  </CardContent>
                </Card>
                }
              </Grid>
            ))}
          </Grid>
        </Container>
        : <h1>Loading...</h1>
        }
    </>
  );
}