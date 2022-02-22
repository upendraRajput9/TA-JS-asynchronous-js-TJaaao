let input = document.querySelector(`input`)
let photoGallery = document.querySelector(`div`)

function fetch(url){
    return new Promise((resolve,reject)=>{
    if(event.keyCode===13){
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`,url)
        xhr.onload= function (){
            let images = JSON.parse(xhr.response)
            for(let i=0;i<30;i++){
                let img = document.createElement(`img`);
                img.src= images.results[i].urls.small
                photoGallery.append(img)
            }
           
        }
    
        xhr.send()
        event.target.value=``
    }
})
}


function handler(event){
    photoGallery.innerHTML=``
    let init = fetch(`https://api.unsplash.com/search/photos?page=1&query=${event.target.value}&per_page=30&client_id=FeJKuoxfAeZQy-N7rhN4BWxT2MXrJ4yNKjCqMwdOHYs`
    ).then((data)=>{
        console.log(data.results)
    }).catch((error)=>alert(`check your internet connection`))    
    }

input.addEventListener(`keyup`,handler)


