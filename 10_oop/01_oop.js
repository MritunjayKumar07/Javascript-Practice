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
