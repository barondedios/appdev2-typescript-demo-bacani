// console.log("Hello World!")

let userName: string = "Baron";
let userAge: number = 19;

userAge = 20;

console.log(`Username - ${userName}`);
console.log(`Age - ${userAge}`);

function add(a: number, b: number = 5): number {
    return a + b;
}

console.log(add(10));       // uses default b = 5 → 15
console.log(add(10, 6));    // → 16


// add('10')
// add(10, '6')