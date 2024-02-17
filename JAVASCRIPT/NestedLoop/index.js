//NESTED LOOP == a loop inside another loop

let symbol = window.prompt("enter a symbol to use");
let rows = window.prompt("enter number of rows");
let column = window.prompt("enter number of columns");


for(i = 1; i <= rows; i += 1){
    for(j = 1; j <= column; j += 1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}