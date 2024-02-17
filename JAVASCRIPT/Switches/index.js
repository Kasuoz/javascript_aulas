/*SWITCH is a statement that examines a value
for a match against many case clauses,
MORE EFFICIENT THAN many "else if" statements
*/

let grade = "c";

switch(grade){
    case "a":
        grade = grade.toUpperCase();
        break;
    case "b":
        grade = grade.toUpperCase();
        break;
    case "c":
        grade = grade.toUpperCase();
        break;
    case "d":
        grade = grade.toUpperCase();
        break;
    case "f":
        grade = grade.toUpperCase();
        break;
}


switch(grade){
    case "A":
        document.getElementById("grade").innerHTML = "your grade was: " + grade;
        break;
    case "B":
        document.getElementById("grade").innerHTML = "your grade was: " + grade;
        break;
    case "C":
        document.getElementById("grade").innerHTML = "your grade was: " + grade;
        break;
    case "D":
        document.getElementById("grade").innerHTML = "your grade was: " + grade;
        break;
    case "F":
        document.getElementById("grade").innerHTML = "your grade was: " + grade;
        break;
    default:
        document.getElementById("grade").innerHTML = grade + ": that is not a grade"
}