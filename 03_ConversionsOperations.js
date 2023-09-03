// Here we have taken a variable score in String Form
let score = "33"
console.lof(typeof score);
console.log(typeof(score));

// Here we have taken a variable where we have covereted the String type variable score into number 
let valueInNumber = Number(score) 
console.log(typeof valueInNumber) // the typeof of this variable turned out to be number


// But if a variable is having a value like 33abc 
let value1 = "33abc"  //Here it is a String having alphanumeric value which itself cannot be treated as number because of abc in it
let valueInNumber1 = Number(value1)
console.log(typeof valueInNumber1) // the type of the variable comes out to be number
console.log(valueInNumber1) // When we try to print the value it turns out to be NaN (Not a Number)

// If we talk about the null value conversion

let score2 = null //Here the value assigned to the variable is null 
console.log(typeof score2) // the type of null is object

let valueInNumber2 = Number(score2)  // Here the variable value is convereted to number
console.log(typeof valueInNumber2)
console.log(valueInNumber2) // For null value the number value is changed to 0

// If we talk about the undefined value
let score3 = undefined // Here the value assigned to the variable is undefined
console.log(typeof score3) //the type of undefined is undefined

let valueInNumber3 = Number(score3) // The variable is converted to number from undefined
console.log(typeof valueInNumber3)
console.log(valueInNumber3) // The changed value for undefined to number comes out to be NaN (Not a Number)

// "33" --> 33
// "33abc" --> NaN
// true --> 1  false --> 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);

// for number to boolean conversion
// 1 --> true  0 --> false
// for string to boolean conversion
// Empty string is converted to false and a string with value is true 
// "" --> false  "hitesh" --> true

let somenumber = 33   // Conversion from number to String
let StringNumber = String(somenumber)
console.log(StringNumber)

// *************** Operations *************** //

let value = 3
let negValue = -value
console.log(negValue)

// Basic Operations
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)  //2^3
console.log(2/3)
console.log(2%3)

// String Concatenation

let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2
console.log(str3) // Both the strings str1 and str 2 are concatenated

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

console.log(+true) // Gives value 1
// console.log(true+) Gives an Error

console.log(+"") // Gives value 0

let num1, num2, num3   //Not a recommended Practice
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++   //postfix/prefix operators
//In prefix Values are incremented before usage
// In Postfix Values are incremented after usage 
console.log(gameCounter)