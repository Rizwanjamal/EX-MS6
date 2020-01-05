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
