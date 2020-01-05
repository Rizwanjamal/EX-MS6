// Example-1
for (var i = 0; i <= 9; i++) {
  console.log("current value :", i);
}

// Example-2
var number = prompt("Enter Number ?", 5);
for (var i = 1; i <= 20; i++) {
  console.log(number + " x " + i + " = " + number * i);
}

// Example-3
var number = prompt("Enter Number ?", 5);
for (var i = 10; i >= 1; i--) {
  console.log(number + " x " + i + " = " + number * i);
}
// Example-4
var studentNames = ["Sufyan", "Mustafa", "Rafay", "Saad", "Maaz"];
console.log(studentNames.length); // 5
for (var i = 0; i < studentNames.length; i++) {
  console.log("student :", studentNames[i]);
}

for (var i = 0; i < studentNames.length; i++) {
  if (studentNames[i] == "Mustafa") {
    alert("Student Find !");
    break;
  } else {
    alert("Student Not Find At Current Position ! " + i);
  }
}

// Example-5
var studentNames = ["Sufyan", "Mustafa", "Rafay", "Saad", "Maaz"];
var studentFathersNames = [
  "Abdul Ghaffar",
  "Kamran",
  "Muhammad Sadiq",
  "Shabbir Hussain",
  "Muhammad Arshad"
];
// wrong solution
for (var i = 0; i < studentNames.length; i++) {
  for (var j = 0; j < studentFathersNames.length; j++) {
    console.log(
      "student full name :",
      studentNames[i] + studentFathersNames[i]
    );
  }
}

// correct solution
for (var i = 0; i < studentNames.length; i++) {
  for (var j = 0; j < studentFathersNames.length; j++) {
    if (i == j) {
      console.log(
        "student full name :",
        studentNames[i] + studentFathersNames[i]
      );
      break;
    }
  }
}

// Example-6
for (i = 0; i < studentNames.length; i++) {
  console.log("Student Name :", studentNames[i].toUpperCase());
}
