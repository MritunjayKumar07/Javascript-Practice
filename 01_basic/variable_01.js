const fixedValue = 9737678727
let workInsideScope = "Hello Git.."
var workwholeCode = "MritunjayKumar07"
variablevalue = "India" //it's also work but good way.

let accountVar;

// fixedValue = 23 //That Not work Becouse it's constant

console.log(fixedValue);
// return :-
// 9737678727
//cheak multiple value one time
console.table([fixedValue,workInsideScope,workwholeCode,variablevalue])
// return :-
// ┌─────────┬────────────────────┐
// │ (index) │       Values       │
// ├─────────┼────────────────────┤
// │    0    │     9737678727     │
// │    1    │   'Hello Git..'    │
// │    2    │ 'MritunjayKumar07' │
// │    3    │      'India'       │
// └─────────┴────────────────────┘


console.table([fixedValue,workInsideScope,workwholeCode,variablevalue,accountVar])
// return :- 
// ┌─────────┬────────────────────┐
// │ (index) │       Values       │
// ├─────────┼────────────────────┤
// │    0    │     9737678727     │
// │    1    │   'Hello Git..'    │
// │    2    │ 'MritunjayKumar07' │
// │    3    │      'India'       │
// │    4    │     undefined      │
// └─────────┴────────────────────┘

/*
Prefer not to use var 
becouse of issue in block scope and functional scope.
*/

