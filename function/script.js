//Define Functions
function sum(a, b){
    console.log("sum = " + (a + b));
}

function sayHello(){
    console.log("Hello!!");
}

var goodbyeFunc = function sayGoogbye(){
    console.log("Goodbye!!");
}

var devideFunc = function devide(a, b){
    console.log("device = " + (a / b));
}

//call SayHello function
sayHello();

//call sum function
sum(5, 10);

//call devide function
devideFunc(5, 10);

//call Goodbye function
goodbyeFunc();

