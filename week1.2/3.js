// Terminal Clock (HH:MM:SS)

function updateTime(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    console.log(`${h}:${m}:${s}`);
}

setInterval(updateTime, 1000);