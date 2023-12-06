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
console.log(Math.random() * 10) //return 5.989898qr98 (any random number under 10 degit) 
