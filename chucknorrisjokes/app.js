// 1. Listen for a click
document.querySelector('.get-jokes').addEventListener('click', getJokes);

// 2. Set up callback
function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  // 2a. Instantiate a request
  const xhr = new XMLHttpRequest();

  // 2b. Give instructions on what endpoint to open
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  // 2c. Set up the behavior to happen when the response loads
  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';

      // build the joke html from the response
      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }
      // Insert the joke html into the dom
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  // 2d. Send the request
  xhr.send();

  // prevent the form from submitting via http
  e.preventDefault();
}//end callback
