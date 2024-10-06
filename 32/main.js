//Array Of Current Users
var current_users = ["Shayan", "Abdullah", "Zain", "Hassan", "Ahmed"];
//Array Of New Users
var new_Users = ["Abdullah", "Umer", "Babar", "Ali", "Shayan"];
//Loop Through New Users To Check New USer Name Availability
new_Users.forEach(function (new_One_Users) {
    var our_Condition = current_users.some(function (current_One_users) { return current_One_users.toLowerCase() === new_One_Users.toLowerCase(); });
    if (our_Condition) {
        console.log("Sorry ".concat(new_One_Users, " is already taken !"));
    }
    else {
        console.log("This userName ".concat(new_One_Users, " is available"));
    }
});
