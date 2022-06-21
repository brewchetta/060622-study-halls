// When countdown button is clicked, reduce the number inside the button by one

// If you continue clicking, this should keep counting down until you hit 0

// When the countdown hits 0, remove the button from the page

const countdownButton = document.querySelector('#countdown-button')

let countdown = 10

countdownButton.addEventListener('click', () => {
  countdown -= 1
  countdownButton.textContent = countdown

  if (countdown < 1) {
    countdownButton.remove()
  }
})
