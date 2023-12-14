const addTwo = (num1, num2) =>{ //Exceplicet Return
    return num1 + num2
}
console.log(addTwo(2,5))//return :-7

const addTwo1 = (num1, num2) => num1 + num2 //Implicet return
console.log(addTwo1(2,5))//return :-7


const addTwo2 = (num1, num2) => (num1 + num2) //Implicet return
console.log(addTwo2(2,5))//return :-7

//Implicet return ma return keyword use nhi hota hy Exceplicet Return ma return key use kerta hy.

const addTwo3 = () => {useName:"Mritunjay"} //Implicet return
console.log(addTwo3())//return :-undefine

const addTwo4 = () => ({useName:"Mritunjay"})//Implicet return
console.log(addTwo4())//return :-{ useName: 'Mritunjay' }

//--------------------------------------------------------Time :- 5:48:23 -------------------------------

