let a = 10
const b = 20
var c = 30
// Any Value outside any block of code where function block or conditional block or loop block then its Global Scope, inside values have the local scope
//Scope
if (true){ 
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)   Error
// console.log(b)   Error
console.log(c) // This is a problem, this will not give an error and will print the value which in long term totally damages the code


