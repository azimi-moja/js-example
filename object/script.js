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


//Use Car Variable
console.log(car.model);

console.log(car["year"]);

//Create new object
var car_2 = Object.create();

var car_3 = new Object();


