let age = -1;

if(age >= 18){
    document.getElementById("age").innerHTML = age + " you are not underaged"
    console.log(age, "you are not underaged")
}

else if(age < 0){
    document.getElementById("age").innerHTML = age + " you werent born yet"
    console.log(age, "you werent born")
}

else{
    document.getElementById("age").innerHTML = age + " you are underaged"
    console.log(age, "you are underaged")
}


/* ALSO WORKS WITH BOOLEAN!!

let online = false;

if (online){
    console.log("you are online");
}

else{
    console.log("you are not online")
}
*/