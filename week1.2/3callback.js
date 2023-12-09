function morningGreet(name){
    console.log("How are you doing this fine morning, Mr. "+name+" Sir, would you like some coffee?")
}

function eveningGreet(name){
    console.log("How are you doing this fine evening, Mr. "+name+" Sir, would you like some wine?")
}


function greetName(fn, ln, greetFunc){
    let name=fn+" "+ln;
    greetFunc(name);
}

greetName("Akhil", "Babu", morningGreet)
greetName("Akhil", "Babu", eveningGreet)