export default class WeatherService {  
  static getWeather(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
      .then(function(response) {
        console.log(process.env.OPEN_WEATHER_API_KEY)
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const data = response.json()
        console.log(data)
        return data
      })
      .catch(function(error) {
        return Error(error);
      })
  }
}