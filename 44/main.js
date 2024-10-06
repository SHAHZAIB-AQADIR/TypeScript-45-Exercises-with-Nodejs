//Define A Function With A Rest Parameter That Accept Items Arugment Representation Our Sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n making a Sandwich wihh the following items:\n");
    items.forEach(function (singleItem) { return console.log("_" + singleItem); });
    console.log("\n Now Enjoy Sandwich ");
}
//Calling The Function 3 Time With Different number Of Arguements
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheees", "Lettuce");
