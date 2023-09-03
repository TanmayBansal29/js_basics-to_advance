// there are two methods of Declaring JS Objects --> Like Literals and Like Constructors

// Singleton --> When a object object like a constructor then it is called a singleton object as it is residing in itself --> While the other method of declaring objects also provide various instances
// object.create

// Object Literals

const mySym = Symbol("key1")  // A Symbol declared in JS using the Symbol Object

const JsUser = {
    name:"Hitesh",
    "fullname":"Hitesh Choudary",  // we can define the key value pair in this way also like defining the key as String 
    age: 19,
    [mySym]: "mySym1",  // Decalring Symbols is through square bracketts 
    location: "Jaipur",
    email: "hitesh@google.com",
    isLooggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)  // Way 1 of accessing Object value
console.log(JsUser["email"]) // Way 2 of accessing Object Value --> The value here taken as String

// For accessing the key "fullname" we cannot use Way 1 as it does allow a key which is passed as a string to be taken into account 

console.log(JsUser.mySym) // here when we are trying to access symbol variable no doubt it is not giving me any Error but it is also not accessed as the sybmol datatype. Accessed as String 

// Also Accessing symbols is through square bracketts
console.log(JsUser[mySym])  // It itself tells on printing that this is a Symbol --> [Symbol[key1]] 

JsUser.email = "hitesh@chatgpt.com"  //Overwriting the Object value 
//Object.freeze(JsUser) // Freezing the Object Values so no change is renderedd

JsUser.email = "hitesh@microsoft.com"  // No error but the value will not propagate
console.log(JsUser) // When we print and see the result --> Email is hitesh@chatgpt.com

JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);  // When we need to refer to same object we go with 'this'
}
console.log(JsUser.greeting);  // This will give a function return back --> Function is not executed only a function reference is there  Function (anonymous)
console.log(JsUser.greeting());  // Passed like a function then it prints the text --> Hell0 Js User
console.log(JsUser.greetingTwo());

const tinderUser = new Object()   // Empty Object --> Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLooggedIn = false

console.log(tinderUser);


// Object Nesting 
const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Hitesh",
            lastName : "choudhary"
        }
    }
}

console.log(regularUser.fullname) // Complete fullname object is displayed with nesting. 
console.log(regularUser.fullname.userFullName) // One level nesting is reduced in this case
console.log(regularUser.fullname.userFullName.firstName) // This will specifically provide the first name of the user provided

// Combining of two Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1,  obj2}  // This will give a problem. Obj3 will be created which will contains two key value pairs as --> obj1 and its values and obj 2 and its values
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)  // A Optional Parameter --> curly braces (empty array) is provided 
// the empty array will act as a target and reat will act a source which will reduce the chances of error --> Object.assign(target, source)
// Otherwise like obj1 is target then all values are merged into obj1

const obj5 = {...obj1, ...obj2}  // Combining the objects with the use of spread operator 

// If we talk about the fetching data from database then it is fetched in the form of array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }, 
    {
        id: 2,
        email: "j@gmail.com"
    }
]

console.log(tinderUser)
console.log(Object.keys(tinderUser));  // It will provide all the keys of the object --> Interesting fact they are fetched in the form of Array
console.log(Object.values(tinderUser)) // It provide all the values of the object
console.log(Object.entries(tinderUser)) // It provides a array of array --> means all each key value pair is changed to array which are further stored in an array
// First Property will be Key and next will be Value of Array

console.log(tinderUser.hasOwnProperty('isloggedIn'))  // Provides a boolean result  whether this key is present in object or not

const course = {
    courseName : "JavaScript",
    price : "999",
    courseInstructor: "Hitesh"
}

// Destructuring the object
const {courseInstructor: instructure} = course // Any value can be destructured like this Now directly value can be called using the new name without using . (dot) operator
console.log(instructor);

// JSON --> Both Key and Values are given as String
// {
//     "name": "Hitesh",
//     "courseName" : "JS in Hindi",
//     "price": "Free"
// }

// Sometimes APIs are fetched in the form of Array of Objects


