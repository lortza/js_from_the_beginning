class WeatherApi {
  constructor(){
    this.baseUrl = 'http://api.wunderground.com/api/9b792700e2b761b4'
  }

  async getWeather(state, city){
    let response = await fetch(`${this.baseUrl}/conditions/q/${state}/${city}.json`)
    let responseData = await response.json()
    let currentObservation = responseData.current_observation

    return currentObservation
  }

}
