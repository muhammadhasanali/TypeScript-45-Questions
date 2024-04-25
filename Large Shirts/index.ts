let make_shirt = (size:string = "Large", message:string = "I love TypeScript")=>{

    if(size == "Large" || size == "Medium"){
        return `Size of your Shirt is ${size} and message for print is I love TypeScript.`
    }
    else{
        return `Size of your Shirt is ${size} and message for print is ${message}.`
    }
    }
    

console.log(make_shirt("Large","Hello"))