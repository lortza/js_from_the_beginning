// Set up local storage
const storage = new Storage
const weatherLocation = storage.getLocationData()

// Get location from browser storage
const weather = new Weather(weatherLocation.city, weatherLocation.state)
const ui = new UI

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Listen for updated form data
document.getElementById('w-save-changes-btn').addEventListener('click', (e) => {
  const city = document.querySelector('#city')
  const state = document.querySelector('#state')
  weather.changeLocation(city.value, state.value)
  storage.setLocationData(city.value, state.value)

  getWeather()
  ui.closeModal(city, state)
})

// Populate the DOM with data
function getWeather(){
  weather.getWeatherData()
  .then(results => {
    console.log(results)
    ui.paint(results)
  })
  .catch(err => console.log(err))

}
