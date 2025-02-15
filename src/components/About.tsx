import React from 'react';

const About: React.FC<unknown> = (_props) => {
  return (
    <div className="px-6 py-6 max-w-[900px]">
      <div className="py-4">
        <div className="text-3xl">About This App</div>
        <p>
          Welcome to our Weather App! This application is designed to provide accurate and up-to-date weather
          information for locations around the world.
        </p>
      </div>
      <div className="py-4">
        <div className="text-2xl">Features:</div>
        <ul className="list-disc list-inside">
          <li>
            <strong> Real-Time Weather Data</strong> – Get the latest weather updates, including temperature, humidity,
            wind speed, and more.
          </li>
          <li>
            <strong>Search Any Location</strong> – Enter any city or location to check current weather conditions.
          </li>
          <li>
            <strong>User-Friendly Interface</strong> – Simple and intuitive design for a seamless experience.
          </li>
          <li>
            <strong>Reliable Data</strong> – Weather information is sourced from the &nbsp;
            <a className="text-orange-300" href="https://openweathermap.org/api/" target="_blank">
              OpenWeather API
            </a>
            , ensuring accuracy.
          </li>
        </ul>
      </div>
      <div className="py-4">
        <div className="text-2xl">How It Works:</div>
        <p>
          Our app fetches weather data from the OpenWeather API and displays it in a clean, easy-to-read format. Whether
          you need to check the weather before heading out or plan for the week ahead, this app has got you covered!
          Stay informed and never get caught off guard by the weather again.
        </p>
      </div>
    </div>
  );
};

export default About;
