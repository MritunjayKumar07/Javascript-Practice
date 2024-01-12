let myNme = "Mritunjay";
console.log(myNme.length); //return:-9
let myNme2 = "Mritunjay               ";
console.log(myNme2.length); //return:-24
let myNme3 = "Mritunjay               ";
console.log(myNme3.trim().length); //return:-9

//But hum `trim().length` iska jagha pa apna property use kerna chata hy.
//Make Own method :-

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
heroPower.getSpiderPower(); //get method And Return :-Spidy power is sling
//But hum chata hy ke Pura main Object ma he apna aysa method dall da ke akela in dono ka kam ker da `trim().length`
//Q ke mera pass sub ka parents Object avelable. Her chiz Function, object , methos, any things ks prototype
//pass hota hy Object ka prototype sa to hum main Object ka prototype ma he laga dainga apna prototype to ho jayaga.
Object.prototype.mritunjay = function () {
  //Ya Power sub ko mil jayaga
  console.log("Mritunjay is present in all Object");
};
heroPower.mritunjay(); //Return:- Mritunjay is present in all Object

//Cheak array also:-
let myHeros = ["thor", "spiderman"];
myHeros.mritunjay(); //Return:- Mritunjay is present in all Object

let myStr = "Antman is my best hero";
myStr.mritunjay(); //Return:- Mritunjay is present in all Object

//Hum na kya kia sub ka grnd ka grand ka grand ... father ko axcess ker ka unka prototype ma apna prototype inject ker dia.

//Inject property only inside the Particular value.
Array.prototype.printMe = function () {
  console.log("Axcess Only Array Prototype and insert my prototype printMe.");
};
myHeros.printMe(); //Return:- Axcess Only Array Prototype and insert my prototype printMe.
//Power sirf array ko he milaga na ke kisi or ko.
// heroPower.printMe(); //Return :- TypeError: heroPower.printMe is not a function

//#01: Prototype INHERITANCE:- (Inharit 2 way)
// a>Prototype Inheritance (__proto__)
const User = {
  name: "John Doe",
  age: 25,
};
const Admin = {
  role: "Admin",
  level: 999,
  __proto__: User, //1th Way (Inharit from inside)
};
const Support = {
  role: "Support",
  level: 777,
};

Support.__proto__ = User; //2nd Way (Inharit from OutSide)

console.log(Admin.name); //return :- John Doe
console.log(Support.name); //return :- John Doe
console.log(User.role); //return :- undefine

// b>Using Modern syntax (Behinde the seen wahi chal raha hy __proto__)
Object.setPrototypeOf(Admin, User); //Admin ko User ka axcess dia.

// Come To Our points (Replace trim().length to Own method)
let anotherUser = "Mritunjay                 ";
String.prototype.trimLength = function () {
  console.log("Return this", this); //Return:- Return this [String: 'Mritunjay                 ']
  // console.log(this.trim().length);
  //or
  return this.trim().length;
};

console.log("Normal length", anotherUser.length); //Return:26
console.log("Using Trim Length", anotherUser.trimLength()); //Return:-Using Trim Length 9
console.log("Using Trim Length", "Mritunj   ".trimLength()); //Return:-Using Trim Length 7
