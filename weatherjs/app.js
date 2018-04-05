const weather = new Weather('Boston', 'MA')
const ui = new UI

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-save-changes-btn').addEventListener('click', (e) => {
  const city = document.querySelector('#city')
  const state = document.querySelector('#state')
  weather.changeLocation(city.value, state.value)
  getWeather()
  ui.closeModal(city, state)
})

function getWeather(){
  weather.getWeatherData()
  .then(results => {
    console.log(results)
    ui.paint(results)
  })
  .catch(err => console.log(err))

}
