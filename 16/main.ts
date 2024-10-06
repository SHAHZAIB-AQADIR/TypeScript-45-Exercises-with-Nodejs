
//Creating A Guest List Arry
let guestList = ["Shayan", "Abdullah", "Ahmed", "Hassan"];

//making variable for those guest who cant come
let notPresent = guestList [0];

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
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));







