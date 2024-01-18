# if, else if, else

## Topics Covered:

1. [Condition](#condition)
2. [Switch Case](#switch-case)
3. [Truethy and Falsethy](#truethy-and-falsethy)
4. [Cheak empty or not](#cheak-empty-or-not)
5. [Nullish Coalescing Operator](#nullish-coalescing-operator)
6. [Terniary operator](#terniary-operator)



## Condition

- <,>,<=,>=,==,=== (cheak type),!=, !(negative cheak), &&, ||
- if (true) console.log("if"); `Wron Way to use, Use simple.`

## Switch Case

```javascript
const month = 3;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  default:
    console.log("Invalid Month");
    break;
}
```

- `break :` By defoult in switch when key match with case then whole code run . If you not use 'break;' then next whole code run without matching case.

## Truethy and Falsethy

- `falsethy Values :` flase, 0, -0(false), 0n (BigIn?t), null, undefined, NaN
- `Truethy Values :` 'false', "0", " ", [], {}, function(){},

## Cheak empty or not

- Cheak is not any value in side variable

```javascript
const userEmail = "";
if (userEmail) {
  console.log("Got User Name");
} else {
  console.log("Do Not Got User Eamil"); // this return
}
```

### Cheak Array is empty or not

```javascript
const Cheakarr = [];
if (Cheakarr.length > 0) {
  console.log("Cheakarr is not empty");
} else if (Cheakarr.length === 0) {
  console.log("Cheakarr is empty");
}
```

### Cheak Object is empty or not

```javascript
const CheakObj = {};
if (Object.keys(CheakObj).length > 0) {
  console.log("CheakObj is not empty");
} else if (Object.keys(CheakObj).length === 0) {
  console.log("CheakObj is empty");
}
```

## Nullish Coalescing Operator

### (??)

- It returns the first operand if it is not Null or Undefined otherwise it returns the second operand.
- ??:-Useful in situations where we want to provide a default value for a variable that may be null or undefined.(it mins if data come from database null or undefined then retutn defoult value.)
- syntex:- null || undefined hy to defoult value, nahi to real value ?? defoult value (if data comes from database null or undefined)

```javascript
let userActive = false;
let defaultActive = true;
let isActive = userActive ?? defaultActive;
console.log(isActive); // Output: true

let user = null;
let defaultUser = "Anonymous";
let username = user ?? defaultUser;
console.log(username); // Output: Anonymous

let vall;
vall = 5 ?? 10;
console.log(vall); //return 5

console.log(null ?? 15); // Return: 15
console.log(undefined ?? 25); // Return: 25
console.log(50 ?? 25); // Return: 50
```

## Terniary operator

### (same as it elase)

- syntex:- condition ? true : false

```javascript
console.log(5 > 2 ? 5 : 2); // Return: 5
console.log(true ? 5 : 2); // Return: 5
console.log(false ? 5 : 2); // Return: 2
```
