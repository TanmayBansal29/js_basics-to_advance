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



