function saymayname() {
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

function addTwoNumbers(number1, number2) { // number1, number2 this to are Parameters
    console.log(number1 + number2)
}

addTwoNumbers() // return :NaN
addTwoNumbers(3, "8") // return :38
addTwoNumbers(3, null) // return :3  //3, null  This two are Arguments.

const result = addTwoNumbers(3, 5)
console.log("Result:", result); //return :-  Result: undefined
/*Ya function kuch return nhi ker raha hy, 
only Console ker raha thays way is print, 
console not return any things that way Result: undefined*/

console.log("-----------------------------------------------------------------")

function addTwoNumbers2(number1, number2) { // number1, number2 this to are Parameters
    return number1 + number2
    console.log("Hello...")//Not Print This Return ka bad koi valur return nhi kerta hy.
}

const result2 = addTwoNumbers2(3, 5)
console.log("Result:", result2); //return :-  Result: 8

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

console.log("------------------------------------multiple value pass-----------------------------")

function calculateCartPrice(...num1) { //... this is rest operater (... define based on use case it's also spred operater or rest operater.)
    return num1;
}

console.log(calculateCartPrice(200, 100, 500, 2000)) // return :- [ 200, 100, 500, 2000 ]

//or 

function calculateCartPriceDifferent(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPriceDifferent(200, 100, 500, 2000)) // return :- [ 500, 2000 ]

const user = {
    userName: "Mritunjay",
    price: 90,
}

function handleObject(anyObject) {
    console.log(`UserName if ${anyObject.userName} & Price is ${anyObject.price}.`)
}
handleObject(user);// return :- UserName if Mritunjay & Price is 90.

function handleArray(anyArray) {
    return anyArray[0];
}
console.log(handleArray([200, 300, 400, 500]))

console.log("-----------------------------------------------------------------")

const addTwo = function (num) {
    return num + 1
}
addTwo(5)




//end
