// Tests for equality and inequality with strings

let myname = "Hasan"
console.log(myname == "Hasan")
console.log(myname != "hasan")

// Tests using the lower case function


console.log(myname.toLowerCase() == "hasan")

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let mynumber = 5
console.log(mynumber == 5)
console.log(mynumber != 4)

console.log("\n")

console.log(mynumber > 4)
console.log(mynumber < 4)

console.log("\n")

console.log(mynumber >= 4)
console.log(mynumber <= 4)

console.log("\n")

// Tests using "and" and "or" operators

console.log(myname == "Hasan" && mynumber == 5)
console.log(myname == "Hasan" || mynumber == 4)
console.log(myname == "hasan" || mynumber == 4)


console.log("\n")

// Test whether an item is in a array

let myarray = ["Hasan","Haseeb","Ali"]
console.log(myarray[0] == "Hasan")
console.log(myarray[1] == "Ali")