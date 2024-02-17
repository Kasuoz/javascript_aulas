let firstName = "marcelo"; //string
let age = 21; //number
let student = true; //boolean

console.log("Hello", firstName);
console.log("you are", age);
console.log("Enrolled status:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "you are " + age;
document.getElementById("p3").innerHTML = "Enrolled status: " + student;