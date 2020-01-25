var total = 10;

function doSum() {
  var total = 15;
  console.log("total inside 1:", total);
  total = 20;
  console.log("total inside 2:", total);
}

console.log("total outside 1:", total);

doSum();
console.log("total outside after calling function :", total);
