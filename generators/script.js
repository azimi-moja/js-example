'use strict'

//define generator by star
function* createNames() {
    yield 'hesam';
    yield 'ali';
    yield 'reza';
}

let namesIt = createNames();
console.log(namesIt.next());
console.log(namesIt.next());
console.log(namesIt.next());

//example two
let myObj = {
    name : 'hesam',
    age : 26,
    *[Symbol.iterator]() {
       yield 1;
       yield 2;
       yield 3;
       yield 4;
       yield 5;
       yield 6;      
    }
}

let myObjIt = myObj[Symbol.iterator]();

console.log(myObjIt.next())

for (const item of myObj) {
    console.log(item);
}


//define itrator by generator
let user = {
    id : 1 ,
    name : 'hesam' ,
    email : 'hesam@gmail.com',
    posts : [
        {
            id : 1 , 
            title : 'this is post one'
        },
        {
            id : 2 , 
            title : 'this is post two'
        }
    ],
    *[Symbol.iterator]() {
        yield* this.posts;
    }
}


let userIt = user[Symbol.iterator]();
console.log(userIt.next())
console.log(userIt.next())
console.log(userIt.next())

for(let post of user) {
    console.log(post);
}


//use spread for generator
console.log([...createNames()]);