(function(){
let booksCollection = document.querySelector(`.books-section`)
let characterSection = document.querySelector(`.characters`)
let ul = document.querySelector(`ul`)
let close = document.querySelector(`a`)
let url = `https://www.anapioficeandfire.com/api/books`

//spinner
function spinner(status = false) {
  if (status) {
    booksCollection.innerHTML = `<div class="spinner"><div class="donut"></div></div>`
  }
}

function characterSpinner(status = false) {
  if (status) {
    ul.innerHTML = `<div class="spinner"><div class="donut"></div></div>`
  } else {
    ul.firstChild.style.display = `none`
  }
}
//close

close.addEventListener(`click`, () => (characterSection.style.display = `none`))



//characterUI
function characterUI(characterData) {
  ul.innerHTML = ''
  characterSpinner(true)
  characterData.forEach((character) => {
    fetch(character)
      .then((res) => res.json())
      .then((data) => {
        characterSpinner()
        let li = document.createElement(`li`)
        li.innerText = `${data.name}(${data.aliases})`
        ul.append(li)
      })
  })
}

//BookUl
function booksUI(arrData) {
  booksCollection.innerHTML = ``
  arrData.forEach((elm) => {
    let article = document.createElement(`article`)
    let h2 = document.createElement(`h2`)
    h2.innerText = elm.name
    let cite = document.createElement(`cite`)
    cite.innerText = elm.authors[0]
    let button = document.createElement(`button`)
    let characters24 = elm.characters.slice(0, 24)
    button.addEventListener(`click`, () => {
      characterUI(characters24)
      characterSection.style.display = `block`
    })

    // button.onclick=characterUI()
    button.innerText = `Show Charaacter (${elm.characters.length})`
    article.append(h2, cite, button)
    booksCollection.append(article)
  })
}


function init() {
  spinner(true)
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error Happen: ${res.status}`)
      }
      return res.json()
    })
    .then((booksData) => {
      booksUI(booksData)
    })
    .catch((error) => errorMsg(error))
    .finally(() => spinner())
}

if (navigator.onLine) {
  init()
} else {
  errorMsg(`Check your internet connection!`)
}}
)()
