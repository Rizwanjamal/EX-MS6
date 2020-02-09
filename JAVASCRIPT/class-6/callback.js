// Callback Function 1
function calculate(num1, num2, sum) {
  var abc = function() {
    console.log("calling inside function");
  };
  return sum(num1, num2, abc);
}

function doSum(a, b, cb) {
  console.log("calling callback 1");
  cb();
  return a + b;
}

var sum = calculate(2, 3, doSum);

// Callback Function 2
function doHomeWork(cb) {
  alert("Start Working !");
  setTimeout(cb, 2000);
}

function callback() {
  alert("Done Work !");
}

doHomeWork(callback);
