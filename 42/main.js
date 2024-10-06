function Show_Magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_Great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_Names = ["Harry Poter", "Shayan", "Shahzaib"];
var great_Magician = make_Great(magicians_Names);
Show_Magicians(great_Magician);
