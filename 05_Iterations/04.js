const coding = [1, 2, 3, 4, 5, 6, 7];

const value = coding.forEach((item) => {
  console.log(item);
});
console.log(value); //Print :- JS, Ruby, Python,HTML, C, C++, cpp, undefined

const value1 = coding.forEach((item) => {
  console.log(item);
  return item;
});
console.log(value1); //return :- undefined

console.log("---------------------------------");
//in any case we want to store the data in variable comming from foreach for using operation in the data. Then How?
//use filter()

const nuwNum = coding.filter((num) => num > 4);
console.log(nuwNum); //return:- [ 5, 6, 7 ]

const nuwNum1 = coding.filter((num) => {
  num > 4;
});
console.log(nuwNum1); //return:- []
//When You use Scope{} then its mendetry to use return key work.
const nuwNum2 = coding.filter((num) => {
  return num > 4;
});
console.log(nuwNum2); // return:- [ 5, 6, 7 ]

//Same Way Use in forEach:-
const nuwNum3 = [];
coding.forEach((num) => {
  if (num > 4) {
    nuwNum3.push(num);
  }
});
console.log(nuwNum3); //return:- [ 5, 6, 7 ]

console.log("------------------------------------");
const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "JS",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];
const filterdata = myCoding.filter((cod) => cod.languageName === "java");
console.log(filterdata); //return:-
/*[
  { languageName: 'java', languageFileName: 'java' },
  { languageName: 'java', languageFileName: 'java' }
]*/

const filterdata1 = myCoding.filter((cod) => {
  cod.languageName === "java";
});
console.log(filterdata1); //return:-
/*[]*/

const filterdata2 = myCoding.filter((cod) => {
  return cod.languageName === "java";
});
console.log(filterdata2); //return:-
/*[
  { languageName: 'java', languageFileName: 'java' },
  { languageName: 'java', languageFileName: 'java' }
]*/

const filterdata3 = myCoding.filter((cod) => {
  return cod.languageName === "python" && cod.languageFileName === "py";
});
console.log(filterdata3); //return:-[ { languageName: 'python', languageFileName: 'py' } ]
