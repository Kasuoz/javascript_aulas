//VARIABLE SCOPE = WHERE A VARIABLE IS ACCESSIBLE

// LET = VARIABLES ARE LIMITED TO BLOCK SCOPE {}
// VAR = VARIABLES ARE LIMITED TO A FUNCTION(){}

// GLOBAL VARIABLE = IS DECLARED OUTSIDE ANY FUNCTION
// (if global, var will CHANGE browser's window properties)


var name = "kasuo";

doSomething();

function doSomething(){
    for(var i = 1; i <= 3; i += 1){
        //console.log(i);
    }
}


console.log(i);