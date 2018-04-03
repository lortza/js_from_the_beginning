// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add task event
  form.addEventListener('submit', addTask)
  // Remove task from list
  taskList.addEventListener('click', removeTask)
  // Clear all tasks with button
  clearBtn.addEventListener('click', clearTasks)
  // Fitler task event
  filter.addEventListener('keyup', filterTasks)
}

// Get tasks from local storage
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store task in local storage
  storeTask(taskInput.value)

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

function storeTask(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}


function removeTaskFromStorage(taskLi){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task, index){
    if(taskLi.textContent === task){
      tasks.splice(index, 1)
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    let task = e.target.closest('li')
    removeTaskFromStorage(task)
    task.remove()
  }
}

function clearTasks(e){
  // taskList.innerHTML = ''
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
    removeTaskFromStorage(taskList.firstChild)
  }
}

function filterTasks(e){
  // Capture the text from the filter input field
  const text = e.target.value.toLowerCase()

  // Grab all <li>s that can be filtered and loop through them
  document.querySelectorAll('.collection-item').forEach(function(task){
    // Extract the text out of the li
    const item = task.firstChild.textContent

    // Unless the first occurrence of the input text never appears
    // in the li content, display the li
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}
