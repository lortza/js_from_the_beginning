// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

// const liEven = document.querySelectorAll('li:nth-child(even)')
// liEven.forEach(function(item) {
//   item.style.background = 'red'
// });

// let list = document.querySelector('ul.collection')

// const li = document.createElement('li')
// li.className = 'collection-item'
// li.id = 'new-item'
// li.setAttribute('title', 'New Item')
// li.appendChild(document.createTextNode('Hello World'))
// list.appendChild(li)

// const li2 = document.createElement('li')
// li2.className = "collection-item"
// li2.innerHTML = 'Thunderfoot is loud<a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>'
// list.appendChild(li2)

// const li3 = document.querySelectorAll('li')[1]
// li3.outerHTML = '<li class="collection-item">We should try to get a single house <a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a></li>'

// const li4 = document.createElement('li')



// find old element
const oldHeading = document.getElementById('task-title')

// create new element
const newHeading = document.createElement('h5')
newHeading.id = "task-title"
newHeading.appendChild(document.createTextNode("Task List 22222"))

// find the parent node of the old element then replace its child
oldHeading.parentNode.replaceChild(newHeading, oldHeading)

const clearBtn = document.querySelector('.clear-tasks')

const respondToClick = function(event){
  console.log(event.target);
  event.target.innerText = "been had been clicked"
  event.preventDefault()
}

clearBtn.addEventListener('click', respondToClick)


const card = document.querySelector('.card')
const heading = document.querySelector('#task-title')

const respondToMove = function(event){
  heading.textContent = `MouseX: ${event.offsetX} MouseY: ${event.offsetY}`
  textContent = `rgb(${event.offsetX}, ${event.offsetY}, ${(event.offsetX / 2) + (event.offsetY /2) })`
  document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, ${(event.offsetX / 2) + (event.offsetY /2) })`
}
card.addEventListener('mousemove', respondToMove)


const form = document.querySelector('form')
const taskInput = document.getElementById('task')

taskInput.value = ''

form.addEventListener('submit', runEvent)
function runEvent(e){
  console.log(e.type);
  console.log(taskInput.value);
  e.preventDefault()
}
