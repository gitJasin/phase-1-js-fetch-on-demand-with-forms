const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
  })
}

document.addEventListener('DOMContentLoaded', init);