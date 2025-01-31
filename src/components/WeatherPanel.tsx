import React from 'react';

const WeatherPanel: React.FC<any> = ({ weatherConditions }) => {
  if (!weatherConditions) {
    return (
      <div className="flex flex-col items-center">
        <div>Enter a city name</div>
      </div>
    );
  }
  const { main, weather, name, sys } = weatherConditions;
  const { ...temps } = main;
  const { ...currWeather } = weather[0];
  console.log(weatherConditions);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="font-extrabold text-3xl">{`${name}, ${sys['country']}`}</div>
      <div className="flex flex-col gap-y-10">
        <div className="text-7xl bg-gray-300 px-5 py-5 rounded-3xl">{temps['temp']}&deg;C</div>
        <div className="font-medium bg-gray-300 px-3 py-3 rounded-3xl">
          <div>{`High: ${temps['temp_max']}`}&deg;C</div>
          <div>{`Low: ${temps['temp_min']}`}&deg;C</div>
        </div>
      </div>
      <div className="text-2xl bg-gray-300 px-3 py-3 rounded-3xl">{currWeather['description']}</div>
    </div>
  );
};

export default WeatherPanel;
