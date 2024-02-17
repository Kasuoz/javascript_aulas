//EASY WAY with window prompt

//let username = window.prompt("What is your name?");
//console.log(username);

//HARD WAY HTML TEXTBOX

let username;
document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username; //change the text
}