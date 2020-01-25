// Write a program that ask user to enter number of month and show the month in words. For
// example December.

var monthInput = prompt("Enter Number Of Month");
// TODO: Add validation here

function getMonth(num) {
  var months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[num - 1];
}

alert(getMonth(monthInput));
