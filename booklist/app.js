// Book Constuctor ///////////////////

function Book(title, author, isbn){
  this.title = title
  this.author = author
  this.isbn = isbn
}




// UI Constructor ///////////////////
function UI(){}

UI.prototype.addBookToList = function(book){
  const list = document.querySelector('#book-list'),
        row = document.createElement('tr')
console.log(book);
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row)
}

UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove()
  }
}

UI.prototype.clearFields = function(){
  document.querySelector('#title').value = ''
  document.querySelector('#author').value = ''
  document.querySelector('#isbn').value = ''
}

UI.prototype.showAlert = function(msg, class_name){
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







// Event Listeners ///////////////////
// Listener to Add Book
document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault()

  // Get form values
  const titleText = document.querySelector('#title').value,
        authorText = document.querySelector('#author').value,
        isbnText = document.querySelector('#isbn').value

  // Instantiate objects
  const book = new Book(titleText, authorText, isbnText),
        ui = new UI

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
