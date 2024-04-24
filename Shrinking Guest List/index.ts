let guestlist = ["Mamu's Family", "Chacha's Family", "Taya's Family", "Cousin's Family", "Uncle's Family", "Friend's Family"]
console.log("Table is not available, I can only invite 2 persons.\n")

let myguestlist1 = guestlist.pop()
console.log(`Sorry  ${myguestlist1} You are not invited. \n`)

let myguestlist2 = guestlist.pop()
console.log(`Sorry  ${myguestlist2} You are not invited. \n`)

let myguestlist3 = guestlist.pop()
console.log(`Sorry  ${myguestlist3} You are not invited. \n`)

let myguestlist4 = guestlist.pop()
console.log(`Sorry  ${myguestlist4} You are not invited. \n`)

for (let i =0 ; i < guestlist.length; i++) {
    console.log(`${guestlist[i]} You are Still invited. \n`)

}

guestlist.pop()
guestlist.pop()

console.log(guestlist)
