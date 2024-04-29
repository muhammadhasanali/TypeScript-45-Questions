let Magicians = ["ABC", "DEF", "GHI", "JKL"];
function show_magicians(msg) {
    for (let Magician of Magicians) {
        console.log(msg + " " + Magician);
    }
}
show_magicians("Great");
export {};
