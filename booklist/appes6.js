// Book Constuctor ///////////////////
class Book {
  constructor(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}



// UI Constructor ///////////////////
class UI {
  constructor(){
    this.titleField = document.querySelector('#title')
    this.authorField = document.querySelector('#author')
    this.isbnField = document.querySelector('#isbn')
  }

  addBookToList(book){
    const list = document.querySelector('#book-list'),
          row = document.createElement('tr')

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row)
  }

  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove()
    }
  }

  clearFields(){
    this.titleField.value = ''
    this.authorField.value = ''
    this.isbnField.value = ''
  }

  showAlert(msg, class_name){
    const div = document.createElement('div'),
          formContainer = document.querySelector('.container'),
          form = document.querySelector('#book-form')

    div.className = `alert ${class_name}`
    div.appendChild(document.createTextNode(msg))
    formContainer.insertBefore(div, form)

    setTimeout(function() {
      document.querySelector('.alert').remove()
      }, 2000);
  }

}




// Event Listeners ///////////////////
// Listener to Add Book
document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault()

  const ui = new UI

  // Get form values
  const titleText = ui.titleField.value,
        authorText = ui.authorField.value,
        isbnText = ui.isbnField.value

  // Instantiate objects
  const book = new Book(titleText, authorText, isbnText)

  // Validation
  if(titleText === '' || authorText === '' ||  isbnText === ''){
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add book to list
    ui.addBookToList(book)
    ui.showAlert('Book added!', 'success')
    ui.clearFields()
  }
})

// Listener to Delete book
document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI()
  ui.deleteBook(e.target)
  ui.showAlert('Book removed', 'success')
  e.preventDefault()
})

