let input = document.querySelector(`input`)
let profilePic = document.querySelector(`.profile-pic`)
let h2 = document.querySelector(`h2`)
let follower=document.querySelectorAll(`.follower`);
let following=document.querySelectorAll(`.following`)
let reload = document.querySelector(`button`)
let catPic=document.querySelector(`.catPic`)
//profile
function displayUI(data){
    profilePic.src=data.avatar_url
    h2.innerText=data.name
    console.log(data)
}


//following
function displayFollowingUI(data){
    following[0].src=data[0].avatar_url
    following[1].src=data[1].avatar_url
    following[2].src=data[2].avatar_url
    following[3].src=data[3].avatar_url
    following[4].src=data[4].avatar_url
// console.log(data)
}
function displayFollowerUI(data){
        follower[0].src=data[0].avatar_url
    follower[1].src=data[1].avatar_url
    follower[2].src=data[2].avatar_url
    follower[3].src=data[3].avatar_url
    follower[4].src=data[4].avatar_url
    // console.log(data)
}


function handleChange(event){
    event.preventDefault();
if(event.keyCode===13){
    let xhr =new XMLHttpRequest();
    xhr.open(`GET`,`https://api.github.com/users/${event.target.value}`)
xhr.onload = function (){
    let userData = JSON.parse(xhr.response);
    displayUI(userData)
}
xhr.onerror= function(){
    console.log(`something wrong..`)
}
xhr.send();

//for follower
let xhrfollower =new XMLHttpRequest();
xhrfollower.open(`GET`,`https://api.github.com/users/${event.target.value}/followers`)
xhrfollower.onload = function (){
    let userData = JSON.parse(xhrfollower.response);
    displayFollowerUI(userData)
}
xhrfollower.onerror= function(){
    console.log(`something wrong..`)
}
xhrfollower.send();


//for following
let xhrfollowing =new XMLHttpRequest();
xhrfollowing.open(`GET`,`https://api.github.com/users/${event.target.value}/following`)
xhrfollowing.onload = function (){
    let userData = JSON.parse(xhrfollowing.response);
    displayFollowingUI(userData)
}
xhrfollowing.onerror= function(){
    console.log(`something wrong..`)
}
xhrfollowing.send();


event.target.value=``
}



}
input.addEventListener(`keyup`,handleChange)

reload.addEventListener(`click`,()=>{
    console.log(`cghj`)
    let xhrcat=new XMLHttpRequest();
    xhrcat.open(`GET`,`https://api.thecatapi.com/v1/images/search?limit=1&size=full`)
    xhrcat.onload=function(){
    let imageData=JSON.parse(xhrcat.response);
    console.log(imageData)
    catPic.src=imageData[0].url
    }
    xhrcat.onerror= function(){
        console.log(`something`)
    }
    xhrcat.send()
})

