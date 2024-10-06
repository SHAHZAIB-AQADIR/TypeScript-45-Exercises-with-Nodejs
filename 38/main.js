//Describe A Function
function Describe_City(City, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(City, " is in ").concat(Country));
}
;
//Calling A Function
Describe_City("Karachi");
Describe_City("Lahore");
Describe_City("Berlin", "Germany");
