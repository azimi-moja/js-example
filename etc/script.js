'use strict'

//use Spread syntax
function sum(a , b, c, ...x) {
    console.log(x);
    console.log(a + b + c);
}


let list = [1, 2, 3, 4];
sum(...list);

let list1 = [1, 2, 3, 4];
let list2 = [5, 6, 7, 8];
console.log(...list1 , ...list2);

//for of syntax
/*
-> for in loops over enumerable property names of an object.

-> for of (new in ES6) does use an object-specific iterator and loops over the values generated by that.

-> In your example  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator 
*/

let forOfList = [1, 2, 3, 4];
for(let i of forOfList){
    console.log("i = " + i);
}

//Array Destructuring
let arrayList = [1, 'hamid' , 'ali' , false , 2];

let [item1, , ,item2 ,item3] = arrayList;

console.log(item1 ,item2 ,item3);

function foo() {
    return [22, 33, 44, 55 ,66 ,77 ,88];
}

let [a , b, ...c] = foo();

console.log(a , b , c);



//Object Destructuring
let obj = {
    name : 'Moja',
    age : 20,
    show = () => {return "Moja"};
}

//for rename use ( : )
//for defualt parameter use ( = )
let { age = 20 , foo : bar = () => { return 'ahmad'} , name : firstname } = obj;

console.log(firstname , age , bar());