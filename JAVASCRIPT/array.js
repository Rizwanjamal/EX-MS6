// Example-1
studentsNames = ["Saad", "Ahmed", "Ayyan", "Haziq"];
studentsNames.length; // 4

studentsNames.push("Haziq ka bhai");
studentsNames.pop(); //Haziq ka bhai

// Example-2
students = [
  {
    name: "Rizwan",
    id: "1",
    contact: "021xxx"
  },
  {
    name: "Rizwan",
    id: "1",
    contact: "021xxx"
  },
  {
    name: "Rizwan",
    id: "1",
    contact: "021xxx"
  },
  {
    name: "Rizwan",
    id: "1",
    contact: "021xxx"
  }
];
students.push({
  name: "Salman",
  id: "5",
  contact: "0213xxx"
});

students.splice(1, 1, { name: "purana hogaya", id: "6", contact: "01232sxx" });
students.shift();

// Example-3
Array.from("rizwan"); //['r','i','z','w','a','n']

// Using its callback function
Array.from("rizwan", function(a) {
  console.log("current char", a);
  return a;
});

//Example-4
a = [2, 4, 6, 3];
a.some(function(a) {
  return a % 2 == 0;
}); // true

// Example-5
a = [2, 4, 6];
a.every(function(a) {
  return a % 2 == 0;
}); // true

// Example-6
a = "rizwan";
a.split("").map(function(a) {
  return a.toUpperCase();
});

// Example-7
a = [1, 2, 3];
a.concat([4, 5, 6]); // [1,2,3,4,5,6]

// Example-7
b = [1, 2, 3, 4, 5, 6];
b.copyWithin(3, 4, 6); // [1,2,3,5,6,6]

// Example-8
b = [1, 2, 3, 4, 5, 6];
b.includes(8); // false
b.includes(2); // true

// Example-9
a = "rizwan";
b = "";
a.split("").forEach(function(a) {
  b += a;
});
