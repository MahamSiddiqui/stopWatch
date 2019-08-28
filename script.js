let hours = 0;
let minutes = 0;
let seconds = 0;
//let nenoSeconds = 0;(update soon)
let timer;
let isRunning = false;
// This is a function to run stopwatch.
function updateTime() {
    if (seconds === 60) {
        seconds = 0;
        if (minutes === 60) {
            minutes = 0;
            hours++
        } else {
            minutes++;
        }
    } else {
        seconds++;
    }

    document.querySelector('#timeerCount p ').innerHTML = `${hours}:${minutes}:${seconds}`;
}
//start btn
function start() {
    if (isRunning === false) {
        timer = setInterval(updateTime, 1000)
        isRunning = true;
    }
}
//stop btn
function stop() {
    clearInterval(timer);
    isRunning = false;
}
//reset btn
function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    nenoSeconds = 0;
    document.querySelector('#timeerCount p').innerHTML = `${hours}:${minutes}:${seconds}`;

    stop();

}