- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.
```js
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 1000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 3000)), //3
    new Promise(resolve => setTimeout(() => resolve(4), 4000)) , //4
  ]).then(console.log); 
l
```
- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.
```js
let userName=["nnnkit","prank7","roji","piranha","gaearon"]
let userData = Promise.all(userName.map(user=>{
    return fetch(`https://api.github.com/users/${user}`)
    .then((res)=>res.json())
})).then((users)=>{
    users.forEach((user)=>console.log(user.followers))})
  ```
- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow
```js
Promise.race([
    fetch(`https://random.dog/woof.json`)
    .then((res)=>res.json()),
    fetch(`https://aws.random.cat/meow`)
    .then((res)=>res.json())
  ]).then((obj)=>console.log(obj));

```
- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

Promise.allSettled([one,two,three]).then((data)=>console.log(data))
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);
/*output
['Arya','Sam',{name:'John'}]
it take 1sec time will it take for the promise to resolve?

*/
```
