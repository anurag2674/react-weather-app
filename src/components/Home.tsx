import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../constants/userLinks';
import WeatherPanel from './WeatherPanel';

const Home: React.FC<unknown> = (_props) => {
  const [city, setCity] = useState<string>('');
  const [debouncedCityValue, setDebouncedCityValue] = useState<string>('');
  const [weather, setWeather] = useState<unknown>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    if (city.trim().length < 2) {
      setDebouncedCityValue('');
      return;
    }
    const setTimeOutId = setTimeout(() => {
      setDebouncedCityValue(city.trim());
    }, 500);
    return () => {
      clearTimeout(setTimeOutId);
    };
  }, [city]);
  useEffect(() => {
    if (!debouncedCityValue) {
      return;
    }
    axios({
      url: '/weather',
      method: 'get',
      baseURL: WEATHER_API_URL,
      params: { q: debouncedCityValue, appId: WEATHER_API_KEY, units: 'metric' },
    })
      .then((res: any) => {
        setWeather(res['data']);
      })
      .catch((err: any) => {
        setWeather('');
        console.log('Error while fetching location details', err);
      });
  }, [debouncedCityValue]);
  return (
    <div className="flex flex-col justify-center px-4 py-4">
      <div className="flex gap-4 items-center">
        <div>
          <label htmlFor="location">Location: </label>
          <input
            className="border border-black solid px-2 py-2"
            type="text"
            name="location"
            id="location"
            value={city}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button variant="contained">Submit</Button>
        </div>
      </div>
      <WeatherPanel weatherConditions={weather} />
    </div>
  );
};

export default Home;
