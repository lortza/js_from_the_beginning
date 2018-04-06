// http://api.wunderground.com/api/9b792700e2b761b4/conditions/q/CA/San_Francisco.json

class Weather {
  constructor(response){
    this.weatherString = response.weather
    this.temp = response.temperature_string
    this.displayLocation = response.display_location.full
    this.iconUrl = response.icon_url
    this.reativeHumidity = response.relative_humidity
    this.feelslikeString = response.feelslike_string
    this.dewpointString = response.dewpoint_string
    this.windString = response.wind_string
  }
}
