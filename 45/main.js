//Define A Function To Create A Car Object With Optional Options
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initiailize a Car Object With Manufacturer And Model
    var Car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add Additional Option To The Car Obeject      
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        Car[key.trim()] = value.trim();
    });
    return Car;
}
//Call The Function To Create A Car Object
var my_car = create_car("Toyota", "Corrolla", "color:Black", "Sunroof: True-");
//Print The Value To Ensure All The Information Is Stored Correctly In The Car object
console.log(my_car);
