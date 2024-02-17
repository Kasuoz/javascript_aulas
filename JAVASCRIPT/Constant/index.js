const PI = 3.14159;
let radius;
let circunference;


document.getElementById("myButton").onclick = function(){

    radius = document.getElementById("myText").value;
    radius = Number(radius);
    //PI = 420.69; CAUSES AN ERROR BECAUSE CONST CANT BE CHANGED
    circunference = 2 * PI * radius;
    console.log("The circunference is: ", circunference);
}
