let timerInterval;
let second = 0
let minute = 0
let hour = 0
let stoppedTime = 0;
function on() {
    document.getElementById("alert").innerHTML = "You Are Online";
}
function off() {
    document.getElementById("alert").innerHTML = "You Are Offline";
}
function start() {
    document.getElementById("start").disabled = true;

    function timer() {
        second++
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
        }
        updateDisplay();
    }
    function updateDisplay() {
        const timer = document.getElementById("timer");
        timer.textContent = hour + "0 : 0" + minute + " : " + "0" + second;
        if (second > 9) {
            timer.textContent = hour + "0 : 0" + minute + " : " + second;
        }
        if (minute > 9) {
            timer.textContent = hour + "0 : " + minute + " : " + "0" + second;
        }
    }
    timerInterval = setInterval(timer, 1000)
}
function stop() {
    clearInterval(timerInterval)
    document.getElementById("start").disabled = false;
    stoppedTime = Date.now() - (hour * 60 * 60 * 1000 + minute * 60 * 1000 + second * 1000);
}
function reset() {
    clearInterval(timerInterval);
    second = 0;
    minute = 0;
    hour = 0;
    stoppedTime = 0;
    document.getElementById("timer").textContent = "00 : 00 : 00";
    document.getElementById("reset").disabled = false;
    document.getElementById("start").disabled = false;
}
