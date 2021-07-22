'use strict'

var title = document.querySelector('#title');
var el1 = document.querySelector('.el1');
var el2 = document.querySelector('.el2');
var link = document.querySelector('#link');

title.onmouseenter = function(e) {
    e.target.style.backgroundColor = 'red';
}

title.onmouseout = function(e) {
    e.target.style.backgroundColor = 'yellow';
}

var eventOne = function(e){
    console.log("click event ONE");
}

var eventTwo = function(e){
    e.stopPropagation();
    console.log("click event TWO");
}

var eventThree = function(e){
    console.log("click event THREE");
}

var eventLink = function(e){
    e.preventDefault();
    console.log("click event Link");
}

el1.addEventListener('click', eventOne);
el2.addEventListener('click', eventTwo);
el1.addEventListener('click', eventThree);

link.addEventListener('click', eventLink);

el1.removeEventListener(eventThree);

