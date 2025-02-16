import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../constants/userLinks';
import WeatherPanel from './WeatherPanel';
import { useLoader } from '../hooks/useLoader';
import SearchIcon from '@mui/icons-material/Search';
const Home: React.FC<unknown> = (_props) => {
  const [city, setCity] = useState<string>('');
  const [debouncedCityValue, setDebouncedCityValue] = useState<string>('');
  const [weather, setWeather] = useState<unknown>(null);
  const { showLoader, hideLoader } = useLoader();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    if (city.trim().length < 2) {
      setDebouncedCityValue('');
      setWeather('');
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
    showLoader('Fetching weather data...');
    axios({
      url: '/weather',
      method: 'get',
      baseURL: WEATHER_API_URL,
      params: { q: debouncedCityValue, appId: WEATHER_API_KEY, units: 'metric' },
    })
      .then((res: any) => {
        hideLoader();
        setWeather(res['data']);
      })
      .catch((err: any) => {
        hideLoader();
        setWeather('');
        console.log('Error while fetching location details', err);
      });
  }, [debouncedCityValue]);
  return (
    <div className="p-6 w-full sm:w-[450px] min-h-150">
      <label className="font-extrabold" htmlFor="location">
        Location:
      </label>
      <div className="flex justify-between border border-black solid px-2 py-2 rounded-lg">
        <input
          className="focus:outline-none"
          type="text"
          name="location"
          id="location"
          value={city}
          onChange={handleChange}
          placeholder="Enter a city name"
        />
        <SearchIcon className="opacity-50" />
      </div>
      <div className="w-full sm-[w-450px]">
        <WeatherPanel weatherConditions={weather} />
      </div>
    </div>
  );
};

export default Home;
