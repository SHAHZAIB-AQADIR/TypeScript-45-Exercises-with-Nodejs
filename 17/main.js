"use strict";
//Creating A Guest List Arry
let guestList = ["Shayan", "Abdullah", "Ahmed", "Hassan"];
//making variable for those guest who cant come
let notPresent = guestList[0];
//Print the name of those guest who cant come
console.log(notPresent, "will not come for dinner");
//Add or Remove from guest list arry
guestList.splice(0, 1, "Amir");
//Print message for bigger table 
console.log("Good News ! we have found a bigger table for dinner.");
//Adding a new guest at starting index of arry
guestList.unshift("Ali");
//Adding a new guest at ending index of arry
guestList.push("Zain");
//Get a middle index of our guest list arry
let middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest at middle index of arry
guestList.splice(middleIndex, 0, "Umer");
//Print message of total guest list
console.log("total list of our guests");
//Sending a invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to do dinner with me`));
//Inform that only two guests can be invited for dinner 
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two Guest to dinner with me");
//using while-loop to remove guest from the array untill only two names remain 
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}
// sending a invitation to the lastt two guest on the list 
console.log("Invitation to the last 2 Guest");
guestList.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited to dinner`));
//Removing last two guest from the list 
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
