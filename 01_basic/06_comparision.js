console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


console.log("2">1); //true
console.log("1">2);  //false
console.log("02">1);  //true string convert to number

console.log("Bmk">1); //false
console.log("A">1);  //false


// === equal cheak and datatype cheak 
console.log("9"===9); //false
console.log(9===9); //true
console.log(8===9); //false


// Dont Use This Type of code:-
console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true //not good way
console.log(null >= 1);  //false //not good way

console.log(undefined > 0);  //false
console.log(undefined == 0);  //false
console.log(undefined >= 0);  //false 