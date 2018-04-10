import { http } from './http'
import { ui } from './ui'

// Get post on DOM load
document.addEventListener('DOMContentLoaded', getPosts)

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost)

// Get Posts
function getPosts(){
  http.get(http.apiUrl)
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

// Add post
function submitPost(){
  const title = document.querySelector('#title').value
  const body = document.querySelector('#body').value
  let data = {
    title: title,
    body: body
  }
  // Insert the pot into the data
  http.post(http.apiUrl, data)
    .then(data => {
      ui.showAlert('The post has been saved', 'alert')
      ui.clearFields()
      getPosts()
    })
    .catch(err => console.log(err))
}
