let hours = 0;
let minutes = 0;
let seconds = 0;
let nenoSeconds = 0;
let timer;
let isRunning = false;

function updateTime() {
    if (nenoSeconds === 59) {
        nenoSeconds = 0;
        seconds++
    
    if (seconds === 59) {
        seconds = 0;

        if (minutes === 59) {
            minutes = 0;
            hours++
        } else {
            minutes++;
        }
    } else {
        seconds++;
    }
}else {
    nenoSeconds++;
}



    document.querySelector('#time p').innerHTML = `0${hours}:0${minutes}:0${seconds}:0${nenoSeconds}`;

}
function start() {
    if (isRunning === false) {
        timer = setInterval(updateTime, 10)
        isRunning = true;
    }
}
function stop() {
    clearInterval(timer);
    isRunning = false;
}
function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.querySelector('#time p').innerHTML = `0${hours}:0${minutes}:0${seconds}`;

    stop();

}