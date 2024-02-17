// TEMPLATE LITERALS = DELIMITED WITH (')
//                     INSTEAD OF DOUBLE OR SINGLE QUOTES
//                     ALLOWS EMBEDDED VARIABLES AND EXPRESSIONS


let username = "kasuo";
let items = 3;
let total = 75;

//console.log("hello", username);
//console.log("you have", items, "items in your cart");
//console.log("your total is $", total);

//console.log(`hello ${username}`);
//console.log(`you have ${items} items in your cart`);
//console.log(`your total is $${total}`);

let text = 
`hello ${username} <br>
you have ${items} items in your cart <br>
your total is $${total}`;

console.log(text);

document.getElementById("myText").innerHTML = text;