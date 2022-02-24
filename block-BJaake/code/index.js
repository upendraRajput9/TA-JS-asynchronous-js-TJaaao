
let section = document.querySelector(`section`)
let form = document.querySelector(`form`)
let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`
function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(`GET`, url)
    xhr.onload = () => resolve(JSON.parse(xhr.response))
    xhr.onerror = () => reject(`Something wrong`)
    xhr.send()
  })
}

function displayUI(data) {
  data.forEach((obj) => {
    let article = document.createElement(`article`)
    let div = document.createElement(`div`)
    let h2 = document.createElement(`h2`)
    h2.innerText = obj.newsSite
    let p = document.createElement(`p`)
    p.innerText = obj.summary
    let a = document.createElement(`a`)
    a.innerText = `Read More`;
    a.setAttribute(`href`,obj.url)
    a.setAttribute(`target`,"_blank")
    let figure = document.createElement(`figure`)
    let img = document.createElement(`img`)
    figure.append(img)
    img.src = obj.imageUrl
    div.append(h2, p, a)
    article.append(figure, div)
    section.append(article)
  })
}
var select = document.getElementById('newsType')
function handler(event) {
  
  var event = select.options[select.selectedIndex]
  console.log(event.value)
  section.innerHTML = ``
  fetch(url)
    .then((data) => {
      if (event.value === `All sources`) {
        displayUI(data)
      } else {
        let filterData = data.filter((elm) =>
          elm.newsSite.includes(event.value),
        )

        displayUI(filterData)
      }
    })
    .catch(console.log)
}
select.setAttribute("onchange", "handler()");
handler()

