//Define The Function To Show Magicians Name
function Show_Magicians (magicians : String[]){
    magicians.forEach(name => console.log(name));

}

//Functio To Make MAgician Great Through  .Map() It Will Modify Array
function make_Great(magicians : string[]){
    return magicians.map(name =>`The Great ${name}`);
}

//Define An Array Of Magicians Name
let magicians_Names = ["Harry Poter", "Shayan", "Shahzaib"];

//Making A Copy Of Orignal Array Through .Slice() Function
let copy_Magician_Names = magicians_Names.slice();

//MOdify The Copy Array To Include "The Great" With Their Names
let copy_Great_Magician = make_Great(copy_Magician_Names);
 
//Show Both Array Orignal And Copy

//Orignal 
console.log("Orignal Array \n");
Show_Magicians(magicians_Names);

//Copy 
console.log("\n Copy Array \n");
Show_Magicians(copy_Great_Magician);