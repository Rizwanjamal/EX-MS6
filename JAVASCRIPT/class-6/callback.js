// Callback Function

function calculate (num1, num2, sum) {
  var abc = function () {
    console.log('calling inside function')
  }
  return sum(num1,num2, abc)
}

function doSum(a,b, cb) {
  console.log('calling callback 1');
  cb()
  return a + b;
}

var sum = calculate(2,3,doSum)