let user = ["Hasan", "Haseeb" , "Admin", "Kamal", "Waqas", "Waqar"]

for (let i = 0; i < user.length; i++){
    if (user[i] == "Admin"){
        console.log(`Hello ${user[i]}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${user[i]}, thank you for logging in again.`)
    }
}