const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0])  // Arrays are accessed using Indexing --> Index started from 0

const myHeros = ["shaktiman", "naagraj"]
const myArr2 =  new Array  (1,2,3,4)  // Another way of defining Array

// Array Methods

myArr.push(6) // add the values to the Array
myArr.push(7)
myArr.pop() // Removes the last value in Array
console.log(myArr)

myArr.unshift(6)  // Adds value to the start of the Array
myArr.shift() // Removes the starting value of Array
console.log(myArr)

console.log(myArr.includes(9)) // Returns the ans in boolean(true/false)
console.log(myArr.indexOf(9)) // IndexOf a number/ value that is not present in array is going to give the output -1

const newArr = myArr.join()
console.log(newArr)  // Join functions bind the values and convert them into string  --> Output 0 1 2 3 4 5
console.log(myArr) // This is still an Array [0,1,2,3,4,5

//Slice, Splice

console.log("A", myArr)
const myn1 = myArr.slice(1,3) // Returns a copy of a section of Array
// 1,3 means 1,2 is included and 3 is not included --> second value of range is not included before that all values are included

console.log(myn1); 

const myn2 = myArr.splice(1,3) // In Splice the values of the range in original array are removed 
console.log(myn2) // This array contains the spliced values of the original Array
// In Splice both the ranges are considered means 1,3 all values 1,2,3 will be spliced

// So the main difference in slice and splice is like --> in Slice the copy of array elements is formed whereas in Splice the elements are removed from the original array

const marvelHeros = ["Thor", "IronMan", "SpiderMan"]
const dcHeros = ["SuperMan", "Flash", "BatMan"]

marvelHeros.push(dcHeros)
// Expected Output was --> Both the Arrays Elements will be merged into a single Array
// Actual Output --> A Single array is created but with nested Arrays means both the Arrays as it is got mereged
console.log(marvelHeros)
// So in this case for accessing a value from Array we have to use concept of 2D arrays

console.log(marvelHeros[3][1])

const allHeros = marvelHeros.concat(dcHeros)
// Concat combines two or more arrays, All the elements are added to a single array and a new array is created
console.log(allHeros)

const allNewHeros = [...marvelHeros, ...dcHeros]
// ... called as spread operator, it also works as concat. When spread operator is used like ...marvelheros it is not more Array, all elements are separated
console.log(allNewHeros)

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_Array = another_Array.flat(Infinity)
// flat() method --> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_Array)
 
console.log(Array.isArray("Hitesh")) // Returns the boolean result whether it is a Array or not
console.log(Array.from("Hitesh")) // converts this value into array like --> ['H', 'i', 't', 'e', 's', 'h']

console.log(Array.from({name:"hitesh"})) // Directly it will give an empty array as object cannot be directly converted to array --> we have to specify we either we want array of keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //of methods returns array from set of elements