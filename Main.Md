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

