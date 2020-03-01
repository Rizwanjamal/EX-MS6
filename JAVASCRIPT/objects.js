var a = {
  name: "Rizwan", 
  class: "EX-MS9"
}

var b = a //Copy By Reference. If you will modify one object it will also change another

var b = Object.assign({}, a) //It will copy all the properties of a into new object & then will assign to b

//Constructor Function
function Student(name, className, id) {
  //  var this = {};
      this.name = name;
      this.class = className;
      this.id = id;
  // return this;
}

student1 = new Student("Asad", "EX-MS8", 321) //Creating new Instace of Student
student2 = new Student("Ahmed", "EX-MS8", 121) //Creating new Instace of Student

// Another Example With Prototype
function Student(firstName, lastName) {
  //  var this = {};
      this.firstName = firstName;
      this.lastName = lastName;
  //  return this;
}

// Prototype will be available with all the newly created instance of Student
Student.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName
};

var student1 = new Student("Rizwan", "Jamal")
student1.fullName() // Rizwan Jamal

var student2 = new Student("Salman", "Jamal")
student2.fullName() // Salman Jamal