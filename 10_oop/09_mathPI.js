//Math.PI ka 3.1415sumthing hy kya hum change ker sakata hy is ko. And its constant in JS

console.log(Math.PI); //3.141592653589793
Math.PI = 5;
console.log(Math.PI); //3.141592653589793
//But we can not change the value of Math.E because it's a read-only

const descripter = Object.getOwnPropertyDescriptor(Math, "PI"); //`getOwnPropertyDescriptor` that the `PI` value from `Math` module
console.log(descripter);
/* Return:-{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/
//Two way to create Module:-
// a> const myMethod = Object.creter(null)//`create()` thia is factory function, By defoult null hota hy factory function ma
// b> Older Way

const chai = {
  //Normal Object
  name: "Masala chai",
  price: 50,
  isAvelabe: true,
};
console.log(chai); //{ name: 'Masala chai', price: 50, isAvelabe: true }
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Return :-
// {
//     value: 'Masala chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
//Make unchangable :-
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false, //Is ka karan `getOwnPropertyDescriptor` ka return ma `name: "Masala chai",` nhi so kerata when itrate.
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// return:-
// {
//     value: 'Masala chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

// Itrate the chai and giv the all value
// for (let [key, value] of chai) {
//   console.log(`${key} : ${value}`);
// } //return :- TypeError: chai is not iterable

for (let [key, value] of Object.entries(chai)) {
  console.log(`${key} : ${value}`);
}
//return :-
// price : 50
//isAvelabe : true

//Code Fat jana kisi kahata hy:-
const chai2 = {
  name: "Masala chai2",
  price: 150,
  isAvelabe: true,

  order: function () {
    console.log("This code fatna");
  },
};

for (let [key, value] of Object.entries(chai2)) {
  console.log(`${key} : ${value}`);
}
/*
Return:-
name : Masala chai2
price : 150
isAvelabe : true
order : function () {
    console.log("This code fatna");
  }
*/

// Jo formatee ma nhi aa raha us he fatna kahata hy code ko
//Solution:-
for (let [key, value] of Object.entries(chai2)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
/*Return:-
name : Masala chai2
price : 150
isAvelabe : true
*/
