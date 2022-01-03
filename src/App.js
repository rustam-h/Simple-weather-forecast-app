import './App.css';
import {React, useState} from 'react';
import SearchBox from './components/SearchBox';
import {Button, Tabs, Tab, Box} from '@mui/material';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { ThemeProvider } from '@emotion/react';
import theme from "./static/theme.js";

function App() {
  const [searchField, setSearchField] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [fetchData, setFetchData] = useState({
    display: false,
    cityName : ""
  })

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  }
  
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    setFetchData({
      ...fetchData,
      display: true,
      cityName: searchField
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SearchBox searchChange={onSearchChange}/>
        <Button variant="outlined" onClick={onSubmit}>Submit</Button>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleTabChange} centered>
                <Tab label="Current Weather" />
                <Tab label="5 day forecast" />
              </Tabs>          
          </Box>
        </Box>
        {tabValue === 0 && <CurrentWeather display={fetchData.display} city={fetchData.cityName}/>}
        {tabValue === 1 && <Forecast display={fetchData.display} city={fetchData.cityName}/>}
      </div>
    </ThemeProvider>
  );
}

export default App;
