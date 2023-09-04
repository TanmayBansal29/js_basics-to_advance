// Functions are a set of instructions or block of code which can be resused again and again --> declare once and call/ exceute multiple time
// definition of function

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()  // Till the point paranthesis are not used that is refrence but when parenthesis are used that is the Execution

function addTwoNumbers(number1, number2) {  // Parameters are passed here during function definition
    console.log(number1 + number2);
}

addTwoNumbers(3, 4) // Arguments are passed during function call 
// Here a problem arises what if User provided string or null in the arguments by mistake. The code will work as per the norms set for it to work.

const result = addTwoNumbers(4,4)
console.log("Result: ", result)  // Here the result will display undefined because here the value after calculation is not returned back to function, thats why the ans is Undefined

// For returning the value back to the function, syntax is like

function addTwoNumbers1(number1, number2) {
    let result1 = number1 + number2
    return result1;  // This return statement will return the value to the function back
    console.log("Hitesh")  // If we try to provide some other code after the return statement that will not be executed as its the unreachable code, at return the function is ended JS engine works like this
}

// Now for calling this function we have to store the value in a variable only then the the value will be displayed
// Result1 inside function definition and Result1 variable outside the function both are different --> Here comes the Concept of Variable Scope
const result1 = addTwoNumbers1(3,5)
console.log(result1);  // The result1 variable has the value 8 stored in it

function loginUserMessage (username =  "sam") {  // Here providing trhe default value for username
    if(username === undefined){   // Here giving the condition using the if statement
        console.log("Please Enter a Username");
        return
    }
    return `${username}, just logged in`
}

console.log(loginUserMessage("Hitesh"))

// What if no value/argument is passed during function call
console.log(loginUserMessage()) // This wil give the result --> Undefined Just logged in
// Right Here like no name is passed it will take the default value that will print sam

// Sometimes a condition is there when we dont the exact number of arguments that are passed then we use rest operator in such cases
// Rest and Spread operators are same just they differ in thier working areas
function calculateCardPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCardPrice(200, 400, 500, 800)) 
// When we will print this the result display will be an Array containing all these values
// When val1, val2 is also passed as the parameter then first two arguments will pass to them and rest all values will be passed to num1


// Passing an Object to a function
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)  // reference to Object is passed here
handleObject({  // Directly passing the values as a object to function call
    username: "sam",
    price: 399
})

//Passing Array to Function
const myNewArray = [200, 400, 100, 600]
function returnSecondValue (getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // reference to array is provided
console.log(returnSecondValue([200, 400, 500, 700]))  // Directly passing the values as array in argument


