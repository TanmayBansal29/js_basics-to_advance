"use strict";  //treat all JS code as newer version 
// aler(3+3)   we are using nodejs not browser so this alert statement will not work directly in the terminal

// Code Readability should be high while writing code


let name = "hitesh"    //String
let age = 18     //number
let isLoggedIn = false   //boolean


// number  ==>  (range) 2 to power 53
//bigint

//String ==> ""

//boolean ==> true or false
//null ==> Stand alone value  --- Representation for a empty value  --- null is a special value which can be initialized 
//undefined ==> value is not defined but the variable is declared

//Symbol ==> More implementation in React --- Used for declaring the uniqueness

//Object ==> Most Important

// If we look for the typeof null --> Object
// If we look for the typeof undefined --> Undefined

console.log(typeof null);
console.log(typeof undefined);


// Primitive Data Types

// 7 types:  String, Number, Boolean, Null, undefined, Symbol, BigInt
// Number category takes all the values whether int, float, double
//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// Working of Symbol datatype

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //In symbol datatype even if the value passed is same w.r.t datatype and value the two variables are not same even for the strict check

// For converting a number to BigInt just put a n at the end like  33423824284626424268n --> the number is converted to bigInt

// Reference Data Types (Non Primitive)

// Arrays, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"] // Array
let myObj = {
    name: "hitesh",
    age:22,
}

const myFunction = function(){
    console.log("Hello world")
} // called as object function


// **********Memory*************

// 2 types of memory
// Stack (primitive), Heap (Non Primitive)
// In stack the copy of variable is found whereas in heap the reference to the variable is found, so in heap if we change anythign it will be reflected in original value

let myYoutubeName = "hiteshchoudarydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"
console.log(myYoutubeName) // Here the value is hiteshChoudary
console.log(anotherName) // Here the value is updated to chaiaurcode

let userOne = {
    email:"user@google.com",
    upi:"user@ybi"
}

let UserTwo = userOne
UserTwo.email="hitesh@google.com"

console.log(userOne.email) // As in heap the reference is provided so both the values are changed 
console.log(UserTwo.email)

// userOne and UserTwo email is updated to hitesh@google.com

