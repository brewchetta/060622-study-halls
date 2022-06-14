// global vars
const movieList = document.querySelector('#movie-list')
const movieTitle = document.querySelector('#title')
const movieDescription = document.querySelector('#description')
const releaseYear = document.querySelector('#year-released')
const movieImage = document.querySelector('#detail-image')
const watchedButton = document.querySelector('#watched')
const bloodAmount = document.querySelector('#amount')
const bloodForm = document.querySelector('#blood-form')
const bloodInput = document.querySelector('#blood-amount')

let selectedMovie = {}

watchedButton.addEventListener('click', event => {
  if (selectedMovie.watched) {
    watchedButton.textContent = 'Unwatched'
    selectedMovie.watched = false
  } else {
    watchedButton.textContent = 'Watched'
    selectedMovie.watched = true
  }
})


// fetch movies
fetch('http://localhost:3000/movies')
.then(response => response.json())
.then(movies => {
  addMovies(movies)
  loadDetails(movies[0])
})


// add movies on response
function addMovies(movies) {
  movies.forEach(movie => {
    const img = document.createElement('img')
    img.src = movie.image
    img.addEventListener( 'click', (event) => loadDetails(movie) )
    movieList.append(img)
  })
}


// load details for a movie
function loadDetails(movie) {
  selectedMovie = movie

  movieTitle.textContent = movie.title
  movieDescription.textContent = movie.description
  releaseYear.textContent = movie.release_year
  movieImage.src = movie.image
  movieImage.alt = movie.title
  bloodAmount.textContent = movie.blood_amount

  if (movie.watched) {
    watchedButton.textContent = 'Watched'
  } else {
    watchedButton.textContent = 'Unwatched'
  }
}

bloodForm.addEventListener('submit', event => {
  event.preventDefault()

  selectedMovie.blood_amount = selectedMovie.bloodAmount + parseInt(bloodInput.value)
  bloodAmount.textContent = selectedMovie.blood_amount

  bloodForm.reset()

  // bloodAmount.textContent = +bloodInput.value + +bloodAmount.textContent
})
