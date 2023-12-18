let strVal = "90";
console.log(typeof strVal);
let strToNum = Number(strVal);
console.table([typeof strToNum, strToNum]);

strVal = "90e"; //or you use undefined
strToNum = Number(strVal);
console.table([typeof strToNum, strToNum]);

// return:-
// ┌─────────┬──────────┐
// │ (index) │  Values  │
// ├─────────┼──────────┤
// │    0    │ 'number' │
// │    1    │   NaN    │  //Note a number. it's a type.
// └─────────┴──────────┘

strVal = null;
strToNum = Number(strVal);
console.table([typeof strToNum, strToNum]);

// return:-
// ┌─────────┬──────────┐
// │ (index) │  Values  │
// ├─────────┼──────────┤
// │    0    │ 'number' │
// │    1    │    0     │
// └─────────┴──────────┘

strVal = undefined;
strToNum = Number(strVal);
console.table([typeof strToNum, strToNum]);

// return:-
// ┌─────────┬──────────┐
// │ (index) │  Values  │
// ├─────────┼──────────┤
// │    0    │ 'number' │
// │    1    │   NaN    │
// └─────────┴──────────┘

strVal = true; // or you use False(False return 0, True return 1 and type is boolean)
strToNum = Number(strVal);
console.table([typeof strToNum, strToNum]);

strVal = "GIthub";
strToNum = Number(strVal);
console.table([typeof strToNum, strToNum]);

// return:-
// ┌─────────┬──────────┐
// │ (index) │  Values  │
// ├─────────┼──────────┤
// │    0    │ 'number' │
// │    1    │   NaN    │
// └─────────┴──────────┘

// Nots:-
//"33" => 33
//"33abc" => NaN

// Type Conversion:-
// 1> Number()
// 2> Boolean()   ex: 1 => true; 0 => false; "" => false; "github" => true; 23 => true
// 3> String()   ex: 33=> "33";
// another Conversion avelable
