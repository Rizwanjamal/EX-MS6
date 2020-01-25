var countries = [
  "Pakistan",
  "India",
  "America",
  "South Africa",
  "Newzealand",
  "Bangladesh",
  "England"
];
var userInput = prompt("Enter country ?");

// if (countries.indexOf(userInput) >= 0) {
//     alert('Exist !')
// } else {
//     alert('Not Exist')
// }

function checkExistance(text) {
  return countries.includes(text);
}

alert(checkExistance(userInput));
