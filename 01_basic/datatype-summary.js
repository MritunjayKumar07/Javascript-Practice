// Two types of dataType 

// 1> Primitive (Call by value) 7 types 
// (insub value ka refrence nhi dia jata hy coppy ker ka dia jata hy or jo bhe changess kerta hy wo coppy ma changess kerta hy.
// :- String,Numbers,Booleinu,Null,Undefined,Symbol,BigInteger.
//Example:-
// const id = Symbol("123")
// const anotherid = Symbol("123")
// console.log([id, anotherid, typeof id, typeof anotherid, id === anotherid]);
// return :- [ Symbol(123), Symbol(123), 'symbol', 'symbol', false ]

// const bitNumber = 21654654516581454516484515454n
// console.log(typeof bitNumber); return:-BigInt

// 2>Nonprimitive/Refrence Type (call by refrence) 3 types:-
// Array, Objects, Functions
//Example:-
const heroArr = ['Github', "gitbas", "visualstudio"] //Array(DataType :- obj)
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