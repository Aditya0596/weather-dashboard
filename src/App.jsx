import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Link to the custom CSS file
import Weather from './Weather';

const App = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const apiKey = '86f11d9b8373e3e51edca1c47d056bc5'; // Replace with your OpenWeatherMap API key

    const handleSearch = async () => {
        if (city === '') {
            setError('Please enter a city');
            return;
        }

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            setWeatherData(response.data);
            setError('');
        } catch (error) {
            setError('City not found');
            setWeatherData(null);
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4 title">Weather Dashboard</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSearch}>
                    Search
                </button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {weatherData && <Weather weatherData={weatherData} />}
        </div>
    );
};

export default App;
