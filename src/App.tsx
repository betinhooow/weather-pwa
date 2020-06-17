import React, { useState, KeyboardEvent } from 'react';
import './App.css';
import { fetchWather } from './api/fetchWeather';

interface Weather {
  main: object;
  name: string;
  sys: {
    country: string;
  }
}

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState<Weather>({} as Weather);

  const search = async (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      const data = await fetchWather(query);

      setWeather(data);
      setQuery('');
    }
  }

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
        </div>
      )}
    </div>
  )
}

export default App;
