//Define A Function To Create A Car Object With Optional Options
function create_car(manufacturer, model, ...options){
    // Initiailize a Car Object With Manufacturer And Model
    let Car = {
        manufacturer:manufacturer,
        model:model
          };
    // Add Additional Option To The Car Obeject      
    options.forEach(options => {
        let [key, value] = options.split(":");
        Car [key.trim()] = value.trim();
    })
    return Car;
}

//Call The Function To Create A Car Object
let my_car = create_car("Toyota","Corrolla", "color:Black", "Sunroof: True-")

//Print The Value To Ensure All The Information Is Stored Correctly In The Car object
console.log(my_car);
