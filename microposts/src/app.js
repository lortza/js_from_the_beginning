import { http } from './http'
import { ui } from './ui'

// Get post on DOM load
document.addEventListener('DOMContentLoaded', getPosts)

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost)

// Listen for delete post
document.querySelector('#posts').addEventListener('click', deletePost)

// Listen for edit post
document.querySelector('#posts').addEventListener('click', enableEdit)

// Listen for cancel edit -- need to use event delegation because it was added later
document.querySelector('.card-form').addEventListener('click', cancelEdit)


// Get Posts
function getPosts(){
  http.get(http.apiUrl)
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err))
}

// Add post
function submitPost(){
  // Capture the new post content
  let data = {
    id: document.querySelector('#id').value,
    title: document.querySelector('#title').value,
    body: document.querySelector('#body').value
  }
  // Validate input
  if(data.title === '' || data.body === ''){
    ui.showAlert('Fill out the form, yo.', 'alert')
  } else {
    if(isNewPost(data.id)){
      // Insert the post data into the datastore
      http.post(http.apiUrl, data)
      .then(data => {
        ui.showAlert('The post has been saved', 'alert')
        ui.changeFormState('add')
        getPosts()
      })
      .catch(err => console.log(err))
    } else { // it's an update
    // Insert the post data into the datastore
      http.put(`${http.apiUrl}/${data.id}`, data)
      .then(data => {
        ui.showAlert('The post has been updated', 'alert')
        ui.changeFormState('add')
        getPosts()
      })
      .catch(err => console.log(err))
    }
  }// end validation
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

function enableEdit(e){
  if(e.target.parentElement.classList.contains('edit')){
    // Capture the post data
    let data = {
      id: e.target.parentElement.dataset.id,
      title: e.target.parentElement.previousElementSibling.previousElementSibling.textContent,
      body: e.target.parentElement.previousElementSibling.textContent
    }
    ui.fillForm(data)
  }
  e.preventDefault()
}

function cancelEdit(e){
  if(e.target.classList.contains('post-cancel')){
    ui.changeFormState('add')
  }
  e.preventDefault()
}

function isNewPost(id){
  return (id === '')
}
