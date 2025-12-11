let score = true;

// console.log(typeof score);
// console.log(typeof(score));
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1, false => 0 

let isUser = 1

let booleanIsUser =   Boolean(isUser);
// console.log(booleanIsUser);

//  ""=> false
//  "harsh"=> true

// *****************OPERATIONS*******************

let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(5/2);
// console.log(2%3);


let str1 = "hello"
let str2 = " harsh"

let str3 = str1 + str2;

// console.log(str3);


// confusing concepts 

// console.log("1" + 2);       // "12"
// String + number → number becomes string → "12"

// console.log(1 + "2");       // "12"
// Number + string → string → "12"

// console.log("1" + 2 + 2);   // "122"
// Left to right: "1"+2 = "12", then "12"+2 = "122"

// console.log(1 + 2 + "2");   // "32"
// Left to right: 1+2 = 3, then 3+"2" = "32"

// console.log(1 + 2 + 3);     // 6
// Normal addition

// console.log((3 + 4) * 5 % 3); // 2
// (3+4)=7 → 7*5=35 → 35%3 = 2


let pulseCounter = 72;

// pulseCounter++; it goes one time same and then update it when executed once
// ++pulseCounter; it make increment then show result updated

console.log(pulseCounter++); 72
console.log(pulseCounter);73
console.log(++pulseCounter); 74
console.log(pulseCounter); 74
