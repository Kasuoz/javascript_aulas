//GIVES US THE ABILITY TO CHECK MORE THAN 1 CONDITION CONCURRENTLY
// && AND (BOTH CONDITIONS MUST BE TRUE)
// || OR (EITHE CONDITION CAN BE TRUE)

let temp = 30;

if(temp > 0 && temp < 30){
    document.getElementById("temperature").innerHTML = ("1 - the temperature is " + temp + " degrees");
    document.getElementById("tempText").innerHTML = ("perfect climate");
}
else{
    document.getElementById("temperature").innerHTML = ("1 - the temperature is " + temp + " degrees");
    document.getElementById("tempText").innerHTML = ("shitty weather");
}


if(temp <= 0 || temp >= 30){
    document.getElementById("temperature2").innerHTML = ("2 - the temperature is " + temp + " degrees");
    document.getElementById("tempText").innerHTML = ("shitty weather");
}
else{
    document.getElementById("temperature2").innerHTML = ("2 - the temperature is " + temp + " degrees");
    document.getElementById("tempText").innerHTML = ("perfect climate");
}