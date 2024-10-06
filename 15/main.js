"use strict";
let guestList = ["Shayan", "Abdullah", "Ahmed", "Hassan"];
let notPresent = guestList[0];
console.log(notPresent, "will not come for dinner");
guestList.splice(0, 1, "Amir");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));
