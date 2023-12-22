const arr1 = ["Mritunjay", 9835678727, true];
const arr2 = ["Kumar", 0, false];

arr1.push(arr2) //Insert arr2 inside arr1 original Existing array return :- [ 'Mritunjay', 9835678727, true, [ 'Kumar', 0, false ] ]
console.log(arr1)
console.log(arr1[3][0]); //return :- Kumar

const arr = arr1.concat(arr2); // add two array and return new array(Not disturb Existing array)
console.log(arr)   // return :- :- [ 'Mritunjay', 9835678727, true, 'Kumar', 0, false ]

const spred_operater1 = [...arr1, ...arr2, ...etc_array]// add two array and return new array(Not disturb Existing array)
const spred_operater = [...arr1, ...arr2]// add two array and return new array(Not disturb Existing array)
console.log(spred_operater) // [ 'Mritunjay', 9835678727, true, 'Kumar', 0, false ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

const real_another_array1 = another_array.flat(Infinity);
console.log(real_another_array1); // return :- [1, 2, 3, 4,  5,6, 7, 8, 9, 10,11]

const real_another_array2 = another_array.flat(1);
console.log(real_another_array2); // return :- [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11 ] ]

const real_another_array3 = another_array.flat(2);
console.log(real_another_array3); // return :- [1, 2, 3, 4,  5,6, 7, 8, 9, 10, 11]

//Aske is an array Or convert in to array:- (IMP Intrivew)
console.log(Array.isArray("Mritunjay Kumar")); // is this array return :- false
console.log(Array.from("Mritunjay Kumar")); // convert in to array return :- ['M', 'r', 'i', 't','u', 'n', 'j', 'a','y', ' ', 'K', 'u','m', 'a', 'r']
console.log(Array.from({ name: "mritunjay" })); // convert in to array empty array return :- {}
console.log(Array.from({ name: "mritunjay" })); // convert in to array  anothe way if convert object ot array then use key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
console.log(Array.of(score1, score2, score3, score4)); // return :- [ 100, 200, 300, 400 ]
