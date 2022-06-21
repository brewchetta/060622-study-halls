// When the '#candy-form' form is submitted, add the submitted candy to the `#candy-container`

const candyForm = document.querySelector('#candy-form')

candyForm.addEventListener('submit', e => {
  e.preventDefault()

  console.log(candyForm);

  const newCandy = {
    name: candyForm[0].value,
    img_url: candyForm[1].value,
    rating: candyForm[2].value
  }

  renderCandy(newCandy)
})
