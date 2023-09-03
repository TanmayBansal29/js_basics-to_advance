const score = 400 // Here Implicitly the value is defined as number
console.log(score) //output --> 400

const balance = new Number(100)  // Explicitly defining the variable as a number using the new keyword
console.log(balance); //output --> [Number:100]

console.log(balance.toString()) // The number is converted to String and String methods are accessible on this number

console.log(balance.toFixed()) // toFixed() is used to fix the number of decimal paces of a value. The parameter passed is the number of decimals to which we need to fix the value

const otherNumber = 23.8362
console.log(otherNumber.toPrecision(3)) // Make the value precise upto the number of digits passed as parameter to function

// Output --> 23.9
// If the number is 123.8363 like this then the round off takes place at 124 0.8 is rounded off to 1 like this
// If the number is like 1123 and precision value is 3 then Output is going to come in exponential terms
// Output --> 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // for numbers having a lot of zeros thus locale string method puts commas according to the standards fixed. By default US standard is fixed
// this eh-IN changes the US standard to Indian Standard

// ******------- Maths -----*******

console.log(Math);  // Itself a object comprising of different properties

console.log(Math.abs(-4)); //abs is the absolute value --> -ve values convereted to +ve
console.log(Math.round(4.3))  // Round off the values to the nearest value
console.log(Math.ceil(4.2)) // Round off the value to the highest value --> like value is more than 4 then the value is rounded off to 5 usign ceil
console.log(Math.floor(4.7)) // Round off the value to the lowest value --> like value is less than 5 then the value is rounded off to 4

console.log(Math.random()) // Prints any random value between 0 to 1.
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min))
// for finding a random value in a range 10 to 20

