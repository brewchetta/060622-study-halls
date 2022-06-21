// For this first challenge you'll need to fetch the data from the database, parse it, and
// then console.log it

// Once you've saved the global variable, you should be able to see all your candies
// in the dev tools console

fetch('http://localhost:4000/candies')
.then(res => res.json())
.then(data => console.log('candies: ', candies))
