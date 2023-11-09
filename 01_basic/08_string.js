const name  =  'Mritunjay Kumar' //Declear new string
const repoCount = 50  //Declear new string

console.log(name +' '+ repoCount + ' Coin...');// Not Good Way
console.log(`${name} ${repoCount} Coin...`);//Correct Way

//try in browser console:-new String('Mritunjay Kumar'); //in browser console all method present related to strong
const gameName = new String('Mritunjay Kumar'); //new use to create object. Also declear new string.
console.log(gameName);
// return : [String: 'Mritunjay Kumar']
//in sub ma original value change nhi hua hy.
console.log(gameName[0]); //return :M

console.log(gameName.__proto__); //return :{} //inside {} all value exist.

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = "   Mritunjay    "
console.log(newString); //return :    Mritunjay    
console.log(newString.trim()); //return : Mritunjay

const url = "https://mritunjay://com%20domain%20kumar"
console.log(url.replace('%20', '_')); // https://mritunjay://com_domain%20kumar
console.log(url.includes('sundar')); //false
console.log(url.includes('mritunjay')); //true
console.log(url.split('/')); //[ 'https:', '', 'mritunjay:', '', 'com%20domain%20kumar' ]


// All function of string String (f mins function)
// anchor: ƒ anchor()
// at: ƒ at()
// big:ƒ big()
// blink:ƒ blink()
// bold:ƒ bold()
// charAt:ƒ charAt()
// charCodeAt:ƒ charCodeAt()
// codePointAt:ƒ codePointAt()
// concat:ƒ concat()
// constructor:ƒ String()
// endsWith:ƒ endsWith()
// fixed:ƒ fixed()
// fontcolor:ƒ fontcolor()
// fontsize:ƒ fontsize()
// includes:ƒ includes()
// indexOf:ƒ indexOf()
// isWellFormed:ƒ isWellFormed()
// italics:ƒ italics()
// lastIndexOf:ƒ lastIndexOf()
// length:0
// link:ƒ link()
// localeCompare:ƒ localeCompare()
// match:ƒ match()
// matchAll:ƒ matchAll()
// normalize:ƒ normalize()
// padEnd:ƒ padEnd()
// padStart:ƒ padStart()
// repeat:ƒ repeat()
// replace:ƒ replace()
// replaceAll:ƒ replaceAll()
// search:ƒ search()
// slice:ƒ slice()
// small:ƒ small()
// split:ƒ split()
// startsWith:ƒ startsWith()
// strike:ƒ strike()
// sub:ƒ sub()
// substr:ƒ substr()
// substring:ƒ substring()
// sup:ƒ sup()
// toLocaleLowerCase:ƒ toLocaleLowerCase()
// toLocaleUpperCase:ƒ toLocaleUpperCase()
// toLowerCase:ƒ toLowerCase()
// toString:ƒ toString()
// toUpperCase:ƒ toUpperCase()
// toWellFormed:ƒ toWellFormed()
// trim:ƒ trim()
// trimEnd:ƒ trimEnd()
// trimLeft:ƒ trimStart()
// trimRight:ƒ trimEnd()
// trimStart:ƒ trimStart()
// valueOf:ƒ valueOf()
// Symbol(Symbol.iterator):ƒ [Symbol.iterator]()