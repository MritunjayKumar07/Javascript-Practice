//# > If you see in console you and work on console then come prototype at the end.
//# > Every things in Javascript decelear by the Object and Object decelear by the null.
/*
ex:-Array decelear redirect to Object > Object redirect to null
ex:-String or etc decelear redirect to Object > Object redirect to null
console.log(Object.__proto__);   //null
*/

//Now see where function decelear & redirect to where?
function PersonMarks(num) {
  return num * 10;
}
PersonMarks.power = 2;
console.log(PersonMarks(5));
console.log(PersonMarks.power);
// Time : 7:22
