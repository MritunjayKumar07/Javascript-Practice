const score = 400
console.log(score) //400
const balance = new Number(100);
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

//----------------------DATES Library--------------------------
// month start from 0
let myDate = new Date(); 
console.log(typeof myDate) // return: object
console.log(myDate) // return: 2023-12-07T02:44:58.064Z
console.log(myDate.toString()) // return: Thu Dec 07 2023 08:14:58 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // return:Thu Dec 07 2023
console.log(myDate.toISOString()) // return:2023-12-07T02:47:51.214Z
console.log(myDate.toJSON()) // return:2023-12-07T02:47:51.214Z
console.log(myDate.toLocaleString()) // return:12/7/2023, 8:17:51 AM
console.log(myDate.toLocaleDateString()) // return:12/7/2023
console.log(myDate.toTimeString()) // return:08:17:51 GMT+0530 (India Standard Time)

console.log(myDate.getFullYear()) // return:2023
console.log(myDate.getMonth()) // return:11
console.log(myDate.getDay()) // return:4
console.log(myDate.getHours()) // return:8
console.log(myDate.getMinutes()) // return:21
console.log(myDate.getDate()) // return:7
console.log(myDate.getTime()) // return:1701917490092

let myDefineDate = new Date(2022, 0, 23);
console.log(myDefineDate.toDateString()) // return: Sun Jan 23 2022 
console.log(myDefineDate.toLocaleDateString()) // return: 1/23/2022

let myDefineDateTime = new Date(2022, 0, 23, 7, 8);
console.log(myDefineDateTime.toLocaleString()) // return 1/23/2022, 7:08:00 AM


let myCustomeDefineDateTime = new Date("2022-01-23");
console.log(myCustomeDefineDateTime.toLocaleString()) // return: 1/23/2022, 5:30:00 AM

let myCustomeDefineDateTime2 = new Date("01-23-2023");//(MM-DD-YYYY)
console.log(myCustomeDefineDateTime2.toLocaleString()) // return: 1/23/2023, 5:30:00 AM

//use for who fast give answer:-
let myTimeStamp =Date.now()// or you use new.Date
console.log(myTimeStamp)// return in milisecond  :-1701919138629
console.log(Math.floor(myTimeStamp/1000))// convert to second return:1701919496
console.log(myCustomeDefineDateTime2.getTime())// return in milisecond  :-1674412200000
console.log(myTimeStamp > myCustomeDefineDateTime2.getTime())//compair


console.log(new Date().toLocaleString('default',{
    weekday:"long",
    year:"2-digit",
    //etc value use (ctrl + space) to know all calue.
})) //23 Thursday 