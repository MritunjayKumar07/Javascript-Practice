const userEmail = "";
if (userEmail) {
  console.log("Got User Name");
} else {
  console.log("Do Not Got User Eamil"); // this return
}
//Cheak Array is empty or not
const Cheakarr = [];
if (Cheakarr.length > 0) {
  console.log("Cheakarr is not empty");
} else if (Cheakarr.length === 0) {
  console.log("Cheakarr is empty");
}

//Cheak Object is empty or not
const CheakObj = {};
if (Object.keys(CheakObj).length > 0) {
  //return Array :- Object.keys(CheakObj)
  console.log("CheakObj is not empty");
} else if (Object.keys(CheakObj).length === 0) {
  console.log("CheakObj is empty");
}

/*Imp:-
false == 0 > true
false == '' > true
0 == '' > true
*/

//falsethy Values:- flase, 0, -0(false), 0n (BigIn?t), null, undefined, NaN
//truethy Values:- 'false', "0", " ", [], {}, function(){},

//Nullish Coalescing Operator (??) :null undefined
/*??:-Useful in situations where we want to provide a default value
for a variable that may be null or undefined.(it mins if data come 
from database null or undefined then retutn defoult value.)*/
//syntex:- val = if(null || undefined) hy to defoult value nahi to real value ?? defoult value (if data comes from database null or undefined)

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

//Terniary operator:- same like if else
// const Terniaryval = condition ? true : false // syntex
console.log(5 > 2 ? 5 : 2); // Return: 5
console.log(true ? 5 : 2); // Return: 5
console.log(false ? 5 : 2); // Return: 2
