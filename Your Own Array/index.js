let mode = ["Bike", "car", "Bus", "Train"];
for (let i = 0; i < mode.length; i++) {
    console.log(`I would like to own a ${mode[i]}.`);
}
mode.map((aaa) => {
    console.log(`I would like to own a ${aaa}.`);
});
export {};
