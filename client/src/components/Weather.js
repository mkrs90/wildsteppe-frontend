import axios from "axios";
import { useEffect, useState } from "react";

function Weather() {
    // let weather = "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=55c2fecd650724ce09bf1acb1efb65d5"
    // console.log(weather)
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        getWeatherData(47150)
    }, []);

    function getWeatherData(zip) {
        let options = {
          baseURL: 'https://api.openweathermap.org',
          params: {
            zip: zip,
            country: 'us',
            appid: '55c2fecd650724ce09bf1acb1efb65d5'
          }
        }
          
        axios.get(`/data/2.5/weather`, options)
          .then(function (response) {
            setWeather(response.data)
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      
      function kelvinToFahrenheit(kelvin) {
        const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        let roundFahrenheit = Math.round(fahrenheit * 10) / 10;
        return roundFahrenheit;
      }

    return (   
        <div>
            Current weather for {weather?.name}
            <p>{kelvinToFahrenheit(weather.main?.feels_like)}</p>
            <p>High {kelvinToFahrenheit(weather.main?.temp_max)} / Low {kelvinToFahrenheit(weather.main?.temp_min)}</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
        </div>
    )
}

export default Weather;