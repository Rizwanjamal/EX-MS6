// Question 1
var data = [
  {
    country: "China",
    population: 1409517397
  },
  {
    country: "India",
    population: 1339180127
  },
  {
    country: "USA",
    population: 324459463
  },
  {
    country: "Indonesia",
    population: 263991379
  }
];

function filterData(data) {
  return data.filter(function(country) {
    return country.population >= 200000000;
  });
}
// filterData(data)

//Question 2
const students = ["hassan", "salman", "kamran", "rashid", "faizan", "noor"];

function filterStudents(data, str) {
  return data.filter(function(name) {
    // return name.slice(-2) == str
    // return name.subStr(-2) == str
    return name.endsWith(str);
  });
}
filterStudents(students, "an");

//Question 4
var fruits = [
  { name: "apples", quantity: 2 },
  { name: "bAnAnAs", quantity: 0 },
  { name: "Cherries", quantity: 5 }
];

function findFruit(fruits) {
  return fruits.find(function(fruit) {
    return fruit.name.toLowerCase() == userInput.toLowerCase();
  });
}
findFruit(fruits);

//Question 5
function doHomeWork(cb) {
  alert("Start Working !");
  setTimeout(cb, 2000);
}

function callback() {
  alert("Done Work !");
}

doHomeWork(callback);

//Question 6
const numbers = [1, 3, 4, 6, 8, 9];

const filterValues = () => {
  return numbers.filter(number => {
    return number % 2 == 0;
  });
};

//Question 7
studentsAge = [24, 22, 28, 19];
function ageFilter(age) {
  return age >= 20 && age <= 40;
}
var value = studentsAge.filter(ageFilter);

//Question 8
function CountrySearching(val) {
  return val === "India";
}
a = ["Pakistan", "India", "Japan"];
var result = a.find(CountrySearching);

//Question 9
var countries = ["Pakistan", "India", "Japan"];
function changeCase(countryName) {
  return countryName.toUpperCase();
}
var newCountriesList = countries.map(changeCase);
