//Objects Singleton or Consteracter:-
// const TinderObject = new Object() // This is Singleton Object
const TinderObject = {}// This is Non Singleton Object
//In Top Both are same not ant defrent only defrent is Singleton.

TinderObject.id = '123abc'
TinderObject.name = 'Mritunjay'
TinderObject.isLoggedIn = false

console.log(TinderObject); // return :- { id: '123abc', name: 'Mritunjay', isLoggedIn: false }

const regularUser = {
    email:"mk@mk.com",
    fullName:{
        userfullname:{
            firstName:"Mritunjay",
            lastName:"Kumar"
        }
    }
}

console.log(regularUser.fullName)// return :-{ userfullname: { firstName: 'Mritunjay', lastName: 'Kumar' } }
console.log(regularUser.fullName.userfullname)// return :-{ firstName: 'Mritunjay', lastName: 'Kumar' } 
console.log(regularUser.fullName.userfullname.firstName)// return :-Mritunjay

const Obj1 = {1:"a", 2:"b"}
const Obj2 = {3:"c", 4:"b", 5:"e"}

const obj3 = {Obj1, Obj2};
console.log(obj3); // return :- {Obj1: { '1': 'a', '2': 'b' },Obj2: { '3': 'c', '4': 'b', '5': 'e' }}

const obj4 = Object.assign(Obj1, Obj2)
const obj5 = Object.assign({}, Obj1, Obj2) // Correct Way
const obj6 = {...Obj1, ...Obj2} // Correct Way
console.log(obj4); // return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
console.log(obj5); // return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }
console.log(obj6); // return :- { '1': 'a', '2': 'b', '3': 'c', '4': 'b', '5': 'e' }

//-------------------------------------------Time :- 4:15:00-------------------------------------------------