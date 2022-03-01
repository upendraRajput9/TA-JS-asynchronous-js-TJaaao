
let basicURL =`https://basic-todo-api.vercel.app/`
fetch(basicURL)
.then(res=>res.json())
.then(console.log)