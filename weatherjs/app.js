const weather = new Weather('Boston', 'MA')
const ui = new UI

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather(){
  weather.getWeatherData()
  .then(results => {
    console.log(results)
    ui.paint(results)
  })
  .catch(err => console.log(err))

}
