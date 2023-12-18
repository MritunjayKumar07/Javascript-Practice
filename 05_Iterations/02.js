//for of loop :-
let arr = ["mk", "sk", "pk"]; // you can use any type of data
for (let value of arr) {
  //value is iterator like variable its a variable of arr
  console.log(value);
} //return :- mk sk pk

let obj = [{ 1: "mk" }, { 2: "sk" }, { 3: "pk" }]; // you can use any type of data
for (let value of obj) {
  //value is iterator like variable its a variable of obj
  console.log(value);
} //return :-{ '1': 'mk' }{ '2': 'sk' }{ '3': 'pk' }

let val = "Mritunjay";

for (const i of val) {
  console.log(i);
} //return :- M r i t u n j a y

console.log("---------------------------------");
//for in loop :-
for (let key in obj) {
  console.log(key);
} //return :- 0 1 2

for (let key in arr) {
  console.log(key);
} //return :- 0 1 2

for (const i in val) {
  console.log(i);
} //return :- 0 1 2 3 4 5 6 7 8

console.log("---------------------------------");

//map loop :-
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("M", "Mritunj");
map.set("K", "Kumar");
map.set("IN", "India");

console.log(map); // not store dublicatew value thats way India return one time.
//return :- Map(4) { 'IN' => 'India', 'USA' => 'United State of America', 'M' => 'Mritunj', 'K' => 'Kumar',}

console.log(map.get("IN")); //return :- India

for (const key of map) {
  console.log(key);
}
//return :- [ 'IN', 'India' ][ 'USA', 'United State of America' ][ 'M', 'Mritunj' ][ 'K', 'Kumar' ]

for (const [key, value] of map) {
  // DeStructring
  console.log(`${key} and ${value},`);
}
//return :- , IN and India, USA and United State of America, M and Mritunj, K and Kumar,

const myObj = {
  name: "Mritunjay",
  age: 25,
  city: "Mumbai",
};

// for (const [key, value] of myObj) {
// console.log(`${key} and ${value}`)
// } // return :- error myObj not iterable

for (const key in myObj) {
  console.log(key);
} // return :- name age city

for (const key in myObj) {
  console.log(`${key} shortcut if for ${myObj[key]} ,`);
} // return :- name shortcut if for Mritunjay , age shortcut if for 25 , city shortcut if for Mumbai ,

const inArr = ["mk", "pl", "ki", "ok"];
for (const key in inArr) {
  console.log(`${key} value :- ${inArr[key]}, `);
} //return :-0 value :- mk 1, value :- pl, 2 value :- ki, 3 value :- ok,

for (const key in map) {
  console.log(key);
} // return :- empty
