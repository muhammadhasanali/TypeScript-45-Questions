let nousers = ["Admin", "Haseeb","Hasan", "Ali","Waqas","Waqar"]

nousers = []

if(nousers.length > 0){
    for (let i = 0; i < nousers.length; i++){
        if (nousers[i] == "Admin"){
            console.log(`Hello ${nousers[i]}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${nousers[i]}, thank you for logging in again.`)
        }
    }
}else{
    console.log("No users! We need to find some users!")
}



