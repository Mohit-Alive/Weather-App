async function fetchWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "c9b875b8b13753cf13922de0ab54c147";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.cod === "404") {
        document.getElementById("weatherData").innerHTML = "<p>City not found</p>";
      } 

      else {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const maxTemperature = data.main.temp_max;
        const minTemperature = data.main.temp_min;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const country = data.sys.country;
        const sunriseTimestamp = data.sys.sunrise;
        const sunsetTimestamp = data.sys.sunset;

      // Convert sunrise and sunset timestamps to local time
        const sunriseTime = new Date(sunriseTimestamp * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunsetTimestamp * 1000).toLocaleTimeString();


  
        document.getElementById("weatherData").innerHTML = `
          <p><span class = "emoji">☁️</span> Weather: ${weatherDescription}</p>
          <p><span class = "emoji">🌡️</span>  Temperature: ${temperature} &deg;C</p>
          <p>🌡️ Max Temperature: ${maxTemperature} &deg;C</p>
          <p>🌡️ Min Temperature: ${minTemperature} &deg;C</p>
          <p>💧 Humidity: ${humidity}%</p>
          <p>🌫️ Wind Speed: ${windSpeed} m/s</p>
          <p>🌏 Country: ${country}</p>
          <p>🌄 Sunrise: ${sunriseTime}</p>
          <p>🌇 Sunset: ${sunsetTime}</p>

        `;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  