// toLocaleString() = returns a string with a language sensitive representation of this

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default)
// 'options' = object with formatting options

let myNum = 123456.789;
let myTemp = 35;

//myNum = myNum.toLocaleString("en-US"); // US ENGLISH
//myNum = myNum.toLocaleString("hi-IN"); // HINDI
//myNum = myNum.toLocaleString("de-DE"); // STANDARD GERMAN
myNum = myNum.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
myTemp = myTemp.toLocaleString(undefined, {style: "unit", unit: "celsius"});


console.log(myNum);
console.log(myTemp);