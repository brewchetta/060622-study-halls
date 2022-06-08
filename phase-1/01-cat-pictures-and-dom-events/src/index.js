// here is the array of data you'll be using
const data = [
  { name: 'Hopeful Cat', image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { name: 'Cleocatra', image: 'https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg' },
  { name: 'Stately Cat', image: 'https://www.alleycat.org/wp-content/uploads/2021/02/344x361_FoundACat.jpg' },
  { name: 'Teacup Cat', image: 'https://image.posterlounge.com/img/products/500000/498253/498253_poster_l.jpg' },
  { name: 'Unicatacorn', image: 'https://fatcatart.com/wp-content/gallery/medieval-art/Lady-and-unicorn-cat-sight-w.jpg' },
  { name: 'Darth Catter', image: 'https://preview.redd.it/yi7kjfjxbx941.jpg?auto=webp&s=2fd1a4a0aa41c7ac765a3de340fb942f18fd3a10' },
  { name: 'Bionicat', image: 'https://cdn.shopify.com/s/files/1/0055/1826/2358/products/Elephant_Robotics_Marscat_White_grande.jpg?v=1646031053' },
  { name: 'Catburger', image: 'https://m.media-amazon.com/images/I/61iHacH4O1L._AC_SX425_.jpg' },
  { name: 'Grumpy Cat', image: 'https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg' }
]

// PSUEDOCODING: write out what you know in code --> not syntactically correct but gives the idea

// DELIVERABLE 1
// add a random cat when the add cat button is clicked

// get the container div
const catContainer = document.querySelector('#images-container')

// identify the button
const catButton = document.querySelector('#add-random-cat-button')

// listen for a click event on a button
catButton.addEventListener( "click", () => {
  // get a random image / random number generator
  const cat = data[ Math.floor( Math.random() * data.length ) ]

  // create the container the cat header / image / button will be in
  const div = document.createElement('div')
  div.className = 'cat-image'

  // create the header and assign it to a variable
  const h2 = document.createElement('h2')
  // assign text to the header
  h2.textContent = cat.name
  // append to html ->> into THE DIV
  div.append(h2)

  // create the image and assign it to a variable
  const img = document.createElement('img')
  // assign src to the image
  img.src = cat.image
  // append to html ->> into THE DIV
  div.append(img)

  // append the div to the cat image container
  catContainer.append(div)

  // DELIVERABLE 2
  // create the button that will remove the cat image etc
  const button = document.createElement('button')
  button.textContent = 'Remove Cat'
  div.append(button)

  // add an event listener for the button so it removes things when clicked
  button.addEventListener( 'click', () => {
    div.remove()
  } )

} )

// DELIVERABLE 3
// add a button to remove all cats from the container

// get the button we manually wrote into the html
const removeAllButton = document.querySelector( '#remove-all-cats' )

// add event listener that clears the html
removeAllButton.addEventListener( 'click', () => {
  // clear everything out of the cat container

  // version 1 - set innerHTML to empty string
  // catContainer.innerHTML = ''

  // version 2 - iterate through each child and use .remove on it
  Array.from( catContainer.childNodes ).forEach( child => child.remove() )
} )
