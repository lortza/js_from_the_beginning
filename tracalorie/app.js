// Storage Controller


// Item Controller
const ItemController = (function(){
  console.log('ItemController')
  const Item = function(id, name, calories){
    this.id = id
    this.name = name
    this.calories = calories
  }

  const data = {
    items: [
      // {id: 0, name: "Steak dinner", calories: 1200},
      // {id: 1, name: "Kraft dinner", calories: 500},
      // {id: 2, name: "Pizza", calories: 200},
      // {id: 3, name: "Cookie", calories: 400},
      // {id: 4, name: "Eggs", calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    getItems(){
      return data.items
    },
    addItem(name, calories){
      // Create ID
      let ID;
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1
      } else {
        ID = 0
      }
      // Convert calories from string to integer
      calories = parseInt(calories)
      // Create new item
      newItem = new Item(ID, name, calories)
      data.items.push(newItem)
      return newItem
    },
    getItemById: function(id){
      let found = null
      data.items.forEach(function(item){
        if(item.id === id){
          found = item
        }
      })
      return found
    },
    setCurrentItem: function(item){
      data.currentItem = item
    },
    getCurrentItem: function(){
      return data.currentItem
    },
    getTotalCalories: function(){
      let total = 0
      data.items.forEach(function(item){
        total += item.calories
      })
      data.totalCalories = total
      return data.totalCalories
    },
    logData: function(){
      return data
    }
  }
})()// ends ItemController

// UI Controller
const UIController = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCaloriesDisplay: '.total-calories'
  }
  return {
    populateItemsList: function(items){
      let html = ''
      items.forEach(function(item){
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="fa fa-pencil edit-item"></i>
          </a>
        </li>
        `
      })
      // Insert items into DOM
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
    getItemInput: function(){
      return {
        name: document.querySelector(UISelectors.itemNameInput),
        calories: document.querySelector(UISelectors.itemCaloriesInput)
      }
    },
    addListItem: function(item){
      // Unhide the empty list placeholder
      document.querySelector(UISelectors.itemList).style.display = 'block'
      // create li element
      const li = document.createElement('li')
      li.className = 'collection-item'
      li.id = `item-${item.id}`
      li.innerHTML = `
      <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="fa fa-pencil edit-item"></i>
      </a>
      `
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = ''
      document.querySelector(UISelectors.itemCaloriesInput).value = ''
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none'
    },
    showTotalCalories(calories){
      document.querySelector(UISelectors.totalCaloriesDisplay).textContent = calories
    },
    clearEditState: function(){
      UIController.clearInput()
      document.querySelector(UISelectors.addBtn).style.display = 'inline'
      document.querySelector(UISelectors.updateBtn).style.display = 'none'
      document.querySelector(UISelectors.deleteBtn).style.display = 'none'
      document.querySelector(UISelectors.backBtn).style.display = 'none'
    },
    showEditState: function(){
      document.querySelector(UISelectors.addBtn).style.display = 'none'
      document.querySelector(UISelectors.updateBtn).style.display = 'inline'
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
      document.querySelector(UISelectors.backBtn).style.display = 'inline'
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemController.getCurrentItem().name
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemController.getCurrentItem().calories
      UIController.showEditState()
    },
    getSelectors: function(){ return UISelectors }
  }
})()//ends UIController


// App Controller
const App = (function(ItemController, UIController){
  const loadEventListeners = function(){
    const UISelectors = UIController.getSelectors()
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick)
  }
  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input
    const input = UIController.getItemInput()
    // Check for name and calorie input
    if(input.name !== '' && input.calories !== ''){
      // Add food to list
      const newItem = ItemController.addItem(input.name.value, input.calories.value)
      // Add item to UI
      UIController.addListItem(newItem)
      // Clear form fields
      UIController.clearInput()
      // Get total calories
      const totalCalories = ItemController.getTotalCalories()
      UIController.showTotalCalories(totalCalories)
    }
    e.preventDefault()
  }

  const itemEditClick = function(e){
    if(e.target.classList.contains('edit-item')){
      // Get li id
      const listId = e.target.parentNode.parentNode.id
      const listIdArray = listId.split('-')
      const id = parseInt(listIdArray[1])
      //Get item
      const itemToEdit = ItemController.getItemById(id)
      ItemController.setCurrentItem(itemToEdit)
      UIController.addItemToForm(itemToEdit)
    }
    e.preventDefault()
  }


  // Public Methods
  return {
    init: function(){
      console.log('Initializing app...')
      // Set initial state
      UIController.clearEditState()
      // Fetch items from data structure
      const items = ItemController.getItems()

      // Check if any items
      if(items.length === 0){
        UIController.hideList()
      } else {
        // Populate item list upon init
        UIController.populateItemsList(items)
      }
      // Get total calories
      const totalCalories = ItemController.getTotalCalories()
      UIController.showTotalCalories(totalCalories)

      // Load event listeners
      loadEventListeners()
    }
  }
})(ItemController, UIController)

App.init()
