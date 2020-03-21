function abc () {
  let name = 'rizwan'
  console.log('name :', name)
  {
    let name = 'salman'
    console.log('name :', name)  
  }
  console.log('name :', name)  
}

// abc()

////////// Function ///////////
// function fullName (firstName, lastName) {
//   console.log('FullName is :', firstName + ' ' +lastName)
// }

let fullName = (firstName, lastName) => {
  console.log(`FullName is : ${firstName} ${lastName}`)
}

// fullName('Rizwan', 'Jamal')

////////// Regular Function ////////////////////
let message = 'Bhaag Jaa !';

// function doWarningAlert(message) {
//   alert(message);
// }

// Making Rules Of Arrow Function
// 1- It will be a anonymous function
// 2- It will be assigned to a variable (let/var)
// 3- 2 things in which es6 required paranthesis in arrow function
    // 1- 0 Arguments/Parameter
    // 2 - More than 1
// 4- If we have a single line statement in function body,
// so we can remove body curly brackets as well.
// 5- If not curly brackets are there in a body of arrow function, so no need for the 'return' keyword 

let doWarningAlert = message => {
  alert(message); 
  console.log('first'); 
  console.log('again')
};

// doWarningAlert(message)

let studentNames = ['Daniyal', 'Aayaan', 'Fayyaz', 'Usman']

let filteredStudents = names => names.filter(a => a.endsWith('an'))

// filteredStudents(studentNames)


// Destructuring // 

car = {
  name: 'Mira',
  model: 2019,
  color: 'Red'
}

// var name = car.name   // Mira
// var model = car.model // 2019
// var color = car.color // Red

/////////////////

let {name: brand, model, color} = car
console.log('Brand :', brand)
console.log('color :', color)
console.log('model :', model)

carNames = ['Mira', 'Cultus', 'Honda']
let [first, second, third] = carNames
console.log('second :', second)

