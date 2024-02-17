// ARRAY = THINK OF IT AS A VARIABLE THAT CAN STORE MULTIPLE VALUES

let fruits = ["apple", "orange", "peach"];

//fruits[1] = "coconut";

fruits.push("lemon");    // adds an element
fruits.pop();            // removes last element
fruits.unshift("mango"); // add element to beginning
fruits.shift();          // removes element from beginning

let length = fruits.length;
let index = fruits.indexOf("apple");


console.log(fruits);
console.log(length);
console.log(index);