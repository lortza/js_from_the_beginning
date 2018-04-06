// "location" is a protected word in JS, so Locality is used in place of Location

class Locality {
  // Set default location
  constructor(){
    this.defaults = { city: 'New Orleans', state: 'LA'}
  }

  // Return a guaranteed city & state value from local storage OR class default
  state(){
    return this.getGuaranteedLocality('state')
  }

  city(){
    return this.getGuaranteedLocality('city')
  }

  // Returns values from local storage OR the default value
  getGuaranteedLocality(identifier){
    return localStorage.getItem(identifier) || this.defaults[identifier]
  }

  // set locality data in storage
  setLocality(state, city){
    localStorage.setItem('state', state)
    localStorage.setItem('city', city)
  }

  // Clears these fields from browser local storage
  removeHistory(){
    localStorage.removeItem('state')
    localStorage.removeItem('city')
  }

}
