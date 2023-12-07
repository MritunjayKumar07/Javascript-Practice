//shalo Copy & Deep Coppy Learn:-
const array1 = [4,5,6];
const array2 = ['mritunjay',true,452522];
const array3 = new Array(1,'mk',false)
let arr=[...array1, ...array2]; // or you use [...array1, ...array2, ...array3]
console.log(arr); // return :- [ 0, 1, 2, 3, 4, 5, 6, 1, 3, 'mritunjay', true, 452522 ]
console.log(arr[3])

arr.push("Rahul");
console.log(arr);//[ 4, 5, 6, 'mritunjay', true, 452522, 'Rahul' ]
arr.pop()
console.log(arr.pop())//remove last element // return :Rahul
console.log(arr)//remove last element // return :[ 4, 5, 6, 'mritunjay', true, 452522 ]

//--------------------Time 3:20


