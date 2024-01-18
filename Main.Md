# Javascript

- curly brace operator: `{}`
- Square brackets: `[]`
- JavaScript is a `prototype language`.

# Topics Covered:

1. [Data Types](#data-types)
2. [Conversions](#conversions)
3. [Operations](#operations)
4. [Data Type Details](#data-type-details)
5. [Memory Management](#memory-management)
6. [String in JavaScript](#string-in-javascript)
7. [Numbe in JavaScript](#Numbe-in-JavaScript)
8. [Create array](#create-array)
9. [Some Method of Array](#some-method-of-array)
10. [slice and splice](#slice-and-splice)
11. [flat](#flat)
12. [Aske is an array Or convert in to array](#aske-is-an-array-or-convert-in-to-array)
13. [OBJECTS](#objects)
14. [Create array](#create-array)
15. [Literal](#literal)
16. [Singleton or Consteracter](#singleton-or-consteracter)
17. [Object Destructuring](#object-destructuring)
18. [Basic of Functions](#basic-of-functions)
19. [Parameters And Arguments](#parameters-and-arguments)
20. [Scope](#scope)
21. [OBJECTS](#objects)
22. [Literal](#literal)
23. [Use Symbol key inside Object](#use-symbol-key-inside-object)
24. [Object freeze](#object-freeze)
25. [Singleton or Consteracter](#singleton-or-consteracter)
26. [Execution Context And Call Stack](#execution-context-and-call-stack)

## Difference Between Null, Undefined & Symbol `three distinct data types`

- Null(Object): let val = ""; `absence of value`
- Undefined(Undefined): let val; `not initialized any value`
- Symbol: unique; `Each (symbol) value is guaranteed to be unique`

## Conversions:-

- Convert to Number: `Number()`
- Convert to Boolean: `Boolean()`
- Convert to String: `String()`

## Notes (Conversion Number):

- "33" => 33
- "33abc" => NaN
- null => 0
- Undefined => NaN
- true => 1
- false => 0
- "Mritun" => NaN

## Operations `(+,-,<,>,*,/,%,==,!=,===,>=,<=)`

- "str"+2=>str2
- 1+"str"=>1str
- 1+"2"=>12 (type of string)
- 2+2+"2"=>42 (type of string)
- "2"+2=>22 (type of string)
- "2"+2+2=>222 (type of string)
- 2+4*5/9 => Wrong Way Use this way ((2+4)*5)/9

- if true = 1
- +true =>1
- -true =>-1
- +false =>0
- -false =>-0
- +"" => 0
- +"mk" => NaN
- num1 = num2 = num3 = 2+9
- game = 100
- game++, game-- `postfix operator`
- ++game, --game `prefix operator`

## Data Types

### 1. Primitive `number, string, boolean, bigint, null, undefined, symbol`

### 2. Non-Primitive `Object{}, Array(), Functions()`

### Primitive DataType `Call by value`

In Primitive DataType, Jub bhe ap koi variable
declear kerta hy to uska copy milta hy ap ko,👈👀
insub value ka reference nhi dia jata hy copy ker
ka dia jata hy or jo bhe changes kerta hy wo copy
ma changes kerta hy.

Example:-

```javascript
let myYoutubeName = 'MritunjayKumar'
let anotherChannel = myYoutubeName
anotherChannel = "YoutubeChannel"

console.log([myYoutubeName, anotherChannel])

return:-[ 'MritunjayKumar', 'YoutubeChannel' ]
```

```javascript
const id = Symbol("123")
const anotherid = Symbol("123")

console.log([id, anotherid, typeof id, typeof anotherid, id === anotherid]);

return :- [ Symbol(123), Symbol(123), 'symbol','symbol', false ]

//id and anotherid not same because symbol() datatype is convert the space and unique .symbol() is converted any value into a unique value.

const bitNumber = 21654654516581454516484515454n
console.log(typeof bitNumber); return:-BigInt
```

### Non-Primitive/Reference `call by reference`

- In Non-Primitive DataType, Jub bhe ap koi variable declare kerta hy to uska reference milta hy ap ko,👈👀
  insub value ka copy nhi dia jata hy direct reference utha
  ka dia jata hy or jo bhe changes kerta hy wo direct
  Original value ma changes kerta hy ap.

Example :-

```javascript
const heroArr = ['Github', "gitbas", "visualstudio"]
const heroObj = { name: 'Github', age: 22, isLoggedIn: true}
const heroFun = function () {console.log("My Fun")}

console.log([typeof heroArr, typeof heroObj, typeof heroFun])

return:- ['object', 'object', 'function']
```

## Memory Management

- `Two Types:-Stack,Heap`

### Primitive Datatype use the Stack memory.

- Primitive data types directly contain values.
  They are small in size and can be stored on the stack memory. Stack memory is a portion of the RAM where the CPU stores
  primitive data types, method calls, and local variables.

- The difference between the primitive data type and the
  stack memory is `SUBTITLE`. Primitive data types are stored
  directly on the stack memory. When you create a variable
  and assign a value to it, the value is stored in the memory allocated for that variable.

- For example, in JS, if you declare a number variable, const num = 10;,the value 10 is stored in the stack memory as a 32-bit integer.

Example `Memory work`:

```javascript
let myYoutubeName2 = 'MritunjayKumar'
let anotherChannel2 = myYoutubeName2
anotherChannel2 = "YoutubeChannel"

console.log([myYoutubeName2, anotherChannel2])

return:-[ 'MritunjayKumar', 'YoutubeChannel' ]

```

![STACK Memory Diagram](./01_basic/01_basic_Page_01_to_07_Diagram_01.png)

### Non-Primitive Datatype use the Heap memory.

- Non-primitive data types are stored in heap memory.

- Heap memory is a large and flexible area of memory
  used for dynamic memory allocation.
  When a new object is created in the JS,
  it is allocated memory in the heap memory.

- For example, when you create an integer array of length 10,you are creating an object that consists of an integer array reference,an integer count, and 10 integer values.Each integer is 32 bits in size, so the entire array object is approximately 400 bits (32 bits x 10 integers) in size.

Example (Memory Work):

```javascript

let userOne = {
email: 'user@google.com',
upi: 'user@yblu',
}

console.log([userOne, userTwo])

return :-
  [{ email: 'mritunjay@gmail.com', upi: 'user@yblu' },
   { email: 'mritunjay@gmail.com', upi: 'user@yblu' }]


```

![HEAP Memory Diagram](./01_basic/01_basic_Page_01_to_07_Diagram_02.png)

## String in JavaScript

- Declare string 2 way
- First

```javascript
const gameName = "Mritunjay Kumar";
```

- Second

```javascript
const gameName = new String("Mritunjay Kumar");
//new use to create object. Also declear new string.
console.log(gameName)
console.log(gameName[0])

return :-
[String: 'Mritunjay Kumar']
M
```

- If you try to run in the browser console this line `new String('Mritunjay Kumar')` you got all methods and property of string.

### Some property for string:

```Javascript
const gameName = "Mritunjay Kumar";

 gameName.length; //find length of string.
 gameName.toUpperCase(); //convert to upper case
 gameName.charAt(2); //find second index character
 gameName.indexOf("t"); //find character index

 const newString = "   Mritunjay    ";
 newString =     Mritunjay
 newString.trim() = Mritunjay

 const url = "https://mritunjay://com%20domain%20kumar";
 console.log(url.replace("%20", "_")) // return:-  https://mritunjay://com_domain%20kumar
 url.includes("sundar") = false
 url.includes("mritunjay") = true
 url.split("/") = [ 'https:', '', 'mritunjay:', '', 'com%20domain%20kumar' ]
```

## Numbe in JavaScript

- Declear number 2 way
- First

```
const score = 400;
```

- Second

```
const balance = new Number(100);
```

- If you try to run in the browser console this line `new Number(100)` you got all methods and property of numbers.

### Some Methods of Numbers

```javascript
balance = 1;
balance.toString().length; //return :- 3
balance.toFixed(2); //return :-  100.00
```

### MATHS Library

- If you try to run in the browser console this line `console.log(Math)` you got all function of Math.

```javascript
Math.abs(-4) //return:- 4
//abs() function change - to + not + to -

 Math.round(4.3) = 4
 // round() function is used for remove the decimal part from a number
 Math.ceil(4.3) = 5
 //top value select 4 sa thoda bhe jayada hoga to top vlalue choose
 Math.floor(4.9) = 4
 //lower value select 5 sa thoda bhe kam hoga to lower vlalue choose
 Math.min(4, 8, 1, 0, 9) = 0
 //lower value select
 Math.random()
 //bitween 0 to 1 (ex:-0.85984596585296, 0.85854585452842,0.7896541241 and etc 0.sumthing)
 Math.random() * 10 = 5.98989898
 //any random number under 10 degit
```

Example of Math:

```Javascript
 const min = 10;
 const max = 20;
 Math.floor(Math.random() * (max - min + 1)) + min
 // random number bitween 10 to 20.
// (max - min + 1): Calculates the range of values. In your //example, with min as 10 and max as 20, the range is 11.
// Math.random() * (max - min + 1): Scales the random number// to fit within the range (0, 11).
// (max - min +1) => 11;
// (Math.random() * (max - min +1)) => 0 to 11
// (Math.random() * (max - min +1))+min => 10 to 21
```

---

# Array

## Create array

- 1th way

```javascript
array2 = ["mritunjay", true, 452522];
```

- 2nd way

```javascript
array3 = new Array(1, "mk", false);
//write in console to know all methos of array
```

## Some Method of Array

- In Method paranthises is use like arr.`pop()` then pop is method and () that is paranthises.

```javascript
let array1 = ["mritunjay", true, 452522];
let array2 = [1, "mk", false];
arr = [...array1, ...array2]; //Spreade operater Use to murj two or more array
Return: -["mritunjay", true, 452522, 1, "mk", false];

arr[3]; //Get Particuler value by index id from array
Return: -1;

arr.push("Rahul"); //Add element on last in array
Return: -["mritunjay", true, 452522, 1, "mk", false, "Rahul"];

arr.pop(); //Remove last element from last and return removal element
Return: -Rahul;

arr;
Return: -["mritunjay", true, 452522, 1, "mk", false];

arr.unshift(9); //Add element in start
console.log(arr);
Return: -[9, "mritunjay", true, 452522, 1, "mk", false];

arr.shift(9); //Remove start element from array
console.log(arr);
Return: -["mritunjay", true, 452522, 1, "mk", false];

arr.includes(9); //If element present then true another wise false
Return: -false;

arr.indexOf("mritunjay"); //Get element index (if element not present then return -1)
Return: -1;

arr.join(); //Convert to string ( And typeof also return string)
Return: -mritunjay, true, 452522, 1, "mk", false;
```

## slice and splice

```javascript
arr = [4, 5, 6, "mritunjay", true];
```

### Slice `Extract a section of an Array`

Syntax : arr.slice(startIndex, endIndex)

```javascript
console.log("A", arr);
Return: -A[(4, 5, 6, "mritunjay", true)];

myn1 = arr.slice(1, 3);
console.log(myn1);
Return: -[5, 6];

console.log("B", arr);
Return: -B[(4, 5, 6, "mritunjay", true)];
```

### Splice `Remove elements from an Original Array`

Syntax : arr.splice(startIndex, deleteCount)

```javascript
console.log("C", arr);
Return: -C[(4, 5, 6, "mritunjay", true)];

myn2 = arr.splice(1, 3);
console.log(myn2);
Return: -[5, 6, "mritunjay"];

console.log("D", arr);
Return: -D[(4, true)];
```

## Some methode <mark>IMP</mark>

```javascript
const arr1 = ["Mritunjay", 9835678727, true];
const arr2 = ["Kumar", 0, false];

arr1.push(arr2); //Insert arr2 inside arr1 original Existing array.
Return: -["Mritunjay", 9835678727, true, ["Kumar", 0, false]];

arr1[3][0]; //Get elements
Return: -Kumar;

arr1.concat(arr2); // add two array and return new array(Not disturb Existing array)
Return: -["Mritunjay", 9835678727, true, "Kumar", 0, false];
```

## flat()

- `use to deStructure the array.`

```javascript
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
arr.flat();
Return: -[1, 2, 3, 4, 5, 6, 7, [8, 9, [10, 11]]];

another_array.flat(Infinity);
Return: -[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

another_array.flat(1);
Return: -[1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11]];

another_array.flat(2);
Return: -[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
```

## Aske is an array Or convert in to array

- `IMP Intrivew`

```javascript
Array.isArray("Mritunjay Kumar"); //Cheak is array or not
Return: -false;

Array.from("Mritunjay Kumar"); //Convert to array
Return: -[
  "M",
  "r",
  "i",
  "t",
  "u",
  "n",
  "j",
  "a",
  "y",
  " ",
  "K",
  "u",
  "m",
  "a",
  "r",
];

console.log(Array.from({ name: "mritunjay" }));
// convert in to array empty array return :- {}
console.log(Array.from({ name: "mritunjay" }));
// convert in to array  anothe way if convert object ot array then use key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
Array.of(score1, score2, score3, score4);
Return: -[100, 200, 300, 400];
```

## OBJECTS

- `new Object();` All method when use in console.
- Object Declear two way `Literals, Constructer`.
### 1. Literal Wise
- `Using literal notation is a straightforward way to create an object`.

```javascript
Example:-
let car = {
  name: "GT",
  maker: "BMW",
  engine: "1998cc",
};

```

### 2. Constructor Wise
- Constructor `Constructors are functions` used with the `new` keyword to create instances(occurrence of something) of objects.

```javascript
Example: -function Vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
};
let car = new Vehicle("GT", "BMW", "1998cc");
```


### 3. Singleton Object

-` const TinderObject = new Object();` This is Singleton Object.

### 4. Using Object.create()

```javascript
Object.create({
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
  },
});
```

### 5. Using es6 classes

```javascript
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}
let car1 = new Vehicle("GT", "BMW", "1998cc");
```

## Literal

- In programming, an object literal is a `notation for creating an object using a set of key-value pairs`.
- `const JsUser = {};` Create empty Object And Non Singleton Object

```javascript
const JsUsers = {  //Create Object with Key and value
    name: "Mritunjay",
    age: 18,
    "full name": "Mritunjay Kumar", //Alwase Object treat all Key as a String.
    location: "Jaipur",
    email: "mritunjay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
}
//person is an object literal with properties firstName, lastName, age, and a method fullName.

JsUsers.email; //Get data from Object
JsUsers."full name"; `or Use` JsUsers.full name; //Give Error
JsUsers["full name"]; //Use Another way Becouse JsUsers.full name not posible thats way we use another way JsUsers[""full name""]
```

### use Symbol key inside Object `Using [Key]`

```javascript
const symbolKey = Symbol("ID");
const user = {
  name: "Mritunjay",
  symbolKey: "User123", //not Work This Way symbolKey Kay is a type of string.
  age: 18,
};
const user1 = {
  name: "Mritunjay",
  symbolKey: "Kumar",
  [symbolKey]: "User123", //Work This Way symbolKey Kay is a type of Symbol.
  age: 18,
};
```

- `user[symbolKey];` return :- undefined
- `user1[symbolKey];` Axcess Symbol return :- User123
- `user1["symbolKey"];` return :- Kumar

### Object freeze `No One can change the value of in object.`

- `user1;` Return :- { name: 'Mritunjay', symbolKey: 'User123', age: 18, [Symbol(ID)]: 'User123'}
- `user1.email = "Kumar@gmail.com";` Insert Date in Object
- `user1;` Return :-{ name: 'Mritunjay', symbolKey: 'User123',age: 18, email: 'Kumar@gmail.com', [Symbol(ID)]: 'User123'}

- `Object.freeze(user1);` Use to freeze the object (No One can change the value of in object.)
- `Object.isFrozen(user1);` // Cheak Object if freez or not return :- true

- `user1.email = "Mritunjay@gmail.com";`
- `user1;` Return :- { name: 'Mritunjay', symbolKey: 'User123', age: 18, email: 'Kumar@gmail.com', [Symbol(ID)]: 'User123'}

- `const UnFreezonObject = Object.assign({}, user1);` UsFreez the Object.

```javascript
UnFreezonObject.greeting = function () {
    console.log("Hello Function...");
};
UnFreezonObject.greetingTwo = function () {
    console.log(`Hello Function... ${this.name}`); // this is use to get same object data (it's refrence of same object).
};

console.log(UnFreezonObject.greeting);
return :- [Function (anonymous)]

console.log(UnFreezonObject.greeting());
return :- Hello Function...

console.log(UnFreezonObject.greetingTwo());
return :- Hello Function... Mritunjay
```

## Singleton or Consteracter

### 1. Singleton or none Singleton

```javascript
const Object1 = new Object(); // This is Singleton Object
const Object2 = {}; // This is Non Singleton Object
```

### 2. Some Property

```javascript
const TinderObject = {};

TinderObject.id = "123abc";
TinderObject.name = "Mritunjay";
TinderObject.isLoggedIn = false;

Object.keys(TinderObject);
return:- [ 'id', 'name', 'isLoggedIn' ]

Object.values(TinderObject);
return:- [ '123abc', 'Mritunjay', false ]

Object.entries(TinderObject);
return:- [[ 'id', '123abc' ],[ 'name', 'Mritunjay' ],[ 'isLoggedIn', false ]]

TinderObject.hasOwnProperty("name");
//hasOwnProperty() this property cheak is key avelable or not. return:- true

const regularUser = {
    email: "mk@mk.com",
    fullName: {
        userfullname: {
          firstName: "Mritunjay",
          lastName: "Kumar",
        },
      },
  };

regularUser.fullName.userfullname;
return :-{ firstName: 'Mritunjay', lastName: 'Kumar' }
regularUser.fullName.userfullname.firstName;
return :-Mritunjay

const Obj1 = { 1: "a", 2: "b" };
const Obj2 = { 3: "c", 4: "b", 5: "e" };
const obj3 = { Obj1, Obj2 };
obj3;
return :- {Obj1: { '1': 'a', '2': 'b' },Obj2: { '3': 'c', '4': 'b', '5': 'e' }}

const obj4 = Object.assign(Obj1, Obj2);
const obj5 = Object.assign({}, Obj1, Obj2); // Correct Way
const obj6 = { ...Obj1, ...Obj2 }; // Correct Way
obj4;
return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
obj5;
return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
obj6;
return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
```

### 3. Come Data From Data Base `Handle`

```javascript
const DataBaseUser = [
  { id: 1, email: "mk@gmail.com" },
  { id: 2, email: "mk1@gmail.com" },
  { id: 3, email: "mk2@gmail.com" },
  { id: 4, email: "mk3@gmail.com" },
  { id: 5, email: "mk4@gmail.com" },
];
console.log(DataBaseUser[1].email);
```

## Object Destructuring

```Javascript
let person = {
   name: "John Doe",
   age: 30,
   cityName: "New York",
};
console.log(person.cityName); // 1th Way
const { cityName: city, age, name } = person;
  // 2th Way (Correct Way)
  // city take refrence of cityName
  // cityName: city, Change the variable city = cityName
```

# Function

## Basic of Functions

```javascript
function saymayname() {
  console.log("Mritunjay");
}
```

- `functon` => KeyWord of the function,
- `saymayname` => Name of the function ,
- `()` => Syntex of the function ,
- `{}` => Scop of the function,
- `{ console.log("Mritunjay") }` => Defination of the function in side the scope,
- `saymayname();` => Exicut the function (immediately invokes ).
- `const fun = saymayname;` => assigns the reference to the saymayname function (without invoking it) to the variable fun.

- `const fun = saymayname();`=> Assigns the result of invoking the saymayname
  function to the variable `fun`.However, since saymayname does not have a
  return statement, it returns undefined. As a result, `fun` will be assigned
  the value `undefined`, and the function will be executed immediately.

- `fun();` => Call the function.

## Parameters And Arguments

```javascript
function addTwoNumbers(number1, number2) {
  //number1, number2 is taking Parameters
  console.log(number1 + number2);
  console.log("Hello..."); //Not Print This Return ka bad koi valur return nhi kerta hy.
}
addTwoNumbers(5, 7); //Execute the function //or you pass null or undefine any things any type of value.
```

- 5 And 6 is `Arguments pass`
- const result = addTwoNumbers(3, 5); //Give refrence of the function to result
- console.log("Result:", result); //return :- 8 and next Result: undefined
- Ya function kuch return nhi ker raha hy, only Console ker raha thays way is print, console not return any things that way Result: undefined.
- `One Scope take only one return`, If multiple scope in side scope then use Mritunjay return in each scope.

```javascript
function addTwoNumbers2(number1, number2) {
  return number1 + number2;
}
```

- const result2 = addTwoNumbers2(3, 5);
- console.log("Result:", result2); //return :- Result: 8
- if you return then show return

```javascript
function loginUserMessage(userName) {
  return `${userName} just logged in...`;
}
oginUserMessage("Mritunjay"); //Not Return any things, Becouse Only return not print any things.
console.log(loginUserMessage("Mritunjay")); // return :- Mritunjay just logged in...    Becouse Return Print By Console
console.log(loginUserMessage()); // return :- Undefined

function loginDefoult(userName = "Kumar") {
  //Use ByDefoult value is Kumar
  return `${userName} just logged in...`;
}
console.log(loginDefoult()); // return :- Kumar just logged in...
console.log(loginDefoult("Mritunjay")); // return :- Mritunjay just logged in...

//Pass multiple Parameters and multiple Arguments:
function calculate(...num1) {
  //... this is rest operater (... define based on use case it's also spred operater or rest operater.)
  return num1;
}
or;
function calculate(val1, val2, ...num1) {
  return num1;
}

console.log(calculate(200, 100, 500, 2000)); // return :- [ 200, 100, 500, 2000 ]

//Pass Object in functions:
const user = {
  userName: "Mritunjay",
  price: 90,
};
function handleObject(anyObject) {
  console.log(
    `UserName if ${anyObject.userName} & Price is ${anyObject.price}.`
  );
}
handleObject(user); // return :- UserName if Mritunjay & Price is 90.

//Pass Array in functions:
function handleArray(anyArray) {
  return anyArray[0];
}
console.log(handleArray([200, 300, 400, 500]));
```

## Scope

- `Local Scope`: A variable which can be accessed only in a particular block of code called local scope.
- `Global Scope`: A variable which can be accessed anywhere in the program called global scope.
- `Block Scope`: It’s an advanced feature introduced by ES6 that allows us to declare variables inside blocks such as if statements, for loops.

### In JavaScript there are two types of Scopes:

- **Local Scope**: It is created by any block of code such as for loop, while loop, if statement etc.
- **Global Scope**: If no other scope exists then it becomes the global scope. Variables declared outside any function are available throughout the entire

### 1. `{}` curly bracket is a scope when come with any function or if else.

```javascript
var c1 = 300;
if (true) {
  let a1 = 10;
  const b1 = 20;
  var c1 = 30;
}
a1; // return :- ReferenceError: a1 is not defined
b1; // return :- ReferenceError: b1 is not defined
c1; // return :- 30
```

- Any variable declear in scope `Called Block Scope`.
- Any Variable declear in outSide of function `called Global Scope`.

```javascript
let a2 = 150;
const b2 = 250;
if (true) {
  let a2 = 110;
  const b2 = 210;
  console.log([a2, b2]); // return :- [ 110, 210 ]
}
console.log([a2, b2]); // return :- [ 150, 250 ]
```

- Browser Scope or Node Scope working differnent to each other.

### 2. Initialization

```javascript
console.log(AddTwo(7)); // return :- RefrenceError: Cannot access 'AddTwo' before initialization.
const AddTwo = function (num) {
  return num + 1;
};
```

## OBJECTS

- Object Declear two way (Literals, Constructer ).
- Different Bitween Literal And Consteracter is only Singleton.
- Litrals can't make singleton, But Constructer make Singleton.
- `new Object();` All method when use in console.

- 1. Object made by Singleton: `const TinderObject = new Object(); //This is Singleton Object`

- 2. Constructor wise:

```javascript
function vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}
let car = new vehicle("GT", "BMW", "1998cc");
```

- 3. Literal wise:

```javascript
let car = {
  name: "GT",
  maker: "BMW",
  engine: "1998cc",
};
```

- 4. Using Object.create():

```javascript
Object.create({
  isStudying: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
  },
});
```

- 5. Using es6 classes:

```javascript
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}
let car1 = new Vehicle("GT", "BMW", "1998cc");
```

## Literal

- In programming, an object literal is a notation for creating an object using a set of key-value pairs.

```javascript
const JsUser = {}; //Create empty Object And Non Singleton Object
   const JsUsers = {  //Create Object with Key and value
    name: "Mritunjay",
    age: 18,
    "full name": "Mritunjay Kumar", //Alwase Object treat all Key as a String.
    location: "Jaipur",
    email: "mritunjay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
   }
   //person is an object literal with properties firstName, lastName, age, and a method fullName.

   JsUsers.email; //Get data from Object
   JsUsers."full name"; or Use JsUsers.full name; //Give Error
   JsUsers["full name"]; //Use Another way Becouse JsUsers.full name not posible thats way we use another way JsUsers[""full name""]
```

## Use Symbol key inside Object

- Using [Key]

```javascript
const symbolKey = Symbol("ID");
const user = {
  name: "Mritunjay",
  symbolKey: "User123", //not Work This Way symbolKey Kay is a type of string.
  age: 18,
};
const user1 = {
  name: "Mritunjay",
  symbolKey: "Kumar",
  [symbolKey]: "User123", //Work This Way symbolKey Kay is a type of Symbol.
  age: 18,
};
user[symbolKey]; // return :- undefined
user1[symbolKey]; //Axcess Symbol return :- User123
user1["symbolKey"]; // return :- Kumar
```

## Object freeze

- No One can change the value of in object.

```javascript
user1; //Return :- { name: 'Mritunjay', symbolKey: 'User123', age: 18, [Symbol(ID)]: 'User123'}
user1.email = "Kumar@gmail.com"; //Insert Date in Object
user1; // Return :-{ name: 'Mritunjay', symbolKey: 'User123',age: 18, email: 'Kumar@gmail.com', [Symbol(ID)]: 'User123'}

Object.freeze(user1); // Use to freeze the object (No One can change the value of in object.)
Object.isFrozen(user1); // Cheak Object if freez or not return :- true

user1.email = "Mritunjay@gmail.com";
user1; //Return :- { name: 'Mritunjay', symbolKey: 'User123', age: 18, email: 'Kumar@gmail.com', [Symbol(ID)]: 'User123'}

const UnFreezonObject = Object.assign({}, user1); // UsFreez the Object.

UnFreezonObject.greeting = function () {
  console.log("Hello Function...");
};

UnFreezonObject.greetingTwo = function () {
  console.log(`Hello Function... ${this.name}`); // this is use to get same object data (it's refrence of same object).
};

console.log(UnFreezonObject.greeting); // return :- [Function (anonymous)]
console.log(UnFreezonObject.greeting()); //return :- Hello Function...
console.log(UnFreezonObject.greetingTwo()); //return :- Hello Function... Mritunjay
```

## Singleton or Consteracter

### 1. Singleton or none Singleton

```javascript
const Object1 = new Object(); // This is Singleton Object
const Object2 = {}; // This is Non Singleton Object
```

### 2. Some Property

```javascript
const TinderObject = {};

TinderObject.id = "123abc";
TinderObject.name = "Mritunjay";
TinderObject.isLoggedIn = false;

Object.keys(TinderObject); //return:- [ 'id', 'name', 'isLoggedIn' ]
Object.values(TinderObject); //return:- [ '123abc', 'Mritunjay', false ]
Object.entries(TinderObject); //return:- [[ 'id', '123abc' ],[ 'name', 'Mritunjay' ],[ 'isLoggedIn', false ]]
TinderObject.hasOwnProperty("name"); //hasOwnProperty() this property cheak is key avelable or not. return:- true

const regularUser = {
  email: "mk@mk.com",
  fullName: {
    userfullname: {
      firstName: "Mritunjay",
      lastName: "Kumar",
    },
  },
};

regularUser.fullName.userfullname; // return :-{ firstName: 'Mritunjay', lastName: 'Kumar' }
regularUser.fullName.userfullname.firstName; // return :-Mritunjay

const Obj1 = { 1: "a", 2: "b" };
const Obj2 = { 3: "c", 4: "b", 5: "e" };
const obj3 = { Obj1, Obj2 };
obj3; // return :- {Obj1: { '1': 'a', '2': 'b' },Obj2: { '3': 'c', '4': 'b', '5': 'e' }}

const obj4 = Object.assign(Obj1, Obj2);
const obj5 = Object.assign({}, Obj1, Obj2); // Correct Way
const obj6 = { ...Obj1, ...Obj2 }; // Correct Way
obj4; // return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
obj5; // return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
obj6; // return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
```

### 3. Come Data From Data Base (Handle)

```javascript
const DataBaseUser = [
  { id: 1, email: "mk@gmail.com" },
  { id: 2, email: "mk1@gmail.com" },
  { id: 3, email: "mk2@gmail.com" },
  { id: 4, email: "mk3@gmail.com" },
  { id: 5, email: "mk4@gmail.com" },
];
console.log(DataBaseUser[1].email);
```

### 4. Object Destructuring

```javascript
let person = {
  name: "John Doe",
  age: 30,
  cityName: "New York",
};
const { cityName: city, age, name } = person; // 2th Way (Correct Way) (cityName: city, Change the variable city = cityName)
```

## Execution Context And Call Stack

![Execution Context & Call Stack](./03_basic/03_basic_Page_05_to_06_Summary.png)
