import React from 'react';

const Weather = ({ weatherData }) => {
    const { name, main, weather, wind } = weatherData;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="card weather-card mx-auto">
            <div className="card-body text-center">
                <h3 className="card-title city-name">{name}</h3>
                <h4 className="card-subtitle mb-2 text-muted">{weather[0].description}</h4>
                <img src={iconUrl} alt="weather icon" className="weather-icon" />
                <ul className="list-group mt-3">
                    <li className="list-group-item">Temperature: {main.temp}°C</li>
                    <li className="list-group-item">Humidity: {main.humidity}%</li>
                    <li className="list-group-item">Wind Speed: {wind.speed} m/s</li>
                </ul>
            </div>
        </div>
    );
};

export default Weather;
