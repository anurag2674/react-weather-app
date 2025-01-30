import React from 'react';

const WeatherPanel: React.FC<any> = ({ weatherConditions }) => {
  if (!weatherConditions) {
    return <div>Enter a city name</div>;
  }
  const { main, weather } = weatherConditions;
  const { ...temps } = main;
  const { ...currWeather } = weather[0];
  console.log(temps['temp'], currWeather['description']);
  return (
    <div className="overflow-auto">
      <div>{temps['temp']}</div>
      <div>{currWeather['description']}</div>
    </div>
  );
};

export default WeatherPanel;
