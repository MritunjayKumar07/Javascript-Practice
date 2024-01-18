console.log(typeof NaN) // number
console.log(typeof undefined) // undefine
console.log([5+"5"], typeof (5+"5")) //55 string
console.log([5+5+"5"], typeof (5+5+"5")) //105 string
console.log(["5"+5], typeof ("5"+5)) //55 string
console.log(["5"+5+5], typeof ("5"+5+5)) //555 string

arr = [9, 'mritunjay', true, 452522,  1, "mk", false  ]
console.log(arr.indexOf('mritunjay'))
console.log(arr)

console.log('------------------------------------------------------------------------------')
console.log(arr.unshift(500))
console.log(arr)
console.log(arr.slice(1, 3))
console.log(arr.splice(1, 3))
console.log(arr)
console.log('------------------------------------------------------------------------------')
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
console.log(user["symbolKey"])
// `user[symbolKey];` //return :- undefined
// `user1[symbolKey];` //Axcess Symbol return :- User123
// `user1["symbolKey"];` //return :- Kumar
user1.email = "Mritunjay@gmail.com";
console.log(user1)
Object.freeze(user1);
user1.email = "kumar@gmail.com";
console.log(Object.isFrozen(user1));
const UnFreezonObject = Object.assign({}, user1);
UnFreezonObject.email = "kumar@gmail.com";
console.log(UnFreezonObject)