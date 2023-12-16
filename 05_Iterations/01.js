//for
for (let index = 0; index < 10; index++) {
    console.log(index);
} // return :- 0 to 9
// Step 01 Insert value:- let index = 0; 
// Step 02 condition cheak:- index < 10; 
// Step 03 run Boloc of code {}:- console.log(index); 
// Step 04 run:- index++

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        console.log('5 is best')
    }
}

for (let i = 0; i < 10; i++) {
    console.log(`Outer value ${i}:`)
    for (let j = 0; j < 10; j++) {
        console.log(`Inner value ${j}`)
    }
}

//break and continue keyword:-
//continue; // it will continue the inner loop
//break; // it will stop the outer loop

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log('5 is detected')
        break; // it will stop the loop
    }
    console.log(`${i} is best`)
}

//return :- 
// 0 is best
// 1 is best
// 2 is best
// 3 is best
// 4 is best
// 5 is detected

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log('5 is detected')
        continue; // it will stop the loop
    }
    console.log(`${i} is best`)
}

//return :- 
// 0 is best
// 1 is best
// 2 is best
// 3 is best
// 4 is best
// 5 is detected
// 6 is best
// 7 is best
// 8 is best
// 9 is best

console.log('--------------------------------------------------')
//While:-

let i = 0;
while (i < 10) {
    console.log(i);
    i = i+1
}

let arr = ['mk','sk','pk'];
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j=j+1
}

console.log('--------------------------------------------------')
//do while:-
//1th time run true or false next all thime cheak trur or false if trur then run.
let d = 0;
do {
    console.log(`do while loop :- ${d}`);
    d = d+1
} while (d <= 10)
//return:- 
// do while loop :- 0
// do while loop :- 1
// do while loop :- 2
// do while loop :- 3
// do while loop :- 4
// do while loop :- 5
// do while loop :- 6
// do while loop :- 7
// do while loop :- 8
// do while loop :- 9
// do while loop :- 10

let d1 = 52;
do {
    console.log(`do while loop :- ${d1}`);
    d1 = d1+1
} while (d1 <= 10)
//return :-
// do while loop :- 52

