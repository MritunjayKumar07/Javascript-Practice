const score = 400
console.log(score) //400
const balance = new Number(100)
console.log(balance) //[Numbe:100]
console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) //100.00

// All Number function
// constructor:ƒ Number()
// toExponential:ƒ toExponential()
// toFixed:ƒ toFixed()
// toLocaleString:ƒ toLocaleString()
// toPrecision:ƒ toPrecision()
// toString:ƒ toString()
// valueOf:ƒ valueOf()


//----------------------MATHS Library--------------------------
console.log(Math)//return all function in math in google console
//abs() function change - to + not + to -
console.log(Math.abs(-4)) //return :4  
console.log(Math.round(4.3)) //return :4  
console.log(Math.ceil(4.3)) //return :5 (top value select 4 sa thoda bhe jayada hoga to top vlalue choose) 
console.log(Math.floor(4.9)) //return :4 (lower value select 5 sa thoda bhe kam hoga to lower vlalue choose) 
console.log(Math.min(4, 8, 1, 0, 9)) //return 0 (lower value select ) 
console.log(Math.random()) //return bitween 0 to 1 (ex:-0.85984596585296,0.85854585452842,0.7896541241 and etc 0.sumthing) 
console.log(Math.random() * 10) //return 5.989898qr98 (any random number under 10 degit) 
const min  = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1))+min)
// (max - min + 1): Calculates the range of values. In your example, with min as 10 and max as 20, the range is 11.
// Math.random() * (max - min + 1): Scales the random number to fit within the range [0, 11).
//(max - min +1) => 11;
//(Math.random() * (max - min +1)) =>0 to 11
//(Math.random() * (max - min +1))+min =>10 to 21


// All Math Function or method:-
// abs:ƒ abs()
// acos:ƒ acos()
// acosh:ƒ acosh()
// asin:ƒ asin()
// asinh:ƒ asinh()
// atan:ƒ atan()
// atan2:ƒ atan2()
// atanh:ƒ atanh()
// cbrt:ƒ cbrt()
// ceil:ƒ ceil()
// clz32:ƒ clz32()
// cos:ƒ cos()
// cosh:ƒ cosh()
// exp:ƒ exp()
// expm1:ƒ expm1()
// floor:ƒ floor()
// fround:ƒ fround()
// hypot:ƒ hypot()
// imul:ƒ imul()
// log:ƒ log()
// log1p:ƒ log1p()
// log2:ƒ log2()
// log10:ƒ log10()
// max:ƒ max()
// min:ƒ min()
// pow:ƒ pow()
// random:ƒ random()
// round:ƒ round()
// sign:ƒ sign()
// sin:ƒ sin()
// sinh:ƒ sinh()
// sqrt:ƒ sqrt()
// tan:ƒ tan()
// tanh:ƒ tanh()
// trunc:ƒ trunc()
// Symbol(Symbol.toStringTag):"Math"