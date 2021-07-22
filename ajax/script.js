'use strict'

//Get Method
var ajaxGet = new XMLHttpRequest();

ajaxGet.open('GET' , 'https://jsonplaceholder.typicode.com/users');


//add ajax by event handler
ajaxGet.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE) {
        if(this.status == 200) {
            console.log('done' , this.responseText);
        } else if(this.status == 404) {
            console.log('users not found');
        }
    }
}

//add ajax by event listner
ajaxGet.addEventListener('load' , function() {
    if(this.readyState == XMLHttpRequest.DONE) {
        if(this.status == 200) {
            console.log('done' , this.responseText);
        } else if(this.status == 404) {
            console.log('users not found');
        }
    }
});

ajax.send();


//Post Method
var ajaxPost = new XMLHttpRequest();

var data = {
    username : 'azimi_moja',
    email : 'azimi_moja@yahoo.com'
}


ajaxPost.open('POST', 'https://jsonplaceholder.typicode.com/users');
ajaxPost.setRequestHeader('Content-type', "application/json; charset=UTF-8");

ajaxPost.addEventListener('load' , function() {
    if(this.readyState == XMLHttpRequest.DONE) {
        if(this.status == 201) {
            console.log('done');
            var data = JSON.parse(this.responseText);
            console.log(data.username);
        } else {
            console.log(this.status);
        }
    }
})

ajaxPost.send(JSON.stringify(data));