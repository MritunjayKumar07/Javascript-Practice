const addTwo = (num1, num2) => {
  //Exceplicet Return
  return num1 + num2;
};
console.log(addTwo(2, 5)); //return :-7

const addTwo1 = (num1, num2) => num1 + num2; //Implicet return
console.log(addTwo1(2, 5)); //return :-7

const addTwo2 = (num1, num2) => num1 + num2; //Implicet return
console.log(addTwo2(2, 5)); //return :-7

//Implicet return ma return keyword use nhi hota hy Exceplicet Return ma return key use kerta hy.

const addTwo3 = () => {
  useName: "Mritunjay";
}; //Implicet return
console.log(addTwo3()); //return :-undefine

const addTwo4 = () => ({
  useName: "Mritunjay",
}); //Implicet return
console.log(addTwo4()); //return :-{ useName: 'Mritunjay' }

//Immediately invoked function Expressions(IIFE) or Named IIFE:-
/*Run the function Immediately And 
Global SCOPE ka Variable sa Bachna ka lia
(Global scope ka variabe or global decleriation
is function ko polute nhi kera is lia is 
function ko use kia jata hy). IN IIFE function SEMICOLLUM(;) IS MENDETRY,
Becouse if you use semicollum this function think my end is hear another wise
IIFE function ka aga ka kuch bhe run nhi keraga Or Error daga and also 
SEMICOLLUM(;) IS MENDETRY when any function top of the IIFE function*/

function chai() {
  console.log(`DB Connect One.`);
}
chai(); //Ya Bhe immediately run kia But Global scope ka polution( global variable or global decleriation) ko kysa roka.

(() => {
  //This function is UnNamed IIFE becouse IIFE function ka name nhi hy.
  console.log(`DB Connect Two.`);
})(); //IIFE function Output:- DB Connect Two.

(function mk() {
  //This function is Named IIFE becouse if function ka name hy.
  console.log(`DB Connect Three.`);
})(); //SEMICOLLUM(;) IS MENDETRY

//Syntex:-(function)();

((name) => {
  console.log(`DB CONNECTED Four ${name}`);
})("Mritunjay");
