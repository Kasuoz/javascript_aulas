// TERNARY OPERATOR = SHORTCUT FOR IF/ELSE STATEMENT
//                    TAKES 3 OPERANDS

//                    1 - A CONDITION WITH "?"
//                        EXPRESSION IF TRUE:
//                        EXPRESSION IF FALSE

// CONDITION ? exprIfTrue : exprIfFalse


let adult = checkAge(19);
console.log(adult);

function checkAge(age){
    return age >= 18 ? true : false;
}





checkWinner(true);

function checkWinner(win){
    win ? console.log("you win") : console.log("you lose");
}