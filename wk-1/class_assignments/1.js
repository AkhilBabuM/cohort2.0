// Count Down in javascript 30 to 0

let i = 30
function countDown(){
    console.log("T minus "+ i--)
    if(i<0){
        clearInterval(intervalID)
    }
}

const intervalID=setInterval(countDown, 1000)