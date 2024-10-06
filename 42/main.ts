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

//Call Make_Great Function TO Modify Magician Name
let great_Magician = make_Great(magicians_Names);

//Call Show_Magician Function To Modified List Of Magicians 
Show_Magicians(great_Magician);