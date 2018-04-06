class UI {
  constructor(){
    this.searchContainer = document.querySelector('.search-container')
    this.searchBox = document.querySelector('.search')

    this.profile = document.getElementById('profile')
    this.profilePic = document.querySelector('#profile-pic')
    this.username = document.querySelector('#username')

    this.publicRepos = document.querySelector('#public-repos')
    this.publicGists = document.querySelector('#public-gists')
    this.followers = document.querySelector('#followers')
    this.following = document.querySelector('#following')
    this.userFullName = document.querySelector('#user-name')
    this.userCompany = document.querySelector('#user-company')
    this.userWebsite = document.querySelector('#user-website')
    this.userLocation = document.querySelector('#user-location')
    this.userStartDate = document.querySelector('#user-start-date')

    this.repoList = document.querySelector('#repos')

    // this.repoName = document.querySelector('#repo-name')
    // this.repoStars = document.querySelector('#repo-stars')
    // this.repoWatchers = document.querySelector('#repo-watchers')
    // this.repoForks = document.querySelector('#repo-forks')
  }

  paint(user){
    this.profile.classList.remove('hidden')
    this.profilePic.setAttribute('src', user.profile.avatar_url)
    this.username.textContent = user.profile.login

    this.publicRepos.textContent = user.profile.login
    this.publicRepos.textContent = `Public Repos: ${user.profile.public_repos}`
    this.publicGists.textContent = `Public Gists: ${user.profile.public_gists}`
    this.followers.textContent = `Followers: ${user.profile.followers}`
    this.following.textContent = `Following: ${user.profile.following}`
    this.userFullName.textContent = `Name: ${user.profile.name}`
    this.userCompany.textContent = `Company: ${user.profile.company}`
    this.userWebsite.textContent = `Website: ${user.profile.blog}`
    this.userLocation.textContent = `Location: ${user.profile.location}`
    this.userStartDate.textContent = `Member Since: ${user.profile.created_at}`
    let output = ''
    user.repos.forEach(function(repo) {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `})
    this.repoList.innerHTML = output
  }

  clearProfile(){
    // this.profile.innerHTML = ''
    this.profile.classList.add('hidden')
  }
}
