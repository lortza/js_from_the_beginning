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
      <div class="card mb-3">
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




}// end UI class

export const ui = new UI()
