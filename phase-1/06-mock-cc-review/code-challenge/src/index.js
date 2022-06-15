const menuArea = document.querySelector('#ramen-menu')
const detailImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const ramenRestaurant = document.querySelector('.restaurant')
const ratingDisplay = document.querySelector('#rating-display')
const commentDisplay = document.querySelector('#comment-display')
const newRamenForm = document.querySelector('#new-ramen')

// advanced delivs
const editRamenForm = document.querySelector('#edit-ramen')
const editRating = document.querySelector('#edit-rating')
const editComment = document.querySelector('#edit-comment')

let ramenObj = {}

fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(ramenData => {
  showImageList(ramenData)
  showRamenDetailInfo(ramenData[0])
})

function showImageList(ramensData) {
  ramensData.forEach(ramen => createRamenImage(ramen))
}

function createRamenImage(ramenObj) {
  const img = document.createElement('img')
  img.src = ramenObj.image
  img.addEventListener('click', () => showRamenDetailInfo(ramenObj))
  menuArea.append(img)
}

function showRamenDetailInfo(ramen) {
  // set src, name, location, rating, comment
  ramenObj = ramen
  detailImage.src = ramen.image
  ramenName.textContent = ramen.name
  ramenRestaurant.textContent = ramen.restaurant
  ratingDisplay.textContent = ramen.rating
  commentDisplay.textContent = ramen.comment
}

newRamenForm.addEventListener('submit', event => {
  event.preventDefault()

  ramenObj = {
    name: document.querySelector('#new-name').value,
    restaurant: document.querySelector('#new-restaurant').value,
    image: document.querySelector('#new-image').value,
    rating: document.querySelector('#new-rating').value,
    comment: document.querySelector('#new-comment').value
  }

  createRamenImage(ramenObj)
  showRamenDetailInfo(ramenObj)

  newRamenForm.reset()
})

editRamenForm.addEventListener('submit', event => {
  event.preventDefault()

  ramenObj.rating = editRating.value
  ramenObj.comment = editComment.value

  showRamenDetailInfo(ramenObj)
})
