// ISSO:
console.log('a =', a); // a = undefined
var a = 2
console.log('a =', a); // a = 2
// É IGUAL A ISSO:
var b
console.log('b =', b); // b = undefined
b = 2
console.log('b =', b); // b = 2
// --------------------------------- 

// com let não acontece hoisting
// console.log('c =', c); //ERRO
let c = 2
console.log('c =', c); // c = 2