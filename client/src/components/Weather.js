import axios from "axios";
import { useEffect, useState } from "react";

function Weather() {
    // let weather = "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=55c2fecd650724ce09bf1acb1efb65d5"
    // console.log(weather)
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        getWeatherData(42303)
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
      

    return (   
        <div>
            Weather: {weather?.name}
        </div>
    )
}

export default Weather;