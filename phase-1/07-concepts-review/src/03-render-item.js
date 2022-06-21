// Using the first candy, create a new <div> which shows the candy information as
// an <h3> for the name, an <img> of its image, and a <p> of its rating

// Add it to the '#candy-container' div

const firstCandy = candies[0]

const candyContainer = document.querySelector('#candy-container')

function renderCandy(candy) {
  const div = document.createElement('div')
  const name = document.createElement('h3')
  const img = document.createElement('img')
  const rating = document.createElement('p')

  name.textContent = candy.name
  img.src = candy.img_url
  rating.textContent = candy.rating

  div.append(name, img, rating)
  candyContainer.append(div)
}

// renderCandy(firstCandy)

// If you finish this quickly, do this for all the candies with a `.forEach`

candies.forEach(candy => renderCandy(candy))
