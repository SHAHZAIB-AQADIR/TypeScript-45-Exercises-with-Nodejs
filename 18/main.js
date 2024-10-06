"use strict";
// Making a array of countries and print its original order
let countriesToVisit = ["London", "suziland", "Brazil", "Argentina"];
console.log("original order:", countriesToVisit);
// Print the Array in Alphabetical order without modifying the Actual Array 
console.log("Alphabettical order:", [...countriesToVisit].sort());
// Show that the array is still in its orginal order
console.log("Still in orginal order:", countriesToVisit);
// Prinit array in reverse order without modifying the actual array list
console.log("Reverse order:", [...countriesToVisit].reverse());
// Show that the array is still in its orginal order
console.log("Still in orginal order", countriesToVisit);
// We have change the orginal order now
console.log("Orginal array reverse:", countriesToVisit.reverse());
// Print the array to show its orginal order
console.log("Back to orginal order", countriesToVisit.reverse());
// Prinr the array to show that its order has been changed in alphabetical order 
console.log("Sorted in alphabetical order ", countriesToVisit.sort());
// We have change the orginal order again
console.log("Orginal array reverse:", countriesToVisit.reverse());
