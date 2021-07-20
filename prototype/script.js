'use strict'

//add getInfo function to object for extend all object this function
Object.prototype.getInfo = function() {
    return 'info';
}

function Car(make, model , year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//Add fun function to car object
Car.prototype.fun = function() {
    return 'fun';
}

//Add run function to car object
Car.prototype.run = function() {
    return 'run'
}

//call functions
var car3 = new Car('ford' , 'mustang' , 1969);
var car4 = new Car('Saipa' , '111' , 1800 );

car3.fun();
car3.getInfo();

car4.run();
car4.getInfo();


//Define Person object
function Person(name) {
    this.name = name;
}

//override getInfo in Person Object
Person.prototype.getInfo = function() {
    return 'new info for Person Object'
}

var person1 = new Person('hesam');
person1.getInfo();