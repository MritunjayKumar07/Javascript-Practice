class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`User Name is ${this.username}`);
  }
}

//`extends` User ka all funcanality da raha hy Teacher ko.
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    /*`super` keyword use for calling the parent class 
        constructor is User and nest automaticaly add `this` keyword*/
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was addes by ${this.username}`);
  }
}

// const chai =  Teacher("John Doe", "john@gmail.com","123456"); //Return :- TypeError: Class constructor Teacher cannot be invoked without 'new'
const chai = new Teacher("John Doe", "john@gmail.com","123456");
chai.addCourse() //Return :- A new course was addes by John Doe
chai.logMe() //Axcess //Return :- User Name is John Doe


const tea = new User("tea")
// tea.addCourse() //Not axcess //Return:- TypeError: tea.addCourse is not a function
tea.logMe() //Return:- User Name is tea

//Cheak equal or not:-
console.log(tea === chai) //Return false
console.log(tea === Teacher) //Return false
//For cheak correct way
console.log(chai instanceof User) // Return true
console.log(chai instanceof Teacher) // Return true

