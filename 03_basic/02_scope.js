//{} curly bracket is a scope when come with any function or if else.

//01:-
let a = 10;
const b = 20;
var c = 30;
console.log([a, b, c]) // return :- [ 10, 20, 30 ]

console.log("------------------------------------02-----------------------------")
//02:-
var c1 = 300;

if (true) {
    let a1 = 10;
    const b1 = 20;
    var c1 = 30;
}

// console.log(a1) // return :- ReferenceError: a1 is not defined
// console.log(b1) // return :- ReferenceError: b1 is not defined
console.log(c1) // return :- 30

//Any variable declear in scope Called Block Scope.
//Any Variable declear in outSide of function called Global Scope.


console.log("------------------------------------03-----------------------------")
//03:-
let a2 = 150;
const b2 = 250;
if (true) {
    let a2 = 110;
    const b2 = 210;
    console.log([a2, b2]) // return :- [ 110, 210 ]
}
console.log([a2, b2]) // return :- [ 150, 250 ]


console.log("------------------------------------04-----------------------------")
//04:-
let a3 = 1050;
const b3 = 2050;
if (true) {
    console.log([a3, b3]) // return :- [ 1050, 2050 ]
}

