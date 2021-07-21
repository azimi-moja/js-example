'use strict'

var title = document.querySelector('#title')

title.onmouseenter = function(e) {
    e.target.style.backgroundColor = 'red';
}

title.onmouseout = function(e) {
    e.target.style.backgroundColor = 'yellow';
}