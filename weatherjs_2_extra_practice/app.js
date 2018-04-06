// Set up the UI
const ui = new UI

// Populate default location or locally stored location
const locality = new Locality
let weather;

// Set up API
const api = new WeatherApi

// Load the weather upon page load
document.addEventListener('DOMContentLoaded', function(){
  updateWeather(locality.state(), locality.city())
})

// Update the location when form is submitted
ui.submitBtn.addEventListener('click', function(){
  locality.setLocality(ui.state.value, ui.city.value)
  updateWeather(ui.state.value, ui.city.value)
  ui.closeModal()
})

// Clear the location from localstorage
ui.clearLocalityBtn.addEventListener('click', function(){
  locality.removeHistory()
  location.reload()
})

// Get the weather data
function updateWeather(state, city){
  api.getWeather(state, city)
    .then(response => { return new Weather(response) })
    .then(weather => { ui.paint(weather) })
    .catch(err => console.log(err))
}
