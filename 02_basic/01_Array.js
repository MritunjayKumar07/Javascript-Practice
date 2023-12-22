//shalo Copy & Deep Coppy Learn:-
const array1 = [4, 5, 6];
const array2 = ["mritunjay", true, 452522];
const array3 = new Array(1, "mk", false);
let arr = [...array1, ...array2]; // or you use [...array1, ...array2, ...array3]
console.log(arr); // return :- [ 0, 1, 2, 3, 4, 5, 6, 1, 3, 'mritunjay', true, 452522 ]
console.log(arr[3]);

arr.push("Rahul");
console.log(arr); //[ 4, 5, 6, 'mritunjay', true, 452522, 'Rahul' ]
arr.pop();
console.log(arr.pop()); //remove last element // return :Rahul
console.log(arr); //remove last element // return :[ 4, 5, 6, 'mritunjay', true, 452522 ]

arr.unshift(9);
console.log(arr); //Add Value in start :- [ 9, 4, 5, 6, 'mritunjay', true ]

arr.shift(); // Remove Start value:- [ 4, 5, 6, 'mritunjay', true ]
console.log(arr);

console.log(arr.includes(9)); //Value Agar hy to true another wise false.

console.log(arr.indexOf(6)); // 2
console.log(arr.indexOf(60)); // -1 if not value present

console.log(arr.join()); // convert in to string return:- 4,5,6,mritunjay,true
console.log(typeof arr.join()); // return :- string

//slice, splice:-
//Slice:- Extract a section of an Original Array
console.log("A", arr); //return :- A [ 4, 5, 6, 'mritunjay', true ]
const myn1 = arr.slice(1, 3);
console.log(myn1); //return:- [ 5, 6 ]
console.log("B", arr); //return :- B [ 4, 5, 6, 'mritunjay', true ]

//Splice:- Remove elements from an Original Array

const myn2 = arr.splice(1, 3);
console.log(myn2); // change original array  return :- [ 5, 6, 'mritunjay' ]
console.log("C", arr); // return :- C [ 4, true ]

//All Method of array or function:-
// at:ƒ at()
// concat:ƒ concat()
// constructor:ƒ Array()
// copyWithin:ƒ copyWithin()
// entries:ƒ entries()
// every:ƒ every()
// fill:ƒ fill()
// filter:ƒ filter()
// find:ƒ find()
// findIndex:ƒ findIndex()
// findLast:ƒ findLast()
// findLastIndex:ƒ findLastIndex()
// flat:ƒ flat()
// flatMap:ƒ flatMap()
// forEach:ƒ forEach()
// includes:ƒ includes()
// indexOf:ƒ indexOf()
// join:ƒ join()
// keys:ƒ keys()
// lastIndexOf:ƒ lastIndexOf()
// length: 0
// map:ƒ map()
// pop:ƒ pop()
// push:ƒ push()
// reduce:ƒ reduce()
// reduceRight:ƒ reduceRight()
// reverse:ƒ reverse()
// shift:ƒ shift()
// slice:ƒ slice()
// some:ƒ some()
// sort:ƒ sort()
// splice:ƒ splice()
// toLocaleString:ƒ toLocaleString()
// toReversed:ƒ toReversed()
// toSorted:ƒ toSorted()
// toSpliced:ƒ toSpliced()
// toString:ƒ toString()
// unshift:ƒ unshift()
// values:ƒ values()
// with:ƒ with()
// Symbol(Symbol.iterator):ƒ values()
// Symbol(Symbol.unscopables)
