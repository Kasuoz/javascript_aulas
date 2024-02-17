//FUNCTION = define code once and use it many times
//just call the function name

start();

function start(){
    let username = "kasuo";
    let age = 19;

    happyBirthday(username, age);
}



function happyBirthday(username, age){
    console.log("happy birthday to you");
    console.log("happy birthday to you");
    console.log("happy birthday dear", username);
    console.log("happy birthday to you");
    console.log("you are", age, " years old");
}