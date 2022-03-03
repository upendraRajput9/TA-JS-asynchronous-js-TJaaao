(function(){
let input = document.getElementById(`input`)
let ul = document.querySelector(`ul`)
let url =`https://basic-todo-api.vercel.app/api/todo`
let fetchData=fetch(url).then(res=>res.json())
fetchData.then((data)=>createUI(data))

//Create todo
function createUI(data){
data.todos.forEach(elm=>{
let li = document.createElement(`li`);
let checkbox = document.createElement(`input`);
checkbox.type="checkbox"
checkbox.value=elm.isCompleted
checkbox.setAttribute(`value`,elm._id)
checkbox.addEventListener(`change`,todoPut)
let span =document.createElement(`span`);
span.innerText=elm.title
let closeBtn=document.createElement(`button`);
closeBtn.setAttribute(`value`,elm._id)
closeBtn.innerText=`❌`;
closeBtn.addEventListener(`click`,todoDelete)

li.append(checkbox,span,closeBtn)
ul.append(li)
})
}



//
input.addEventListener(`keyup`,addTodo)
function addTodo(event){
    if(event.keyCode==13){
   
let todoData={
    "todo": {
      "title": event.target.value,
      "isCompleted": false
    }
  }
  todoPost(todoData)
  event.target.value=``;
  
}
}

//FOR POST
function todoPost(data){
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      
    }
      

//FOR PUT
function todoPut(event){
   let data= {
        "todo": {
          "isCompleted": event.target.checked
        }
      }
    console.log(event.target.checked)
    fetch(url+`/`+event.target.value, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)// body data type must match "Content-Type" header
      })
    }
      
//For DELETE
function todoDelete(event){
    
    fetch(url+`/`+event.target.value, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
         // body data type must match "Content-Type" header
      })
      event.target.parentElement.style.display="none";
    }
      

})()
