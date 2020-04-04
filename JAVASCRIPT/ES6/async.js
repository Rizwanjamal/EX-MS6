// Async Functions //

// Example 1 - Custome Made Promise 
let main1 = () => {
  return new Promise((resolve, reject) => {
    // let response = {status: 200, message: 'successfully called'}
    let response = {status: 400, message: 'Server Error'}
    setTimeout(() => {
      reject(response)
    }, 5000);
  })
}
console.log('start')
// main1()
//   .then(res => console.log('response :', res))
//   .catch(err => console.log('err :', err))
// console.log('end')

//////////////////////////////////////////////////

// Example 2
let main2 = () => {
  return new Promise((resolve, reject) => {
    resolve(fetch('https://jsonplaceholder.typicode.com/todos/6'))
  })
}
// console.log('start')
// main2()
//   .then(res => res.json())
//   .then(data => console.log('data :', data))
//   .catch(err => console.log('err :', err))
// console.log('end')


//////////////////////////////////////////////////



// Example 3 - Calling External API's
let main3 = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
}

main3()
  .then(res => res.json())
  .then(data => console.log('data :', data))
  .catch(err => console.log('err :', err))


//////////////////////////////////////////////////

// Example 4 - Making Function A Promise Using Async
async function getName () {
  return 'Rizwan'
}

// let name = getName().then(data => console.log(data))
// console.log(name); // A Problem is facing here is that it's showing me a promise in pending state instead of an actual value


// Example 5 - Waiting for completion of Promise using Await keyword
async function logName() {
  let name = await getName().then(data => data) // Rizwan
  console.log('name :', name)
  console.log('name :', name)
  console.log('name :', name)
  console.log('name :', name)
}
// logName()


// Example 6 - Waiting for completion of Promise using Await keyword
let getUsers = async () => {
  let users = await fetch('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json())
  return users;
}

// Here you can see how we used try catch blocks for catching error
let onButtonClick = async () => {
  try {
    let users = await getUsers()
    console.log('users :', users)
    let modifiedUsers = users.map(data => {
      data.className = 'EX-MS6'
      return data
    })
    console.log('modifiedUsers :', modifiedUsers)
  } catch(err) {
    console.log('Err :', err)
  }
}

onButtonClick()