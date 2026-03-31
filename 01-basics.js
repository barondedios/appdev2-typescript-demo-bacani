"use strict";
// console.log("Hello World!")
let userName = "Baron";
let userAge = 19;
userAge = 20;
console.log(`Username - ${userName}`);
console.log(`Age - ${userAge}`);
function add(a, b = 5) {
    return a + b;
}
console.log(add(10)); // uses default b = 5 → 15
console.log(add(10, 6)); // → 16
// add('10')
// add(10, '6')
