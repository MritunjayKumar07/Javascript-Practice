// Two types of dataType 
// Leacture :- https://www.youtube.com/watch?app=desktop&v=sscX432bMZo&t=352s
// Time For Leacture Learn dataType is :- 1:37 to --
// 1> Primitive (Call by value) 7 types 
//Jub bhe ap koi variable declear kerta hy to uska copy milta hy ap ko
// (insub value ka refrence nhi dia jata hy coppy ker ka dia jata hy or jo bhe changess kerta hy wo coppy ma changess kerta hy.

// Example :-
let myYoutubeName = 'MritunjayKumar'
let anotherChannel = myYoutubeName
anotherChannel = "YoutubeChannel"
console.log([myYoutubeName, anotherChannel])
// return:-[ 'MritunjayKumar', 'YoutubeChannel' ]

// :- String,Numbers,Booleinu,Null,Undefined,Symbol,BigInteger.

//Example:-
const id = Symbol("123")
const anotherid = Symbol("123")
console.log([id, anotherid, typeof id, typeof anotherid, id === anotherid]);
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
const heroFunn = function () {
    console.log("My Fun");
}//(DataType :-function object)

console.table([typeof heroArr, typeof heroObj, typeof heroFunn, typeof null]);
//return
// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │  'object'  │
// │    1    │  'object'  │
// │    2    │ 'function' │
// │    3    │  'object'  │
// └─────────┴────────────┘




// ----------------------------------------------------------------------------------------------
// MEMORY :- 

// Two Types a>Stack, b>Heap 

// Primitive Datatype use the Stack memory. (Jub bhe ap koi variable declear kerta hy to uska copy milta hy ap ko).
// Non-Primitive Datatype use the Heap memory. (Jub bhe ap koi variable declear kerta hy to uska Refrence milta hy ap ko, To jo bhe ap change karinga to original value ma changes hoga.)

// Primitive Datatype use the Stack memory Example :-
let myYoutubeName2 = 'MritunjayKumar'
let anotherChannel2 = myYoutubeName2
anotherChannel2 = "YoutubeChannel"
console.log([myYoutubeName2, anotherChannel2])
// return:-[ 'MritunjayKumar', 'YoutubeChannel' ]
// It's Primitive Datatype and use Stack Memory.
// Memory work Example :- 
//
// ┌─────────────────────┐
// │                     │
// ├─────────────────────┤
// │                     │
// ├─────────────────────┤
// │                     │
// ├─────────────────────┤
// │   anotherChannel2   │ <--Change Value
// ├─────────────────────┤
// │   myYoutubeName2    │ <--Copy Value
// ├─────────────────────┤
// │   myYoutubeName2    │ <--Original Value
// └─────────────────────┘
//      STACK Memory


// Non-Primitive Datatype use the Heap memory Example :-
let userOne = {
    email: 'user@google.com',
    upi: 'user@yblu',
}
let userTwo = userOne
userTwo.email = 'mritunjay@gmail.com'
console.log([userOne, userTwo])
// return :- 
// [
//   { email: 'mritunjay@gmail.com', upi: 'user@yblu' },
//   { email: 'mritunjay@gmail.com', upi: 'user@yblu' }
// ]
// It's Non-Primitive Datatype and use Heap Memory.
// Memory work Example :- 
// ┌─────────────────────┐
// │                     │
// ├─────────────────────┤
// │                     │
// ├─────────────────────┤
// │                     │                                   ┌─────────────────────────────────────────┐     
// ├─────────────────────┤                                   │                                         │
// │                     │                                   │     {                                   │
// ├─────────────────────┤                                   │         email: 'user@google.com',       │
// │    userTwo          │ <-its also get refrence of this ->│         upi: 'user@yblu',               │
// ├─────────────────────┤                                   │      }                                  │
// │     userOne         │ <--      Refrence of thi       -->│                                         │
// └─────────────────────┘                                   └─────────────────────────────────────────┘
//                                                                          Heap Memory




