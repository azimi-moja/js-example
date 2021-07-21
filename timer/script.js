'use strict'


var showMessage = function helloRoocket(){
    console.log('Hello Roocket');
}

setTimeout(showMessage, 2000);


var i = 0;

setInterval(function() {
    console.log(i);
    i++;
}, 500);