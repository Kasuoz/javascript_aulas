document.getElementById("myButton").onclick = function(){

    const myBox = document.getElementById("myBox");
    const visa = document.getElementById("visa");
    const mastercard = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");


    if(myBox.checked){
        console.log("you are subscribed");
    }
    else{
        console.log("you are not subscribed");
    }

    if(visa.checked){
        console.log("you are paying with a visa");
    }
    else if(mastercard.checked){
        console.log("you are paying with a mastercard");
    }
    else if(paypal.checked){
        console.log("you are paying with a paypal");
    }
    else{
        console.log("you must select a payment method");
    }
}
