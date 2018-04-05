class UI {
  constructor(){
    this.profile = document.getElementById('profile')
    this.container = document.querySelector('.search-container')
    this.searchBox = document.querySelector('.search')
  }

  showProfile(user){
    console.log(user);
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" alt="profile" title="profile" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <h2>${user.login}</h2>
          <div>
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
          </div>
          <br>
          <ul class="list-group">
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div> <!-- col-md-9 -->
      </div><!-- row -->
    </div><!-- card -->
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `
  }

  showRepos(repos){
    let output = ''
    repos.forEach(function(repo) {
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
      `
      // Output the repos
      const reposContainer = document.querySelector('#repos')
      reposContainer.innerHTML = output
    });
  }

  clearProfile(){
    this.profile.innerHTML = ''
  }

  showAlert(message, class_name){
    // Remove any existing alert divs
    this.clearAlert()
    // Insert alert into dom
    const div = document.createElement('div')
    div.className = class_name
    div.appendChild(document.createTextNode(message))
    this.container.insertBefore(div, this.searchBox)
    // Remove alert after 1.5 sec
    setTimeout(() => {
      this.clearAlert()
    }, 1500)
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert')
    if(currentAlert){
      currentAlert.remove()
    }
  }
}
