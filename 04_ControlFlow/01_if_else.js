//if, else if, else
// condition:- <,>,<=,>=,==,=== (cheak type),!=, !(negative cheak), &&, ||
const isUserloginIn = 3
const isUserloginIn2 = 6

if(isUserloginIn>1){
    console.log('if')
}else if(isUserloginIn > 2){
    console.log('else if')
}else if(isUserloginIn > 3){
    console.log('else if')
}else{
    console.log('else')
}

// if (true) console.log("if"); //Wron Way

if((isUserloginIn ===3) && (isUserloginIn2 ===6)){
    console.log('if with and operator &&')
}else if((isUserloginIn ===3) || (isUserloginIn2 ===6) || true){
    console.log('if with or operator ||')
}