//# 01:-
function CheakUserName(userName) {
  this.userName = userName;
}

function CreateUser(userName, email, password) {
  CheakUserName(userName);
  //CheakUserName(userName); ya automaticaly set ho jana chai tha `this.userName = userName;` Q ke ya kam outsource ker dia to hona chaia.
  this.email = email;
  this.password = password;
}

//HUm yaha ak naya object create ker ka us ma sara value store ker raha hy.
const chai = new CreateUser("Mritunjay", "mritunj@gmail.com", "123");
console.log(chai); //return:- CreateUser { email: 'mritunj@gmail.com', password: '123' }
//Ya problom hy

//# 02:- Why come and solution.
function CheakUserName1(userName) {
  this.userName = userName;
  console.log("Called 1");
}

function CreateUser1(userName, email, password) {
  CheakUserName1(userName);
  //1th points : Yaha hum call nhi ker raha hy hum yaha refrence da raha hy sirf.
  /*2nd point : Q ke CheakUserName1() globaly execute ma ho raha hy is lia jub starting ma
    global execution hoga tub he CheakUserName1 function execute ho ja raha hy or execute ho ka
    call stack sa hat ja raha hy.
    Execution ma hoata hy ke jo bhe execute ho raha hy wo execute ho ka hat jayaga.
    To is lia refernce hold ker ka rakhna hy refrence hold kerna ka bohot tarika hy `.bind`, `.call` and etc.
    3rd points : function behave two type object and function*/
  CheakUserName1.call(this, userName); 
  // Hum apna `this` da raha hy. Fir CheakUserName1  ya function apna `this` na use keraga mera `this use keraga.
  //It mins hum apna current exeecution shift ker raha hy CheakUserName1 ma.
  this.email = email;
  this.password = password;
}

const chai1 = new CreateUser1("Mritunjay", "mritunj@gmail.com", "123");
console.log(chai1); //return:- CreateUser { email: 'mritunj@gmail.com', password: '123' }
