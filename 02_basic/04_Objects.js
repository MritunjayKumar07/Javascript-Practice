//Objects Singleton or Consteracter:-
// const TinderObject = new Object() // This is Singleton Object
const TinderObject = {}// This is Non Singleton Object
//In Top Both are same not ant defrent only defrent is Singleton.

TinderObject.id = '123abc'
TinderObject.name = 'Mritunjay'
TinderObject.isLoggedIn = false

console.log(TinderObject); // return :- { id: '123abc', name: 'Mritunjay', isLoggedIn: false }
console.log(Object.keys(TinderObject)) //return:- [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(TinderObject)) //return:- [ '123abc', 'Mritunjay', false ]
console.log(Object.entries(TinderObject)) //return:- [[ 'id', '123abc' ],[ 'name', 'Mritunjay' ],[ 'isLoggedIn', false ]]
console.log(TinderObject.hasOwnProperty('name')) //hasOwnProperty() this property cheak is key avelable or not. return:- true
console.log(TinderObject.hasOwnProperty('namemk')) //return:- false


const regularUser = {
    email: "mk@mk.com",
    fullName: {
        userfullname: {
            firstName: "Mritunjay",
            lastName: "Kumar"
        }
    }
}

console.log(regularUser.fullName)// return :-{ userfullname: { firstName: 'Mritunjay', lastName: 'Kumar' } }
console.log(regularUser.fullName.userfullname)// return :-{ firstName: 'Mritunjay', lastName: 'Kumar' } 
console.log(regularUser.fullName.userfullname.firstName)// return :-Mritunjay

const Obj1 = { 1: "a", 2: "b" }
const Obj2 = { 3: "c", 4: "b", 5: "e" }

const obj3 = { Obj1, Obj2 };
console.log(obj3); // return :- {Obj1: { '1': 'a', '2': 'b' },Obj2: { '3': 'c', '4': 'b', '5': 'e' }}

const obj4 = Object.assign(Obj1, Obj2)
const obj5 = Object.assign({}, Obj1, Obj2) // Correct Way
const obj6 = { ...Obj1, ...Obj2 } // Correct Way
console.log(obj4); // return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
console.log(obj5); // return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
console.log(obj6); // return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }


//Come Data From Data Base (Handle):-
const DataBaseUser = [
    {
        id: 1,
        email: 'mk@gmail.com',
    },
    {
        id: 2,
        email: 'mk1@gmail.com',
    },
    {
        id: 3,
        email: 'mk2@gmail.com',
    },
    {
        id: 4,
        email: 'mk3@gmail.com',
    },
    {
        id: 5,
        email: 'mk4@gmail.com',
    },
]
console.log(DataBaseUser[1].email)


//Object Destructuring:-
let person = {
    name: "John Doe",
    age: 30,
    cityName: "New York"
}

console.log(person.cityName) // 1th Way
const {cityName: city, age, name} = person // 2th Way (Correct Way) (cityName: city, Change the variable city = cityName)
console.log([city, age, name])


//Api:-
/*Api comes in json Like this
{
    "name":"mritunjay",
    "coursename":"Js in Hindi",
    "price":"free"
}
We hold in one variable in fruntend*/

//Call Api from JSON:-









//All Property in Objects:-
// constructor:ƒ Object()
// hasOwnProperty:ƒ hasOwnProperty()
// isPrototypeOf:ƒ isPrototypeOf()
// propertyIsEnumerable:ƒ propertyIsEnumerable()
// toLocaleString:ƒ toLocaleString()
// toString:ƒ toString()
// valueOf:ƒ valueOf()
// __defineGetter__:ƒ __defineGetter__()
// __defineSetter__:ƒ __defineSetter__()
// __lookupGetter__:ƒ __lookupGetter__()
// __lookupSetter__:ƒ __lookupSetter__()
// __proto__:(...)
// get __proto__:ƒ __proto__()
// set __proto__:ƒ __proto__()