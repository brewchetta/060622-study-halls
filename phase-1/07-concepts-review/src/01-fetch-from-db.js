// For this first challenge you'll need to fetch the data from the database, parse it, and
// then console.log it

fetch('http://localhost:4000/candies')
.then(res => res.json())
.then(data => console.log('candies: ', candies))
