let mode = ["Bike", "car", "Bus", "Train"]
//method 1
for (let i = 0; i < mode.length; i++){
    console.log(`I would like to own a ${mode[i]}.`)
}
//method 2
mode.map((aaa)=> {
    console.log(`I would like to own a ${aaa}.`)
});