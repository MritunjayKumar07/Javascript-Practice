//map:-
const myCoding = [1, 2, 3, 4, 5, 6, 7];
const newNums = myCoding.map((num) => num + 10);
console.log(newNums); //return:- [ 11, 12, 13, 14, 15, 16, 17]

//chaning:-
const newNums1 = myCoding
  .map((num) => num + 10)
  .map((num) => num - 1)
  .filter((num) => num >= 15);
console.log(newNums1); //return:- [ 15, 16 ]

console.log("-----------------------------------");

//reduce:-
//use in add totla card amount.
const myCoding1 = [1, 2, 3];
const myTotal = myCoding1.reduce((acc, curentVal) => {
  //twp argument take accumilater and current value
  //accumilater wo value late jo ap arro function ka bad coma laga ka jo value dalta hy.  By defoult it's take 0.
  console.log(`accumilater Value: ${acc} & current Value: ${curentVal}`);
  return acc + curentVal;
}, 0); //pass value in acc (accumilater).
console.log(myTotal);
/*return:- 
accumilater Value: 0 & current Value: 1
accumilater Value: 1 & current Value: 2
accumilater Value: 3 & current Value: 3
6*/

const shoppingBag = [
  {
    itemName: "Js Course",
    price: 499,
  },
  {
    itemName: "Py Course",
    price: 999,
  },
  {
    itemName: "DataScience Course",
    price: 1299,
  },
  {
    itemName: "mobile dav Course",
    price: 5999,
  },
];
//add all amount of shopping bag:-
const BagAmount = shoppingBag.reduce((acc, item) => acc + item.price, 0);
console.log(BagAmount);

