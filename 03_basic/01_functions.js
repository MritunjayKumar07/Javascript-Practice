function saymayname(){ 
    console.log("M")
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("U")
    console.log("N")
    console.log("J")
    console.log("A")
    console.log("Y")
}

/*"functon" is keyWord of function, function name "saymayname", function Syntex "()",
"{ console.log("M")console.log("R")console.log("I")console.log("T")console.log("U")console.log("N")console.log("J")console.log("A")console.log("Y")}" Function Defination */

saymayname() // Function Exicute
// saymayname // Function refrence
const fun = saymayname;
fun()

console.log("-----------------------------------------------------------------")

function addTwoNumbers(number1, number2){ // number1, number2 this to are Parameters
    console.log(number1+number2)
}

addTwoNumbers() // return :NaN
addTwoNumbers(3, "8") // return :38
addTwoNumbers(3, null) // return :3  //3, null  This two are Arguments.

const result = addTwoNumbers(3,5) 
console.log("Result:",result); //return :-  Result: undefined
/*Ya function kuch return nhi ker raha hy, 
only Console ker raha thays way is print, 
console not return any things that way Result: undefined*/

console.log("-----------------------------------------------------------------")

function addTwoNumbers2(number1, number2){ // number1, number2 this to are Parameters
    return number1+number2
    console.log("Hello...")//Not Print This Return ka bad koi valur return nhi kerta hy.
}

const result2 = addTwoNumbers2(3,5) 
console.log("Result:",result2); //return :-  Result: 8

console.log("-----------------------------------------------------------------")
 
function loginUserMessage(userName) {
    return `${userName} just logged in...`
}
loginUserMessage("Mritunjay"); //Not Return any things, Becouse Only return not print any things.
console.log(loginUserMessage("Mritunjay")) // return :- Mritunjay just logged in...    Becouse Return Print By Console
console.log(loginUserMessage()) // return :- Undefined 

console.log("-----------------------------------------------------------------")

function login(userName) {
    if (userName) { // You can Use also (userName === undefined) or !undefined
        return `${userName} just logged in...`
    } else {
        return `Enter your name...`
    }
    
}

console.log(login()) // return :- Undefined 
console.log(login("Mritunjay")) // return :- Undefined 

console.log("------------------------------------loginDefoult-----------------------------")

function loginDefoult(userName = "Kumar") {
    return `${userName} just logged in...`
}

console.log(loginDefoult()) // return :- Kumar just logged in... 
console.log(loginDefoult("Mritunjay")) // return :- Mritunjay just logged in... 

//--------------------------Time :- 4:54:33 --------------------------