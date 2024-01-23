//#01 Getter and Setter Using new metthod
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  /*- gater and seter her class ma hota ByDefoult.
  - Ap jitna bhe property define kerta hy us property ka ak ByDefoult 
  geter and seter method ban jata hy same name sa, like email ka email(), password ka password().
  - hum usko value ko change ker sakata hy.*/

  /*IMP := geter (get) and  seter (set) use, when any one try to get the value then 
  i want to customize value set in geter (get) and when any one want to set the value 
  in contructer then, i want to eddit the value and customize and then set the value in constructer.*/

  //Suppose kisi ka hum password dana he nhi chata to use karing geter and seter.

  /*Get use to when any on get the value outside from class the get my way. */

  /*If you use only get not use set then come error:- 
  TypeError: Cannot set property password of #<User> which has only a getter*/

  //   get password() {//Any one want to get the value
  //     return this.password.toUpperCase();
  //   }
  //   set password(value) {//Any one want to set the value
  //     this.password = value;
  //   }
  /*When you use set like that then come error :- RangeError: Maximum call stack size exceeded.
  - Thes error come when call stack full bar bar run ho raha hy islia or 
  bar bar islia run ho raha hy Q ke constructer bhe set and get ker raha hy geter nad seter ma and ap bhe 
  get and set ker raha hy geter and setter ma using get password(){} and set password(){}*/

  //   set use to set the value in constructer
  //Solution:-

  get password() {
    return this._password.toUpperCase();
    //Hum na password ka change ker dia _password (new property he bna dia), Ya hum is lia kia ke ya error na aya :- RangeError: Maximum call stack size exceeded
  }
  set password(value) {
    this._password = value;
    //Hum na password ka change ker dia _password (new property he bna dia), Ya hum is lia kia ke ya error na aya :- RangeError: Maximum call stack size exceeded
  }
  //Behind the code constructer set ker raha valu only in emal, password set nhi ker raha hy Q ke hum password ko over right ker dia hy.
}

const mritunjay = new User("mritunjay@gmail.com", "123456abcde");
console.log(mritunjay.password); //123456ABCDE

console.log(
  `----------------------------------------------------------------------`
);
//#02 Getter and Setter Using function base

//Pahala class nhi tha to function use kerta tha.
function UserFun(email, password) {
  this._email = email;
  this._password = password;

  /*And Object khood allow kerta (Function bhe ak object he hy) getter and setter ko property ko axcess kerna ka, By the help of `defineProperty`*/
  //`defineProperty` apna this na hoata hy yaha sa bhaga jata hy. kis property ko sath kerna hy , fir Objext.
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}

var user = new UserFun("mritunjay@gmail.com", "12456");
console.log(user.email); //MRITUNJAY@GMAIL.COM

console.log(
  `----------------------------------------------------------------------`
);
//#03 Getter and Setter Using Object base
UserObj = {
  _email: "mritunjay@gmail.com",
  _password: "1234567890",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

//`create` this is factory function ya Array and Object ma use kerta hy.
// Ya bolta hy ke kiska bases pa hum function create kera. by defoult null hota hy. create(null)
const tea = Object.create(UserObj);
console.log(tea.email); //dono same hy _email or email
//`_` undersore ya batata hy ke hum private property define ker raha hy jo normal use ka use ma nhi ayaga.
// geter amd setter ko ya fark nhi padata hy ke kon sa property private hy usa sirf name chaia.
//Getter and setter ak method hy jo property ka upar lag raha hy.
/*
get email() { //Name lia ya property privat ho ya kuch bhe us pa getter method lag gaya.
    return this._email.toUpperCase(); //fir property ka value ko change kia.
},
 */

/*
UserObj = {
  email: "mritun@gmail.com",
  _email: "mritunjay@gmail.com",
  _password: "1234567890",

  get email() {
    return this.email.toUpperCase();
  },
  set email(value){
    this.email = value;
  }
};
Comer erro:- RangeError: Maximum call stack size exceeded
 */


/*
UserObj = {
  email: "mritun@gmail.com",
  _email: "mritunjay@gmail.com",
  _password: "1234567890",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value){
    this._email = value;
  }
};
Return :- MRITUNJAY@GMAIL.COM
 */