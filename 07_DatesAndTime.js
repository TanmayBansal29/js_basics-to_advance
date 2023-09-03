let myDate = new Date() //Instance of the Date Object
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// All these conversions convert the date to different formats like some give only day and date some give date and time

console.log(typeof myDate) // date is a object


// Ways to define the dates in different types
let myCreatedDate = new Date(2023, 0, 23)  // Month starts from Zero
console.log(myCreatedDate.toDateString()) // Jan 23 2023 

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString()); //1/23/2023 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-14") // Change the formal to YYYY-MM-DD  here the month starts from 01
console.log(myCreatedDate2.toLocaleString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp) // Displays the result in milliseconds 
console.log(myCreatedDate.getTime())

console.log(Math.round(Date.now()/1000)) // Provides the value in seconds


let newDate = new Date()
console.log(newDate.getMonth()) // Like GetMonth there are various other methods that can be used to extract different information from the Date value
// getDay(), getDate(), getYear(), many more...

newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate)