'use strict'
//create array
let fruits = ['Apple', 'Banana'];


//*******************************************
//Access an Array item using the index position
let first = fruits[0]; // Apple
let last = fruits[fruits.length - 1]; // Banana


//*******************************************
//Loop over an Array
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});// Apple 0, Banana 1


//*******************************************
//Add an item to the end of an Array
let newLength = fruits.push('Orange'); // ["Apple", "Banana", "Orange"]


//*******************************************
//Remove an item from the end of an Array
let last = fruits.pop(); // remove Orange (from the end) ["Apple", "Banana"]


//*******************************************
//Remove an item from the beginning of an Array
let first = fruits.shift(); // remove Apple from the front ["Banana"]

//*******************************************
//Add an item to the beginning of an Array
let newLength = fruits.unshift('Strawberry'); // add to the front ["Strawberry", "Banana"]


//*******************************************
//Find the index of an item in the Array ["Strawberry", "Banana", "Mango"]
fruits.push('Mango')
let pos = fruits.indexOf('Banana'); // 1


//*******************************************
//Remove an item by index position
let removedItem = fruits.splice(pos, 1); // this is how to remove an item ["Strawberry", "Mango"]


//*******************************************
//Remove items from an index position
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables)
let pos = 1
let n = 2
let removedItems = vegetables.splice(pos, n)

console.log(vegetables); // ["Cabbage", "Carrot"] (the original array is changed)
console.log(removedItems) // ["Turnip", "Radish"]

//*******************************************
//Copy an Array

let shallowCopy = fruits.slice() // this is how to make a copy ["Strawberry", "Mango"]


//*******************************************
/*
The Array.of() method creates a new Array instance from a variable number of arguments,
regardless of number or type of the arguments.
The difference between Array.of() and the Array constructor is in the handling 
of integer arguments: Array.of(7) creates an array with a single element, 7, 
whereas Array(7) creates an empty array with a length property of 7 
(Note: this implies an array of 7 empty slots, not slots with actual undefined values).
*/
let list = [1,2,3,4,5,6,7,8,9];
let list2 = Array.of(2);

//*******************************************
/*
The Array.from() static method creates a new, shallow-copied 
Array instance from an array-like or iterable object.
*/
let list3  = Array.from(list);
console.log(list3);


//*******************************************
/*
The find() method returns the value of the first element in the provided array 
that satisfies the provided testing function. If no values satisfy the testing f
unction, undefined is returned.
*/
console.log(list3.find(item => item % 2 == 0))


//*******************************************
/*
The fill() method changes all elements in an array to a static value, from a start index 
(default 0) to an end index (default array.length). It returns the modified array.
*/
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4)); // expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1)); // expected output: [1, 5, 5, 5]

console.log(array1.fill(6)); // expected output: [6, 6, 6, 6]


//*******************************************
/*
The filter() method creates a new array with all elements that pass the test 
implemented by the provided function.
*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result); // expected output: Array ["exuberant", "destruction", "present"]


//*******************************************
/*
The copyWithin() method shallow copies part of an array to another location 
in the same array and returns it without modifying its length.
*/
const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4)); // expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));    // expected output: Array ["d", "d", "e", "d", "e"]


//*******************************************
/*
The entries() method returns a new Array Iterator object that contains 
the key/value pairs for each index in the array.
*/
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();

console.log(iterator1.next().value); // expected output: Array [0, "a"]

console.log(iterator1.next().value); // expected output: Array [1, "b"]


//*******************************************
