class UI {
  // locate all of the crucial DOM elements
  constructor(){
    this.city = document.querySelector('#city')
    this.state = document.querySelector('#state')
    this.submitBtn = document.querySelector('#w-save-changes-btn')
    this.clearLocalityBtn = document.querySelector('#clear-location')
    this.location = document.querySelector('#w-location')
    this.desc = document.querySelector('#w-desc')
    this.string = document.querySelector('#w-string')
    this.details = document.querySelector('#w-details')
    this.icon = document.querySelector('#w-icon')
    this.humidity = document.querySelector('#w-humidity')
    this.feelsLike = document.querySelector('#w-feels-like')
    this.dewpoint = document.querySelector('#w-dewpoint')
    this.wind = document.querySelector('#w-wind')
  }

  // populate the DOM elements
  paint(weather){
    this.location.textContent = weather.displayLocation
    this.desc.textContent = weather.weatherString
    this.string.textContent = weather.temp
    this.icon.setAttribute('src', weather.iconUrl)
    this.humidity.textContent = `Relative Humidity: ${weather.reativeHumidity}`
    this.feelsLike.textContent = `Feels Like: ${weather.feelslikeString}`
    this.dewpoint.textContent = `Dewpoint: ${weather.dewpointString}`
    this.wind.textContent = `Wind: ${weather.windString}`
  }

  // close the modal and clear the fields
  closeModal(){
  $("#locModal").modal('hide')
    this.city.value = ''
    this.state.value = ''
  }
}
