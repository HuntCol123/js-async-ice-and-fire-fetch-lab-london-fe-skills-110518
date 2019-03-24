
//get the data & call a function
function fetchAstros() {
  fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(json => renderAstros(json.people))
}


function fetchGOT () {
  fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json =>renderBooks(json))
}

//perform an action with the data

function renderAstros(json) {
      console.dir(json)
//const main = document.querySelector('main')
  json.forEach(astroPeople => {
    document.write(`<h2> ${astroPeople.name} is an astronaut currently on board the ${astroPeople.craft} </h2>`)

//    const h2 = document.createElement('h2')
//    h2.innerHTML = `<h2> ${astroPeople.name} is an astronaut currently on board the ${astroPeople.craft} </h2>`
//    main.appendChild(h2)

  }
  )
}

function renderBooks(json) {
      console.dir(json)
//const main = document.querySelector('main')
  json.forEach(book => {
    document.write(`<h2> ${book.name} is a book written by <em>${book.authors}</em> </h2>`)
    
  })
}

//listen for page loaded to start the flow
document.addEventListener('DOMContentLoaded', function() {
  fetchAstros()
  fetchGOT()
})
