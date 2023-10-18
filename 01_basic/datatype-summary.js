// Two types of dataType 
// Leacture :- https://www.youtube.com/watch?app=desktop&v=sscX432bMZo&t=352s
// Time For Leacture Learn dataType is :- 1:37 to --
// 1> Primitive (Call by value) 7 types 
// (insub value ka refrence nhi dia jata hy coppy ker ka dia jata hy or jo bhe changess kerta hy wo coppy ma changess kerta hy.
// :- String,Numbers,Booleinu,Null,Undefined,Symbol,BigInteger.
//Example:-
// const id = Symbol("123")
// const anotherid = Symbol("123")
// console.log([id, anotherid, typeof id, typeof anotherid, id === anotherid]);
// return :- [ Symbol(123), Symbol(123), 'symbol', 'symbol', false ]
//id and anotherid not same becouse symbol() datatype is convert the spacel and unique .
//symbol() is convert any value into unique value.


// const bitNumber = 21654654516581454516484515454n
// console.log(typeof bitNumber); return:-BigInt

// 2>Nonprimitive/Refrence Type (call by refrence) 3 types:-
// Array, Objects, Functions
//Example:-
const heroArr = ['Github', "gitbas", "visualstudio"] //Array(It's obj also DataType)
const heroObj = {
    name: 'Github',
    age: 22,
    isLoggIn: true
} //DataType :- (obj)
const heroFunn = function(){
    console.log("My Fun");
}//(DataType :-function object)

console.table([typeof heroArr,typeof heroObj,typeof heroFunn, typeof null]);
//return
// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │  'object'  │
// │    1    │  'object'  │
// │    2    │ 'function' │
// │    3    │  'object'  │
// └─────────┴────────────┘