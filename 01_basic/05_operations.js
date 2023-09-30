console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2); 
console.log(2%2);


console.log("str" + 2);  //str2
console.log("1" + 2);  //12
console.log(2 + "str"); //2str
console.log(1 + "2"); //12
console.log(2+2+"2"); //42
console.log("2"+2+2); //222


console.log(2+4*5/9); //wrong way
console.log(((2+4)*5)/9); //Right way


console.log(true); //true
console.log(+true);  //1
console.log(-true);  //-1
console.log(false);  //false
console.log(+false);  //0
console.log(-false);  //-0

console.log(+""); //0
console.log(+"mk"); //NaN

let num1, num2, num3
num1 = num2 = num3 = 2+9 //wrong way
console.log([num1, num2, num3]) //[11, 11, 11]

let gameCounter = 100
gameCounter++; //postfix operater
console.log(gameCounter);
++gameCounter; //prefix operater
console.log(gameCounter);
gameCounter--;
console.log(gameCounter);
--gameCounter;
console.log(gameCounter);
