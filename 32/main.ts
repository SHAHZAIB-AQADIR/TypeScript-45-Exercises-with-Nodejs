//Array Of Current Users
let current_users = ["Shayan", "abdullah", "Zain", "Hassan", "Ahmed"]

//Array Of New Users
let new_Users = ["Abdullah", "Umer", "Babar", "Ali", "Shayan"]

//Loop Through New Users To Check New USer Name Availability
new_Users.forEach(new_One_Users =>{
   
//Making A Condition For Username Already Exist And Save In Our Condition Variable
    let our_Condition =current_users.some(current_One_users => current_One_users.toLowerCase()=== new_One_Users.toLowerCase())
   
// Print Different Messages Using If & Else Statement
    if(our_Condition){
        console.log(`Sorry ${new_One_Users} is already taken !`);
    }else{
        console.log(`This userName ${new_One_Users} is available`);
        
    }
})
