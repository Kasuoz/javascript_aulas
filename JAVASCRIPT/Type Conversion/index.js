//user input is ALWAYS a string, meaning it wont work properly with a integer as seen below

/*let age = window.prompt("How old are you?");
age += 1;

console.log("Happy Birthday! You are", age, "years old");*/

//Type Conversion = change the datatype of a value to another (string, number, boolean)

let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");


let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("haha");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);