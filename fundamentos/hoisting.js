// ISSO:
console.log('a =', a);
var a = 2
console.log('a =', a);
// É IGUAL A ISSO:
var b
console.log('b =', b);
b = 2
console.log('b =', b);
// --------------------------------- 

// com let não acontece hoisting
console.log('c =', c);
let c = 2
console.log('c =', c);