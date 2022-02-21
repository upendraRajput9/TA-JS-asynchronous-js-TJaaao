let input = document.querySelector(`input`)
let photoGallery = document.querySelector(`div`)
function handler(event){
    let url =`https://api.unsplash.com/search/photos?page=1&query=${event.target.value}&per_page=30&client_id=FeJKuoxfAeZQy-N7rhN4BWxT2MXrJ4yNKjCqMwdOHYs`
    if(event.keyCode===13){
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`,url)
        xhr.onload= function (){
            let images = JSON.parse(xhr.response)
            console.log(images.results[0].urls.small)
            for(let i=0;i<30;i++){
                let img = document.createElement(`img`);
                img.src= images.results[i].urls.small
                photoGallery.append(img)
            }
           
        }
    
        xhr.send()
        event.target.value=``
    }
    
    
    }

input.addEventListener(`keyup`,handler)



//https://api.unsplash.com/search/photos?page=1&query=`event.value`&per_page=9&client_id=FeJKuoxfAeZQy-N7rhN4BWxT2MXrJ4yNKjCqMwdOHYs

// FeJKuoxfAeZQy-N7rhN4BWxT2MXrJ4yNKjCqMwdOHYs