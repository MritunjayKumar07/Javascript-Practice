//Object Declear two way (Literals, Constructer ):-
//Singleton:- Litrals sa singleton nhi banta hy But Constructer sa Singleton Banta hy.

//Object Literals:-

const JsUser = {} //Make Object(empty Object.)
const JsUsers = {
    name:"Mritunjay", //Object treat Key as a String.
    age:18, 
    "full name":"Mritunjay Kumar",
    location:"Jaipur",
    email:"mritunjay@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
};

//Two way to get data from Objects:-
console.log(JsUsers.email);
/*Use Another way Becouse JsUsers.full name not 
posible thats way we use another way JsUsers[""full name""]*/
// console.log(JsUsers."full name");
// console.log(JsUsers.full name);
console.log(JsUsers["full name"]);

//use Symbol key inside Object:-
const symbolKey = Symbol("ID");
const user = {
    name:"Mritunjay",
    symbolKey:"User123",//not Work This Way symbolKey Kay is a type of string.
    age:18,
};
const user1 = {
    name:"Mritunjay",
    symbolKey:"User123",//not Work This Way symbolKey Kay is a type of string.
    [symbolKey]:"User123", //Work This Way symbolKey Kay is a type of Symbol.
    age:18,
};

console.log(user[symbolKey])// return :- undefined
console.log(user1[symbolKey])//Axcess Symbol return :- User123

//Object freeze:-
console.log(user1); //Return :- { name: 'Mritunjay', symbolKey: 'User123', age: 18, [Symbol(ID)]: 'User123'}

user1.email="Kumar@gmail.com";//Insert Date in Object
console.log(user1); //Return :- { name: 'Mritunjay', symbolKey: 'User123', age: 18, email: 'Kumar@gmail.com', [Symbol(ID)]: 'User123'}

Object.freeze(user1)// Use to freeze the object (No One can change the value of in object.)
console.log(Object.isFrozen(user1))// Cheak Object if freez or not return :- true

user1.email="Mritunjay@gmail.com";
console.log(user1); //Return :- { name: 'Mritunjay', symbolKey: 'User123', age: 18, email: 'Kumar@gmail.com', [Symbol(ID)]: 'User123'}

const UnFreezonObject = Object.assign({}, user1); // UsFreez the Object.
console.log(Object.isFrozen(UnFreezonObject)) // return :- false


UnFreezonObject.greeting = function(){
    console.log("Hello Function...");
}

UnFreezonObject.greetingTwo = function(){
    console.log(`Hello Function... ${this.name}`); // this is use to get same object data (it's refrence of same object).
}

console.log(UnFreezonObject.greeting) // return :- [Function (anonymous)]
console.log(UnFreezonObject.greeting()) //return :- Hello Function...
console.log(UnFreezonObject.greetingTwo()) //return :- Hello Function... Mritunjay
