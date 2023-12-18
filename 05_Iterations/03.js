//foreach
const coding = ["JS", "Ruby", "Python", "HTML", "C", "C++", "cpp"];
//callbackfun ka matlab ak function use hoga andar ma bina koi name ka function
coding.forEach(function (val) {
  console.log(val);
}); //Return:- JS Ruby Python HTML C C++ cpp
//Or
coding.forEach((item) => {
  console.log(item);
}); //Return:- JS Ruby Python HTML C C++ cpp
//Or
function PrintName(params) {
  console.log(params);
}
coding.forEach(PrintName); //Return:- JS Ruby Python HTML C C++ cpp

coding.forEach((item, index, arr) => {
  //3 Argument take
  console.log(item, index, arr);
});
/*Return:- 
JS 0 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', 'C++', 'cpp']
Ruby 1 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', 'C++', 'cpp']
Python 2 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', 'C++', 'cpp']
HTML 3 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', 'C++', 'cpp']
C 4 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', 'C++', 'cpp']
C++ 5 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', 'C++', 'cpp']
cpp 6 [ 'JS', 'Ruby', 'Python', 'HTML', 'C', 'C++', 'cpp']*/

console.log("---------------------------------");

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
];
myCoding.forEach((item) => {
  // console.log(item)//item return keraga array ka andar ka puran object.
  console.log(item.languageName); //object ma sa lainga languageName. return:- JavaScript java python
});
