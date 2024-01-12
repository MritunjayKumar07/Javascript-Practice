//# > If you see in console you and work on console then come prototype at the end.
//# > Every things in Javascript decelear by the Object and Object decelear by the null.
/*
ex:-Array decelear redirect to Object > Object redirect to null
ex:-String or etc decelear redirect to Object > Object redirect to null
console.log(Object.__proto__);   //null
*/
//`this` min `gis` na bhe

//Now see where function decelear & redirect to where?
function PersonMarks(num) {
  //this.num = num; //Not show Ya tabhi so keraga jub ap refrence use kigiga ga. Or ya `prototype` ma store hota hy.
  return num * 10;
}
PersonMarks.power = 2;
console.log(PersonMarks(5)); //return:- 50
console.log(PersonMarks.power); //return:- 2
console.log(this.PersonMarks); //return:- undefine
console.log(PersonMarks.prototype); //return:- {} //Function prototype is also object.
//Time 7:22

function createuser(userName, score) {
  //This is also use to giv the clearity of whic one is key and whic one is value.
  this.userName = userName;
  this.score = score;
}

/*prototype :- 
- `this` keyword also linked with prototype. 
  And `this` context stored in prototype.
- prototype give methos and property of an function.
- her function ma byDefoult context set hota hy,
 `PersonMarks.prototype` ya jo empty {} object return ker raha hy.
-Hum kya prototype ma apna funcanality add ker sakata hy ya posible 
 hy like jo prototype ma rahata hy jo console ma dikata hy slick(), shift(), short() and etc.
*/

//Add my own funcanality in inside the Object.(createuser is Object)
//Object ma property hoti hy. Or koi ak property mer function hold ker lagi.
createuser.prototype.increment = function () {
  // return score++; // yaha define nhi hy ke kiska value increment kerna hy chai ke tea.
  this.score++; //`this` is use for current context, mins jo bhe context ma real time value hoga uska hoga
};

createuser.prototype.printme = function () { //define method
  console.log(`Score is ${this.score}`);
};// Ya abhi tak Koi kam ka nhi jub tak new na laga ho.(Hawa ma hy)

//const chai = new createuser("chai", 25);
// const tea = createuser("tea", 250);
// chai.printme();
// Return Error:- TypeError: Cannot read properties of undefined (reading 'printme')
// Property enject ho gaya hy jub ap console ker ka function ka prototypr cheak kigia ga to us ma dikhaga.
//Lakin function ma property add hua hy ya batana ka lia `new` key word use kerta hy.

const chai = new createuser("chai", 25);
const tea = new createuser("tea", 250);
//

chai.printme(); // Score is 25


/*Java Cript ma sirf method or function ko call kerna hota hy jo prototype ma hota hy. Jis bhe function ko ap call kia hy 
chai.printme(); usa java script dhund ka data hy prototype ma sa 
jaysa ke agar app array ma map use karinga to hum thoda na array.prototype.map() ya array.prototype.prototype.map() likhata hy
hum direct likhata hy array.map(), JavaScript ya features provide kerta hy ke ke ap direct call kera sackata hy.
*/
/*
`array.prototype.prototype.map()` iska mutlub agar kisi function ka andar funcrion hua ya kisi method ka andar method hua to
 chil prototype> parents prototype > Object > Null
*/

/* ABOUT `new` KEYWORD
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means 
that it has access to properties and methods defined on the constructor's prototype.(`new` na yaha ak object lia fir us object 
ma ak `prototype` inject kia fir us ma `printme` method ko `prototype` ma laya define kia fir `createuser` ka bases pa banana hy to banaya.)

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created 
object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be 
the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, 
array, function, etc.), the newly created object is returned.


*/
