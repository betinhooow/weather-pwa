import React, { useState, KeyboardEvent } from 'react';
import './App.css';
import { fetchWather } from './api/fetchWeather';

const App = () => {
  const [query, setQuery] = useState('');

  const search = async (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      const data = await fetchWather(query);

      console.log(data)
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
    </div>
  )
}

export default App;
