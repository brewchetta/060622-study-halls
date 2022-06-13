// DELIVERABLE 1!!!!

// make the fetch request itself
fetch('http://localhost:3000/games')
// convert it to a readable datatype (res => res.json)
.then(res => res.json())
// then games => showGames(games)
.then((games) => {
  showGames(games)
  showGameDetails(games[0])
})

// showGames ---> take games and populate them on the DOM
function showGames(games) {
  // iterate here
  games.forEach(game => {
    // make variables for what we need and add them to the DOM
    // MAKE AN H5 with createElement
    const h5 = document.createElement('h5')
    // give that h5 its info
    h5.textContent = `${game.name} (${game.manufacturer_name})`
    // add it to ________
    const gameList = document.querySelector('.game-list')
    gameList.append(h5)

    addClickEventForGameDetails(h5, game)
  })

}

// DELIVERABLE 2

function showGameDetails(game) {
  // show the image
  const pictureContainer = document.querySelector('#detail-image')
  pictureContainer.src = game.image
  // show the title
  const nameOfGame = document.querySelector('#detail-title')
  nameOfGame.textContent = `${game.name} (${game.manufacturer_name})`
  // show high score
  const highScoreArea = document.querySelector('#detail-high-score')
  highScoreArea.textContent = game.high_score
}

// DELIVERABLE 3

function addClickEventForGameDetails(h5, game) {
  h5.addEventListener('click', (event) => showGameDetails(game))
}

// DELIVERABLE 4

const highScoreForm = document.querySelector('#high-score-form')
highScoreForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const detailHighScore = document.getElementById('detail-high-score')
  const scoreInput = document.getElementById('score-input')

  // console.log('event.target["score-input"]', event.target[0])
  // console.log('detailHighScore: ', detailHighScore)
  // console.log('scoreInput: ', scoreInput)

  detailHighScore.textContent = scoreInput.value
  highScoreForm.reset()
})
