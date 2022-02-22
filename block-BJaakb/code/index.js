let searchElm = document.querySelector(`input`)
let photoGallery = document.querySelector(`div`)
let url = `https://api.unsplash.com/photos/?client_id=FeJKuoxfAeZQy-N7rhN4BWxT2MXrJ4yNKjCqMwdOHYs`
let getSearchURL = (query) =>
  `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=FeJKuoxfAeZQy-N7rhN4BWxT2MXrJ4yNKjCqMwdOHYs`

function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(`GET`, url)
    xhr.onload = () => resolve(JSON.parse(xhr.response))
    xhr.onerror = () => reject(`Something wrong`)
    xhr.send()
  })
}

function displayImage(images) {
  photoGallery.innerHTML = ``
  images.forEach((image) => {
    let li = document.createElement(`li`)
    let img = document.createElement(`img`)
    img.src = image.urls.small
    li.append(img)
    photoGallery.append(li)
  })
}
fetch(url)
  .then(displayImage)
  .catch((error) => console.log(error))
function handler(event) {
  if (event.keyCode === 13 && searchElm.value) {
    fetch(getSearchURL(searchElm.value)).then((searchResult) => {
      displayImage(searchResult.results).catch((error) => console.log(error))
    })
    searchElm.value = ``
  }
}
searchElm.addEventListener(`keyup`, handler)
