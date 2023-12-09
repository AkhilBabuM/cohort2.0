// Time it takes between setTimeout call and the inner function actually running

function runLater() {
    let endTime=Date.now();
    console.log("The time difference is: ", endTime - startTime);
}

let startTime = Date.now(); 
setTimeout (runLater, 3 * 1000);