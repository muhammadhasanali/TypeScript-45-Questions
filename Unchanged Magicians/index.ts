let Magicians = ["ABC","DEF","GHI","JKL"]

let MagiciansCOPY = [...Magicians]

function show_magicians(msg:string){
    let modifiedarray =''
    for (let Magician of MagiciansCOPY){
        modifiedarray += `${msg} ${Magician} \n`
    }
    return modifiedarray
}

let getmarray = show_magicians("Great");


console.log(getmarray)