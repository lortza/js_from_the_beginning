class UI {
  constructor() {
    this.post = document.querySelector('#posts')
    this.titleInput = document.querySelector('#title')
    this.bodyInput = document.querySelector('#body')
    this.idInput = document.querySelector('#id')
    this.postSubmit = document.querySelector('.post-submit')
    this.forState = 'add'
  }
  showPosts(posts){
    let output =''
    posts.forEach(function(post){
      output += `
      <div id="post-${post.id}" class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
      `
    })
    this.post.innerHTML = output
  }

  showAlert(message, klass){
    this.clearAlert()
    const div = document.createElement('div')
    div.className = klass
    div.appendChild(document.createTextNode(message))
    // Get parent
    const container = document.querySelector('.postsContainer')
    const form = document.querySelector('.card-form')
    container.insertBefore(div, form)
    // Show the alert for 1.5 seconds
    setTimeout(()=> {
      this.clearAlert()
    }, 1500)
  }

  clearAlert(){
    let alert = document.querySelector('.alert')
    if(alert){
      alert.remove()
    }
  }

  clearFields(){
    this.titleInput.value = ''
    this.bodyInput.value = ''
  }

  clearIdInput(){
    this.idInput.value =''
  }

  removePostFromView(postId){
    document.querySelector(`#post-${postId}`).remove()
  }

  // Fill form for edit
  fillForm(data){
    this.titleInput.value = data.title
    this.bodyInput.value = data.body
    this.idInput.value = data.id

    this.changeFormState('edit')
  }

  changeFormState(state){
    if(state === 'edit'){
      // Change button to edit settigns
      this.postSubmit.textContent = 'Update Post'
      this.postSubmit.classList.remove('btn-primary')
      this.postSubmit.classList.add('btn-success')
      // Create Cancel Button
      let btn = document.createElement('button')
      btn.className = 'post-cancel btn btn-primary btn-block mt-2'
      btn.appendChild(document.createTextNode('Cancel Edit'))
      let parent = document.querySelector('.card-form')
      parent.appendChild(btn)
    } else {
      this.postSubmit.textContent = 'Post It'
      this.postSubmit.classList.add('btn-primary')
      this.postSubmit.classList.remove('btn-success')
      if(document.querySelector('.post-cancel')){
        document.querySelector('.post-cancel').remove()
      }
      // Clear ID from hidden field
      this.clearIdInput()
      // Clear Form fields
      this.clearFields()
    }
  }


}// end UI class

export const ui = new UI()
