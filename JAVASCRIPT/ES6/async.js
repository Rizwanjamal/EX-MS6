// Async Functions //

// Example 1 - Custome Made Promise 
// let main = () => {
//   return new Promise((resolve, reject) => {
//     // let response = {status: 200, message: 'successfully called'}
//     let response = {status: 400, message: 'Server Error'}
//     setTimeout(() => {
//       reject(response)
//     }, 5000);
//   })
// }
// console.log('start')
// main()
//   .then(res => console.log('response :', res))
//   .catch(err => console.log('err :', err))
// console.log('end')

//////////////////////////////////////////////////

// Example 2
// let main = () => {
//   return new Promise((resolve, reject) => {
//     resolve(fetch('https://jsonplaceholder.typicode.com/todos/6'))
//   })
// }
// console.log('start')
// main()
//   .then(res => res.json())
//   .then(data => console.log('data :', data))
//   .catch(err => console.log('err :', err))
// console.log('end')


//////////////////////////////////////////////////



// Example 3 - Calling External API's
let main = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
}

main()
  .then(res => res.json())
  .then(data => console.log('data :', data))
  .catch(err => console.log('err :', err))
