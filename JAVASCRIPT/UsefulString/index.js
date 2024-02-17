let username = "Marcelo";
let phoneNumber = "123-456-7890";


console.log(username.length); //lenght of a string
console.log(username.charAt(0)); //which letter of the string (starts with 0)
console.log(username.indexOf("o")); //shows the first occurrence of a certain letter in a string
console.log(username.lastIndexOf("e")); // same as above but last occurrence

//username = username.trim // deletes empty spaces before or after any letter
username = username.toUpperCase(); //turns letter to uppercase
username = username.toLowerCase(); //lowercase

console.log(username);

phoneNumber = phoneNumber.replaceAll("-", "/"); //replaces the first character with the last one in the parenthesis
console.log(phoneNumber);