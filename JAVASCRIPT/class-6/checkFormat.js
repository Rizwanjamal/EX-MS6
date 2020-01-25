//Write a program that tests whether it's before noon
//and alert “Its AM” else “its PM”

var userInput = prompt("enter value ?", "10");
if (userInput >= 24) {
  alert("Invalid time !");
}

function checkFormat(num) {
  return num >= 12 ? "PM" : "AM";
}

alert(checkFormat(userInput));
