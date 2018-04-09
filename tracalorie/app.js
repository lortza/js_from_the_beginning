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
      {id: 0, name: "Steak dinner", calories: 1200},
      {id: 1, name: "Kraft dinner", calories: 500},
      {id: 2, name: "Pizza", calories: 200},
      {id: 3, name: "Cookie", calories: 400},
      {id: 4, name: "Eggs", calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    getItems(){
      return data.items
    },
    logData: function(){
      return data
    }
  }
})()

// UI Controller
const UIController = (function(){
  console.log('UIController');
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
      document.querySelector('#item-list').innerHTML = html
    }
  }

})()


// App Controller
const App = (function(ItemController, UIController){
  console.log('App controller')
  return {
    init: function(){
      console.log('Initializing app...')
      // Fetch items from data structure
      const items = ItemController.getItems()
      // Populate item list upon init
      UIController.populateItemsList(items)
    }
  }
})(ItemController, UIController)

App.init()
