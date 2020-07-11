let minutes = 0, seconds = 0, miliSeconds = 00;
let interval;

let MINUTES = document.querySelector('.minutes');
let SECONDS = document.querySelector('.seconds');
let MILISECONDS = document.querySelector('.mili-seconds');
let btnStart = document.querySelector(".start");
let btnStop = document.querySelector(".stop");
let btnReset = document.querySelector(".reset");


//functions
function startWatch() {
    miliSeconds++;

    if (miliSeconds < 9) {
        MILISECONDS.innerHTML = "0" + miliSeconds;
    }
    if (miliSeconds > 9) {
        MILISECONDS.innerHTML = miliSeconds;
    }
    if (miliSeconds > 99) {
        seconds++;
        SECONDS.innerHTML = "0" + seconds + ":";
        miliSeconds = 0;
        MILISECONDS.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        SECONDS.innerHTML = seconds + ":";
    }
    if (seconds > 60) {
        minutes++;
        MINUTES.innerHTML = "0" + minutes + ":";
        seconds = 0;
        SECONDS.innerHTML = seconds + ":";
    }
    if (minutes > 9) {
        MINUTES.innerHTML = minutes + ":";
    }
}


btnStart.onclick = function () {
    interval = setInterval(startWatch,10);

}

btnStop.onclick = function () {

    clearInterval(interval);
}

btnReset.onclick = function () {
    clearInterval(interval);
    miliSeconds = "00";
    seconds = "00";
    minutes = "00";
    SECONDS.innerHTML = seconds;
    MILISECONDS.innerHTML = miliSeconds;
    interval = 0;
}