const name = "hitesh "
const repocount = 50

console.log(name + repocount + " Value") // Concatenation of different strings

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)  // String Interpolation --> placeholders are created and variables are directly injected to them
// Here the variable is injected to the string using dollar($) sign

const gameName = new String('hitesh-hc-com') // declaring the string using new keyword accesing the object values of JS
// Stroed as Key Value Pairs 0-h, 1-i, 2-t and so on..

console.log(gameName[0]) //Accessing the Zeroth Key
console.log(gameName.__proto__); // A type of Object {} 


console.log(gameName.length);  // 8 

// All other prototype methods can be accessed directly 

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // 4 not included --> 0 to 3
console.log(newString)

const anotherString = gameName.slice(-8,4) // In slice we can provide negative values --> negative means from back

const newStringOne = "     hitesh      "
console.log(newStringOne);
console.log(newStringOne.trim()); // All the starting ending extra spaces are removed using trim method

// Two more trim methods are --> trimStart() trim extra spaces from start,  trimEnd() trim extra spaces from end

const url = "https://hitesh.com/hitesh%20choudhary"
url.replace('%20','-')  // replace method takes two parameters --> Search Value and new text

console.log(url)

console.log(gameName.split('-')) // gameName is having the string hitest-hc-com. So split method is used to slit the different word of a string into an array on the basis of a separator
// output --> ['hitesh','hc','com']

