/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import LocationDetails from './LocationDetails';
import ForecastSummaries from './ForecastSummaries';
import ForecastDetails from './ForecastDetails';
import getForecast from '../requests/getForecast';
import SearchForm from '../SearchForm';

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: ""});
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const selectedForecast = forecasts.find((forecast) => forecast.date === selectedDate);
  const handleCitySearch = () => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }

  const handleForecastSelect = (date) => {
  setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation)
   }, []);


  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm searchText={searchText} setSearchText={setSearchText}/>
      <ForecastSummaries forecasts={forecasts} onForecastSelect={handleForecastSelect} />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
