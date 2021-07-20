'use strict'
 
//Define Car Variable
var car = {
    //ٰVariable
    manufacture : 'Benz',
    model : 'SLK 2000',
    year : 1987,
    
    //Object Variable
    details : {
        color : 'Blue',
        cylinders : 4,
    },

    //Functions
    start : function(){
        console.log("Starting Car....");
    },

    summary : function() {
        return 'Car Details : ' 
        + 'Model= ' + this.model 
        + ', Year =' + this.year 
        + ', Details = { Color = ' + this.details.color + ', Cylinders' + this.details.cylinders + '}';
    }
}

function Car(make, model , year) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.run = function() {
        return 'speed up to 200';
    }
}


//Use Car Variable
console.log(car.model);

console.log(car["year"]);

//Create new object
var car2 = Object.create();

var car3 = new Object();

//Create new object by constructor
var car4 = new Car('ford' , 'mustang' , 1969);
var car5 = new Car('Saipa' , '111' , 1800 );

//Object Inheritance
//create object not extends from Object
var car6 = Object.create(null);
car6.makeASmile = function() {
    console.log(':)')
}

car6.makeASmile();


//create object extends from car4 object
var car7 = Object.create(car4);
car7.color = 'Yellow';
car7.year = 2010;
