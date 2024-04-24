let locations = ["Makkah", "Madina", "Iraq", "Iran", "Kashmir"];
//Print your array in its original order.
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}
console.log("\n");
//Print your array in alphabetical order without modifying the actual list.
let sortedlocs = locations.sort();
for (let i = 0; i < locations.length; i++) {
    console.log(sortedlocs[i]);
}
console.log("\n");
//Show that your array is still in its original order by printing it.
let orignialarr = locations.slice();
console.log(orignialarr);
console.log("\n");
//Print your array in reverse alphabetical order without changing the order of the original list.
let reservedlocs = locations.slice().reverse();
for (let i = 0; i < locations.length; i++) {
    console.log(reservedlocs[i]);
}
//Show that your array is still in its original order by printing it again.
console.log(locations.slice());
console.log("\n");
//Reverse the order of your list. Print the array to show that its order has changed.
let revorder = locations.slice().reverse();
console.log(revorder);
console.log("\n");
export {};
