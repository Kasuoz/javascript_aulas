//SLICE extracts a section of a string and returns it as a new string, without modifying the original

let fullName = "Marcelo Kasuo";
let firstName;
let lastName;


firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

document.getElementById("firstName").innerHTML = "First name: " + firstName;
document.getElementById("lastName").innerHTML = "Last name: " + lastName;