// Special Type - null
let a: null;

a = null;
// a = "Hi"

let b: null | string;

b = null;
b = "Hi";
// b = 10

console.log("b value:", b);

// Special Type - undefined
let c: undefined;

c = undefined;
// c = null
// c = "Hi"

let d: undefined | string;

d = undefined;
d = "Hi";
// d = null
// d = 10

console.log("d value:", d);