let current_users = ["Ali","Hasan","Haseeb","Kamal","Mujeeb"]

let new_users = ["Mubeen","Saad","Saud","ALI","Munna","Raju"]

new_users.forEach(users=>{
    let users_cas = users.toLowerCase()

    let usernameTaken = current_users.some(c_user => c_user.toLowerCase() === users_cas)

    if(usernameTaken){
        console.log(`${users} needs to choose a new username because it's already taken`)
    }else {
        current_users.push(users)
        console.log(`${users} is the new member added`)

    }
})

console.log(current_users)


new_users.forEach(users=>{
    let users_cas = users.toLowerCase()

    let usernameTaken = current_users.some(c_user => c_user.toLowerCase() === users_cas)

    if(usernameTaken){
        console.log(`${users} needs to choose a new username because it's already taken`)
    }else {
        current_users.push(users)
        console.log(`${users} is the new member added`)

    }
})

console.log(current_users)
