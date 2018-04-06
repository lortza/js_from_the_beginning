const github = new Github
const ui = new UI

ui.searchBox.addEventListener('keyup', (e) => {
  const input = e.target.value
  if(input === ''){
    ui.clearProfile
  } else {
    github.getUserData(e.target.value)
      .then(data => ui.paint(data))
      .catch()

  }
})

