class User {
  constructor(username, email, password) {
    //Bassic Constructrer same as `new` keyword
    this.username = username;
    this.email = email;
    this.password = password;
  }

  //Class ma function aysa he use kerta hy
  encriptPassword() {
    // this is `metthod`
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

//Creating object and place all value
const chai = new User("Mritunjay", "mk@gmail.com", "123");
//apply own custome method.
console.log(chai.encriptPassword()); //Return :- 123abc
console.log(chai.changeUsername());  //Return :- MRITUNJAY

//Top code Behind the code How thay work

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encriptPassword = function () {
  return `${this.password}abc`;
};

User1.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User1("MritunjayKumar", "mkr@gmail.com", "1234");
console.log(tea.encriptPassword()); //Return :- 1234abc
console.log(tea.changeUsername()); //Return :- MRITUNJAYKUMAR
