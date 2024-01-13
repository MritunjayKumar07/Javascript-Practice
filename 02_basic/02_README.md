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
