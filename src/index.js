const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault(e)
    const input = document.querySelector('input#searchByID')

  })
}

document.addEventListener('DOMContentLoaded', init);