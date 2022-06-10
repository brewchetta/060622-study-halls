// async js
// let chuckData;

setTimeout(() => { console.log('I am asynchronous!')}, 1000)

console.log('heya! I am synchronous!')

// fetch gets information from a website or API
// fetch('https://api.chucknorris.io/jokes/random')
// .then(response => response.json())
// .then(data => {
//   chuckData = data
//   const jokeP = document.createElement('p')
//   jokeP.textContent = chuckData.value
//   document.body.append(jokeP)
// })
// .then(response => console.log(response))

// console.log('all sorts of synchronous JS')

const jokeButton = document.querySelector('#joke-button')

jokeButton.addEventListener('click', () => {

  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => {
    console.log('response: ', response)
    return response.json()
  })
  .then(data => {

    // const jokeP = document.createElement('p')
    const jokeP = document.querySelector('#joke-area')
    jokeP.textContent = data.value
    // document.body.append(jokeP)

  })

})
