



// // Setting up a promise for GET request
// class EasyHttp {
//   get(url){
//     // This function returns a new promise
//     return new Promise((resolve, reject) => {
//       // When it is called, it will fetch API results
//       fetch(url)
//       // When the results are available, it parses the data into json
//       .then(result => result.json())
//       // When the parsing is complete, it will return the data OR
//       .then(data => resolve(data))
//       // If there is a problem along the way, it will return an error
//       .catch(err => reject(err))
//     });
//   }
// }

// // Run the get function
// const http = new EasyHttp

// // Call the get function
// http.get('https://some_api_address_goes_here.com/users')
//   // if the promise resolves correctly, it will output the data to the console
//   .then(data => console.log(data))
//   // If the promise has an error, it will output the error to the console
//   .catch(err => console.log(err))




// function takesTwoSec(){
//   setTimeout( () => 'this took 2 seconds', 2000);
// }

// function returnAString(){
//   return 'this is a string'
// }

// function returnAmessage(msg){
//   return msg
// }

// function takesFiveSec(){
//   setTimeout(function() {
//     return 'this took 5 seconds'
//     }, 5000);
// }

// function takesSevenSec(){
//   setTimeout(function() {
//     return 'this took 7 seconds'
//     }, 7000);
// }



// function myPromiseFunction(post) {
//   return new Promise((resolve, reject) => {
//     console.log('New promise was just created')
//     setTimeout(function() {
//       console.log('this is inside the setTimeout');

//       const error = false;

//       if(!error) {
//         resolve(returnAString());
//       } else {
//         reject('Error: Something went wrong');
//       }
//     }, 2000);
//   });
//   console.log('this is after the promise, but in the function');
// }


// myPromiseFunction()
//   .then(response => console.log(response))
//   .catch(err => console.log(err))

// async function getUsers(){
//   // Await response of the fetch call
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')

//   // Only procees once it is resolved
//   const data = await response.json()

//   // Only proceed once second promise is resolved
//   return data
// }

// getUsers().then(users => console.log(users))



