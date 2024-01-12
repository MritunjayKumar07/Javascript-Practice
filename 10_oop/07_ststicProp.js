class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is: ${this.username}!`);
    }
    
    creteId(){
        return `123`
    }
}

const hitesh = new User("Mritunjay");
console.log(hitesh.creteId()); // 123
hitesh.logMe(); // UserName is: Mritunjay!

class User1{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is: ${this.username}!`);
    }
    
    //static use for stope the axcess of this method.
    static creteId(){
        return `123`
    }
}

const mritunjay = new User1("Mritunjay");
hitesh.logMe(); // UserName is: Mritunjay!
console.log(mritunjay.creteId()); // TypeError: mritunjay.creteId is not a function

class Teacher extends User1{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const tech = new Teacher("Mritunjay", "Mk@gmail.com");
tech.logMe() // UserName is: Mritunjay!
console.log(tech.creteId()) // TypeError: tech.creteId is not a function