# Function

## Topics Covered:

1. [Basic of Functions](#basic-of-functions)
2. [Parameters And Arguments](#parameters-and-arguments)
3. [Scope](#scope)
4. [OBJECTS](#objects)
5. [Literal](#literal)
6. [Use Symbol key inside Object](#use-symbol-key-inside-object)
7. [Object freeze](#object-freeze)
8. [Singleton or Consteracter](#singleton-or-consteracter)
8. [Execution Context And Call Stack](#execution-context-and-call-stack)

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
![Execution Context & Call Stack](../03_basic/03_basic_Page_05_to_06_Summary.png)