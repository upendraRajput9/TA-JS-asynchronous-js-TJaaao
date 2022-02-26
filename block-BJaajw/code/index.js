let section = document.querySelector(`section`)
let form = document.querySelector(`form`)
let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`
let select = document.querySelector(`select`)
let allNews = []

function displayUI(data) {
  data.forEach((obj) => {
    let article = document.createElement(`article`)
    let div = document.createElement(`div`)
    let h2 = document.createElement(`h2`)
    h2.innerText = obj.newsSite
    let p = document.createElement(`p`)
    p.innerText = obj.summary
    let a = document.createElement(`a`)
    a.innerText = `Read More`
    a.setAttribute(`href`, obj.url)
    a.setAttribute(`target`, '_blank')
    let figure = document.createElement(`figure`)
    let img = document.createElement(`img`)
    figure.append(img)
    img.src = obj.imageUrl
    div.append(h2, p, a)
    article.append(figure, div)
    section.append(article)
  })
}

fetch(url)
  .then((res) =>{
    if(!res.ok){
        throw new Error(`Error Happen: ${res.status}`)
    }  
    return res.json()})
  .then((data) => {
    allNews = data
    displayUI(data)
  })
  .catch((error)=>{section.innerText=error})

select.addEventListener('change', (event) => {
  section.innerHTML = ``
  let source = event.target.value
  if(source===`All sources`){
      displayUI(allNews)
  }else{
  let filterNews = allNews.filter((elm) => elm.newsSite.includes(source))
  displayUI(filterNews)
  }
})
// handler()
