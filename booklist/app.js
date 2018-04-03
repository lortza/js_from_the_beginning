// Book Constuctor

function Book(title, author, isbn){
  this.title = title
  this.author = author
  this.isbn = isbn
}

// UI Constructor
function UI(){}

UI.prototype.addBookToList = function(book){
  const list = document.querySelector('#book-list')
        row = document.createElement('tr')

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row)
}

UI.prototype.clearFields = function(){
  document.querySelector('#title').value = ''
  document.querySelector('#author').value = ''
  document.querySelector('#isbn').value = ''
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault()

  // Get form values
  const UItitle = document.querySelector('#title').value,
        UIauthor = document.querySelector('#author').value,
        UIisbn = document.querySelector('#isbn').value

  // Instantiate objects
  const book = new Book(title, author, isbn),
        ui = new UI(title, author, isbn)

  // Add book to list
  ui.addBookToList(book)
  ui.clearFields()
})
