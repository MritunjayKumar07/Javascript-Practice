//#01 :- Object literal
const user = {
  name: "John Doe",
  age: 32,
  email: "john.doe@example.com",
  getUserDetails: function () {
    console.log("this is use for current context:-", this.name);
  },
};

console.log(user.name);
console.log(user.getUserDetails());
console.log(this); //return :- {}
//`this` is Object.
/*{} No current context.Emplty becouse node ma this ka andar koi value nhi data hy.
But in browser inSide the this, Current context is windows.
*/

//#02 :- Constructor function
//Use `new` to make Constructor function.
// `new` key word use to create new context.
// const promiseOne = new Promise();
// const date = new Date();

//Function also like that:-
function User(username, loginCount, isLoggedIn) {
  //Also key or variable define like that.
  this.username = username; //`this.username` is a variavle
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.generate = function () {
    console.log(Math.floor(Math.random()*10));
  }

  return this //`this` return the current context.
}
const userOne = User("Mritunjay", 12, true);
const userTwo = User("Amit", 10, false);
console.log(userOne);
console.log(userTwo.isLoggedIn);
console.log(`----------------------------------------------------------------`)
//In that way pass parimeter is overWrite the data of `User`
//Solution. Constructor function.
//It's also work without return the function
const userThree = new User("Mritunjay", 12, true);
const userFour = new User("Amit", 10, false);
console.log(userThree);
console.log(userFour);
/*`new`: Use new to create empty object. function call 
hota hy `new` key word ka karan `new` key work jo bhe 
data hy usko apna andar pack ker ka da data.*/


/* #03:- Property and method:-
- both properties and methods are members of objects, but they serve different purposes:
 a> Property: 
 - A property is a key-value pair associated with an object.
 - Accessed using dot notation (object.property) or bracket notation (object["property"]).
*/
  const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
  };
  console.log(person.name); // Accessing property using dot notation
  console.log(person["age"]); // Accessing property using bracket notation
/*
  b> Method:
  - A method is a function that is associated with an object.
  - It is a property of the object whose value is a function.
  - Invoked using parentheses () after the method name.
  - Methods perform actions or provide functionalities related to the object.
*/
  const calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    }
  };
  console.log(calculator.add(5, 3)); // Invoking the add method
  console.log(calculator.subtract(8, 4)); // Invoking the subtract method
