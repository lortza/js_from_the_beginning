async function getUsers(){
  // Await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  // Only procees once it is resolved
  const data = await response.json()

  // Only proceed once second promise is resolved
  return data
}

function insertToDom(users){
  let ul = document.createElement('ul')
  users.forEach(function(user) {
    let li = document.createElement('li')
    li.textContent = `${user.name} of ${user.company.name}`
    ul.appendChild(li)
  });
  document.body.appendChild(ul)
}

getUsers().then(users => console.log(users))
getUsers().then(users => insertToDom(users))
