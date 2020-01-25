// Write a JavaScript function that checks whether a
//passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

var text = prompt("Enter String Value ?");

function isPalindrome1(string) {
  var reverseString = "";
  for (var i = string.length; i >= 0; i--) {
    reverseString += string.charAt(i);
  }
  console.log("reverseString :", reverseString);
  return reverseString === string;
}

// alert("isPalindrome ? " + isPalindrome1(text));

// Logic
// reverseString = 'm a d a M'
// Madam -> m a d a M
// Madam === madaM

function isPalindrome2(string) {
  var reverseString = string
    .split("")
    .reverse()
    .join("");
  return string === reverseString;
}

alert("isPalindrome ? " + isPalindrome2(text));
