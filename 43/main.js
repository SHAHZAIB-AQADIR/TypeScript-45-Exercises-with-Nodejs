//Define The Function To Show Magicians Name
function Show_Magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Functio To Make MAgician Great Through  .Map() It Will Modify Array
function make_Great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define An Array Of Magicians Name
var magicians_Names = ["Harry Poter", "Shayan", "Shahzaib"];
//Making A Copy Of Orignal Array Through .Slice() Function
var copy_Magician_Names = magicians_Names.slice();
//MOdify The Copy Array To Include "The Great" With Their Names
var copy_Great_Magician = make_Great(copy_Magician_Names);
//Show Both Array Orignal And Copy
//Orignal 
console.log("Orignal Array \n");
Show_Magicians(magicians_Names);
//Copy 
console.log("\n Copy Array \n");
Show_Magicians(copy_Great_Magician);
