console.log(2 > 1) // Displays the value in boolean value (true or false)\
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)


console.log("2" > 1)  //it gives true
console.log("02" > 1) // here the result depends upon the datatype of the data compared

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0);  //true

// Some comparison operators convert in NaN while convert it into 0 so thats why here the result is unpredictable

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// Here the comparison and equality check in javascript are two different things 
// ==  and === both have a different way of working w.r.t comparison operators

// === Strict Check (the values are strictly checked) --> means the datatype of the values is also checked
console.log("2"===2); // Ans will be false here as the per the strict check both have different data types one is having string data type while the otehr one number

