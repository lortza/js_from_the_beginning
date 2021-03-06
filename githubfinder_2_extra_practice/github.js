class Github {
  constructor(){
    this.client_id = 'c012419e10114e0ea8af'
    this.client_secret = 'ef26a6e86e9eb28c2749dc4fbdade89250e0a8cd'
    this.baseUrl = 'https://api.github.com/users'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUserData(username){
    const profileResponse = await fetch(`${this.baseUrl}/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const userData = await profileResponse.json()

    const reposResponse = await fetch(`${this.baseUrl}/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const reposData = await reposResponse.json()

    return {
      profile: userData,
      repos: reposData
    }

  }
}
