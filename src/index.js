const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit', (e) => {
    e.preventDefault(e)
    const input = document.querySelector('input#searchByID')

    fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })    
  })
}

document.addEventListener('DOMContentLoaded', init);