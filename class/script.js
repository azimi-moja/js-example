'use strict'

//define class
class Car {
    //constructor method
    constructor(make , model , year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }


    run() {
        return 'speed up to 200';
    }
}

//define class use inheritance by extends keyword
class IranCar extends Car {
    //user super constructor method
    constructor(make , model , year , color) {
        super(make , model , year)
        this.color = color;
    }

    //static method
    static fly() {
        return 'car is flying';
    }

    //override method
    run() {
        super.run();
        return 'speed up to 40';
    }

    go() {
        return this.run();
    }
}

//Define object
let car1 = new IranCar("Ford" , "mustang" , 2000 , 'red');

//call static method
IranCar.fly();


//getter and setter
class Foo {
    constructor() {
        this.log = [];
    }


    set current(value) {
        this.log.push(value);
    }

    get latest() {
        if(this.log.length === 0) {
            return undefined
        }

        return this.log[this.log.length - 1]
    }
    
}

let bar = new Foo();

bar.current = 'A';
let getCurrent =  bar.latest;