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
- 1+"2"=>12
- 2+2+"2"=>42
- "2"+2+2=>222
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
  stack memory is subtle. Primitive data types are stored
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

![STACK Memory Diagram](./01_basic_Page_01_to_07_Diagram_01.png)

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

![HEAP Memory Diagram](./01_basic_Page_01_to_07_Diagram_02.png)

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

### Some Methods of string

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

-----------------------------------------------------------------------------------------------------------------
# Array

# Topics Covered:

1. [Create array](#create-array)
2. [Some Method of Array](#some-method-of-array)
3. [slice and splice](#slice-and-splice)
4. [flat](#flat)
5. [Aske is an array Or convert in to array](#aske-is-an-array-or-convert-in-to-array)
6. [OBJECTS](#objects)
7. [Create array](#create-array)
8. [Literal](#literal)
9. [Singleton or Consteracter](#singleton-or-consteracter)
10. [Object Destructuring](#object-destructuring)

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

arr.push("Rahul"); //Add element on lase in array
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

### Slice `Extract a section of an Original Array`

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

## Some methode

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
Return: -["M","r","i","t","u","n","j","a","y"," ","K","u","m","a","r",];

console.log(Array.from({ name: "mritunjay" }));
// convert in to array empty array return :- {}
console.log(Array.from({ name: "mritunjay" }));
// convert in to array  anothe way if convert object ot array then use key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
Array.of(score1, score2, score3, score4); 
Return:- [100, 200, 300, 400 ]
```

## OBJECTS
- Object Declear two way `Literals, Constructer`
- Different Bitween Literal And Consteracter is only `Singleton`: Litrals can't make singleton, But Constructer make Singleton.
- `new Object();` All method when use in console.

## Create array

### 1. Object made by Singleton
-` const TinderObject = new Object();` This is Singleton Object

### 2. constructor wise

```javascript
function vehicle(name,maker,engine){
    this.name = name;  
    this.maker = maker;
    this.engine = engine;
  }
let car  = new vehicle('GT','BMW','1998cc');
```

### 3. literals wizw
```javascript
let car = {
    name : 'GT',
    maker : 'BMW',
    engine : '1998cc'
  };
```

### 4. Using  Object.create()

```javascript
Object.create({
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    }
});
```

### 5. Using es6 classes

```javascript
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
    }
}
let car1 = new Vehicle('GT', 'BMW', '1998cc');
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
- `user1["symbolKey"];`  return :- Kumar

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
const Object1 = new Object() // This is Singleton Object
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
