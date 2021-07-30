'use strict'

//override iterator for array
let names = ['hesam' , 'ali', 'reza'];

names[Symbol.iterator] = function() {
    let items = this;
    let step = 0;
    return {
        next() {
            let obj = {
                done : step >= items.length,
                value : items[step]
            }
            step++;
            return obj;
        }
    }
}

let nameIt = names[Symbol.iterator]();
console.log(nameIt.next())
for (const name of names) {
    console.log(name)
}

//define iterator for object
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
    ]
}

user[Symbol.iterator] = function() {
    let posts = this.posts;
    let step = 0;
    return {
        next() {
            let obj = {
                done : step >= posts.length,
                value : posts[step]
            }
            step++;
            return obj;
        }
    }
}


for(let post of user) {
    console.log(post);
}