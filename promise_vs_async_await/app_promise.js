function getUsers() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
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


