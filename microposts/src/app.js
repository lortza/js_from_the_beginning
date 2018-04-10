import { http } from './http'
import { ui } from './ui'

// Get post on DOM load
document.addEventListener('DOMContentLoaded', getPosts)

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost)

// Listen for delete post
document.querySelector('#posts').addEventListener('click', deletePost)

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

// Deletes posts
function deletePost(e){
  if(e.target.classList.contains('fa-remove')){
    let postId = e.target.parentNode.getAttribute('data-id')
    http.delete(`${http.apiUrl}/${postId}`)
      .then(data => {
        ui.removePostFromView(postId)
      })
      .catch(err => console.log(err))
  }
}
