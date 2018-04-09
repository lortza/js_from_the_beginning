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
    logData: function(){
      return data
    }
  }
})()

// UI Controller
const UIController = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
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
    getSelectors: function(){ return UISelectors }
  }

})()


// App Controller
const App = (function(ItemController, UIController){
  const loadEventListeners = function(){
    const UISelectors = UIController.getSelectors()
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit)
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
    }


    e.preventDefault()
  }

  // Public Methods
  return {
    init: function(){
      console.log('Initializing app...')
      // Fetch items from data structure
      const items = ItemController.getItems()

      // Check if any items
      if(items.length === 0){
        UIController.hideList()
      } else {
        // Populate item list upon init
        UIController.populateItemsList(items)
      }
      // Load event listeners
      loadEventListeners()
    }
  }
})(ItemController, UIController)

App.init()
