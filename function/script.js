'use strict'

//Define Functions
function sum(a, b){
    console.log("sum = " + (a + b));
}

function sayHello(){
    console.log("Hello!!");
}

var sayGoodbye = function() {
    console.log("Goodbye!!");
}

var devide = function(a, b) {
    console.log("device = " + (a / b));
}

//call SayHello function
sayHello();

//call sum function
sum(5, 10);

//call devide function
devide(5, 10);

//call Goodbye function
sayGoodbye();

//Arrow Function
let arrowSum = (a, b) => console.log("sum = " + (a + b));

let arrowDevide = (a, b) => {
    let c = a / b;
    let d = a % b;
    console.log("a / b = " + c);
    console.log("a % b = " + d);
}

arrowSum(4, 8);

arrowDevide(8, 5);

//use this keyword in arrow function
function checkNumber(a) {
    let num = a;
    setInterval(() => {
        console.log("Show A = " + num++);        
    }, 1000);
}

checkNumber(6);

//example for use arrow function and keyword function
let obj = {
    a : 10,
    b : function() {
        console.log(this.a , this)
    },
    c : () => {
        console.log(this.a , this)
    }
}

obj.b()
obj.c()