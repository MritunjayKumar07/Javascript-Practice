# Iterations

## Topics Covered:

1. [Break and Continue Keyword](#break-and-continue-keyword)
2. [For loop](#for-loop)
3. [While loop](#while-loop)
4. [Do while loop](#do-while-loop)
5. [for of loop](#for-of-loop)
6. [For in loop](#for-in-loop)
7. [Map loop](#map-loop)
8. [ForEach loop](#foreach-loop)
9. [Filter](#filter)
10. [Map](#map)
11. [Chaning](#chaning)
12. [Reduce loop](#reduce-loop)

## Break and Continue Keyword

- `continue;` - it will continue the inner loop
- `break;` - it will stop the outer loop

## For loop

- Syntex

```javascript
for (let index = 0; index < 10; index++) {
  console.log(index);
}
```

- Insert value > Cheak condition > Run Boloc of code {} > index++

```javascript
for (let i = 0; i < 10; i++) {
  console.log(`Outer value ${i}:`);
  for (let j = 0; j < 10; j++) {
    console.log(`Inner value ${j}`);
  }
}
```

```javascript
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("5 is detected");
    break; // it will stop the loop
  }
  console.log(`${i} is best`);
}
```

## While loop

- Syntex

```javascript
let arr = ["mk", "sk", "pk"];
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j = j + 1;
}
```

## Do while loop

- 1th time run true or false next all thime cheak trur or false if trur then run.

```javascript
let d = 0;
do {
  console.log(`do while loop :- ${d}`);
  d = d + 1;
} while (d <= 10);
```

## For of loop

- Syntex

```javascript
let data = ["mk", "sk", "pk"];
for (let value of data) {
  console.log(value);
} //return :- mk sk pk
```

- DeStructring the data and return one by one in inside the value.
- You can use any type of data like array, boject, array of an object and etc.

```javascript
let obj = [{ 1: "mk" }, { 2: "sk" }, { 3: "pk" }];
for (let value of obj) {
  console.log(value);
} //return :-{ '1': 'mk' }{ '2': 'sk' }{ '3': 'pk' }

let val = "Mritunjay";
for (const i of val) {
  console.log(i);
} //return :- M r i t u n j a y
```

## For in loop

- Iterate return all index one by one from data.
- Syntex

```javascript
for (let key in obj) {
  console.log(key);
} //return :- 0 1 2

for (let key in arr) {
  console.log(key);
} //return :- 0 1 2

for (const i in val) {
  console.log(i);
} //return :- 0 1 2 3 4 5 6 7 8
```

## Map loop

- Not store dublicatew value if you set duplicate value then return time return one first of dublicatew key with value.
- Its take key and value.
- Syntex Create map `const map1 = new Map();`.
- Set Key and value `map1.set("IN", "India");`.
- Get value by key `map.get("IN")`;
- get both key value

```javascript
for (const key of map) {
  console.log(key);
}
//Or DeStructring the map
for (const [key, value] of map) {
  console.log(`${key} and ${value},`);
}
```

- Remember Iterate like [key, value] only applicable with map.

- Remember Some points.

```javascript
const myObj = {
  name: "Mritunjay",
  age: 25,
  city: "Mumbai",
};
//Not use like that with object
for (const [key, value] of myObj) {
  console.log(`${key} and ${value}`);
} // return :- error myObj not iterable

// Use by this with object
for (const key in myObj) {
  console.log(key);
} // return :- name age city
```

- Get both key and value

```javascript
for (const key in myObj) {
  console.log(`${key} shortcut if for ${myObj[key]} ,`);
} // return :- name shortcut if for Mritunjay , age shortcut if for 25 , city shortcut if for Mumbai ,
```

- Use array

```javascript
const inArr = ["mk", "pl", "ki", "ok"];
for (const key in inArr) {
  console.log(`${key} value :- ${inArr[key]}, `);
} //return :-0 value :- mk 1, value :- pl, 2 value :- ki, 3 value :- ok,
```

- Use for in in map

```javascript
for (const key in map) {
  console.log(key);
} // return :- empty
```

- Becouse in map not get dat using index avelable for gating the data only using key.

## ForEach loop

- Take 3 Argument.
- Callbackfun ka matlab ak function use hoga andar ma bina koi name ka function

```javascript
const coding = ["JS", "Ruby", "Python", "HTML", "C", "C++", "cpp"];
coding.forEach(function (val) {
  console.log(val);
}); //Return:- JS Ruby Python HTML C C++ cpp
//  Or
coding.forEach((item) => {
  console.log(item);
}); //Return:- JS Ruby Python HTML C C++ cpp
//or
function PrintName(params) {
  console.log(params);
}
coding.forEach(PrintName); //Return:- JS Ruby Python HTML C C++ cpp
```

- Argument take

```javascript
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
Return:-
JS 0 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', '++', 'cpp']
Ruby 1 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', '++', 'cpp']
Python 2 [ 'JS', 'Ruby', 'Python', 'HTML', 'C','C++', 'cpp']
HTML 3 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', '++', 'cpp']
C 4 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', '++', 'cpp']
C++ 5 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', '++', 'cpp']
cpp 6 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', '++', 'cpp']

const myCoding = [
    {
      languageName: "JavaScript",
      languageFileName: "JS",
    },
    {
      languageName: "java",
      languageFileName: "java",
    },
    {
      languageName: "python",
      languageFileName: "py",
    },
];
myCoding.forEach((item) => {
//item return the one by one object from array.
    console.log(item.languageName);
    //object ma sa lainga languageName. return:- JavaScript java python
});

```

```javascript
const coding = [1, 2, 3, 4, 5, 6, 7];

const value = coding.forEach((item) => {
  console.log(item);
});
console.log(value); //Print :- 1 2 3 4 5 6 7 undefiner

const value1 = coding.forEach((item) => {
  console.log(item);
  return item;
});
console.log(value1); //return :- 1 2 3 4 5 6 7 undefiner
```

- In any case we want to store the data in variable comming from foreach for using operation in the data. Then How?
- use filter()

```javascript
//Same also complicated Way Use in forEach:-
const nuwNum3 = [];
coding.forEach((num) => {
  if (num > 4) {
    nuwNum3.push(num);
  }
});
console.log(nuwNum3); //return:- [ 5, 6, 7 ]
```

## Filter

```javascript
const coding = [1, 2, 3, 4, 5, 6, 7];
const nuwNum = coding.filter((num) => num > 4);
console.log(nuwNum); //return:- [ 5, 6, 7 ]

const nuwNum1 = coding.filter((num) => {
  num > 4;
});
console.log(nuwNum1); //return:- []
```

- When You use Scope{} then its mendetry to use return key work.

```javascript
const nuwNum2 = coding.filter((num) => {
  return num > 4;
});
console.log(nuwNum2); // return:- [ 5, 6, 7 ]
```

```javascript
const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "JS",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];
const filterdata = myCoding.filter((cod) => cod.languageName === "java");
console.log(filterdata);
return:-[
  { languageName: "java", languageFileName: "java" },
  { languageName: "java", languageFileName: "java" },];

const filterdata1 = myCoding.filter((cod) => {
  cod.languageName === "java";
});
console.log(filterdata1);
return:-[]

const filterdata2 = myCoding.filter((cod) => {
  return cod.languageName === "java";
});
console.log(filterdata2);
return:-[
  { languageName: 'java', languageFileName: 'java' },
  { languageName: 'java', languageFileName: 'java' }]

const filterdata3 = myCoding.filter((cod) => {
  return cod.languageName === "python" && cod.languageFileName === "py";
});
console.log(filterdata3);
return:-[ { languageName: 'python',languageFileName: 'py' } ]
```

## Map

```javascript
const myCoding = [1, 2, 3, 4, 5, 6, 7];
const newNums = myCoding.map((num) => num + 10);
console.log(newNums);
return:- [ 11, 12, 13, 14, 15, 16, 17]
```

## Chaning

```javascript
const newNums1 = myCoding
  .map((num) => num + 10)
  .map((num) => num - 1)
  .filter((num) => num >= 15);
console.log(newNums1);
return:- [ 15, 16 ]
```

## Reduce loop

- Use in add totla card amount
- Higher-order function
- Applying a callback function
- Result only single value
- Takes two main parameters `accumulates` & `current value`.

```javascript
const myCoding1 = [1, 2, 3];
const myTotal = myCoding1.reduce((acc, curentVal) => {
  //accumilater take second parparameters of reduce.By defoult it's take 0.
  console.log(`accumilater Value: ${acc} & current Value: ${curentVal}`);
  return acc + curentVal;
}, 0); //pass value in acc (accumilater).
console.log(myTotal);
return:-
accumilater Value: 0 & current Value: 1
accumilater Value: 1 & current Value: 2
accumilater Value: 3 & current Value: 3
6
//OR you add second parameters is 100 the return
const myCoding = [1, 2, 3];
const myTotal = myCoding1.reduce((acc, curentVal) => {
  //accumilater take second parparameters of reduce.By defoult it's take 0.
  console.log(`accumilater Value: ${acc} & current Value: ${curentVal}`);
  return acc + curentVal;
}, 100); //pass value in acc (accumilater).
console.log(myTotal);
return:-
accumilater Value: 100 & current Value: 1
accumilater Value: 101 & current Value: 2
accumilater Value: 103 & current Value: 3
106
```

- One more example

```javascript
const shoppingBag = [
  {
    itemName: "Js Course",
    price: 499,
  },
  {
    itemName: "Py Course",
    price: 999,
  },
  {
    itemName: "DataScience Course",
    price: 1299,
  },
  {
    itemName: "mobile dav Course",
    price: 5999,
  },
];
//add all amount of shopping bag:-
const BagAmount = shoppingBag.reduce((acc, item) => acc + item.price, 0);
console.log(BagAmount);
```
