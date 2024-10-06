//Define A Function With A Rest Parameter That Accept Items Arugment Representation Our Sandwich
function makeSandwich(...items:string[]){
    console.log("\n making a Sandwich wihh the following items:\n");
    items.forEach(singleItem => console.log("_"+ singleItem))
        
  console.log("\n Now Enjoy Sandwich ");
}

//Calling The Function 3 Time With Different number Of Arguements
makeSandwich("Chicken", "Cheese", "Mayo", "Egg")

makeSandwich("Bread", "Butter")

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheees", "Lettuce")
