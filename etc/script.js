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
