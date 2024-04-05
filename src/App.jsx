import { Currentweather } from './components/currentweather/Currentweather';
import { Search } from './components/search/Search'
import { Forecast } from './components/forecast/Forecast';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import './App.css'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(" ")

    const currentweatherfetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastfetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentweatherfetch, forecastfetch])
      .then(async (response) => {
        const weatherresponse = await response[0].json();
        const forecastresponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherresponse });
        setForecast({ city: searchData.label, ...forecastresponse });
      })
      .catch((err) => console.log(err));

  }

  return (
    <div className='container'>
      <h1 className='heading'>Explore the Skies: Enter City to Uncover Weather</h1>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Currentweather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <div className='footer'>
        &copy; {new Date().getFullYear()} Anmol Kansal. All rights reserved.
      </div>
    </div>
  )
}

export default App
