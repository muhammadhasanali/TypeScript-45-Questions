let guestlist = ["Mamu's Family", "Chacha's Family", "Cousin's Family"];
for (let g = 0; g < guestlist.length; g++) {
    console.log(`I would like to invite ${guestlist[g]} today for dinner at my home`);
}
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//You’ll have to think of someone else to invite.
console.log("\n");
let newlist = guestlist.map((values) => {
    if (values === "Chacha's Family") {
        return "Uncle's Family";
    }
    else {
        return values;
    }
});
newlist.map((values) => {
    console.log(`I would like to invite ${values} today for dinner at my home`);
});
export {};
