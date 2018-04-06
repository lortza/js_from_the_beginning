const github = new Github
const ui = new UI

const searchField = document.getElementById('search-field')

searchField.addEventListener('keyup', (e) => {
  const inputText = e.target.value

  if(inputText !== ''){
    console.log(inputText);
    // Make a call to api
    github.getUser(inputText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // Show error message
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          // Show profile
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
      })
  } else {
    ui.clearProfile()
  }
})
