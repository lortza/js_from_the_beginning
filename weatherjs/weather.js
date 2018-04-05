// http://api.wunderground.com/api/9b792700e2b761b4/conditions/q/CA/San_Francisco.json

class Weather {
  constructor(city, state){
    this.baseUrl = 'http://api.wunderground.com/api/9b792700e2b761b4'
    this.city = city
    this.state = state
  }

  async getWeatherData(){
    const response = await fetch(`${this.baseUrl}/conditions/q/${this.state}/${this.city}.json`)

    const responseData = await response.json()
    console.log(responseData)

    return responseData.current_observation
  }

  changeLocation(city, state){
    this.city = city
    this.state = state
  }


}

