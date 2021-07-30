
/**
 * Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol
 * value or just a Symbol — that’s guaranteed to be unique. Symbols are often used to add unique 
 * property keys to an object that won’t collide with keys any other code might add to the object,
 * and which are hidden from any mechanisms other code will typically use to access the object.
 * That enables a form of weak encapsulation, or a weak form of information hiding.
 * 
 * Every Symbol() call is guaranteed to return a unique Symbol. Every Symbol.for("key") call will
 * always return the same Symbol for a given value of "key". When Symbol.for("key") is called,
 * if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned.
 * Otherwise, a new Symbol is created, added to the global Symbol registry under the given key,
 * and returned.
 */

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// false
Symbol('foo') === Symbol('foo');

// TypeError
let sym = new Symbol();





//example
let symbol1 = Symbol.for('fullname');
let obj = {
    name : 'hesam',
    [symbol1] : 22
}


let symbolN = Symbol.for('fullname');
console.log(symbol1 == symbolN);
console.log(obj[symbolN]);


//TODO : ?????
class ReplaceX {
    constructor(value) {
        this.value = value;
    }

    [Symbol.replace](string) {
        return `/${string}/${this.value}`;
    }
}

console.log('foo1'.replace(new ReplaceX('bar')))