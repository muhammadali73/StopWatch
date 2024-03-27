let timerInterval;
let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
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
        milisecond++
        if (milisecond === 100) {
            second++;
            milisecond = 0;
        }
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
        timer.textContent = "0" + hour + " : " + "0" + minute + " : " + "0" + second + " : " + "0" + milisecond;
        if (milisecond > 9) {
            timer.textContent = "0" + hour + " : " + "0" + minute + " : " + "0" + second + " : " + milisecond;
        }
        if (second > 9) {
            if (milisecond > 9) {
                timer.textContent = "0" + hour + " : " + "0" + minute + " : " + second + " : " + milisecond;
            } else {
                timer.textContent = "0" + hour + " : " + "0" + minute + " : " + second + " : 0" + milisecond;
            }
        }        
        if (minute > 9) {
            if (second > 9) {
                timer.textContent = "0" + hour + " : " + minute + " : " + second + " : 0 " + milisecond;
            }
            else if (milisecond > 9) {
                timer.textContent = "0" + hour + " : " + minute + " : 0 " + second + " : " + milisecond;
            }
             else {
                timer.textContent = "0" + hour + " : " + minute + " : 0 " + second + " : 0" + milisecond;
            }
        }
        if (hour > 9) {
            if (minute > 9) {
                timer.textContent = hour + " : " + minute + " : 0 " + second + " : 0 " + milisecond;
            }
            else if (second > 9) {
                timer.textContent = hour + " : 0" + minute + " : " + second + " : 0" + milisecond;
            }
            else if (milisecond > 9) {
                timer.textContent = hour + " : 0" + minute + " : 0 " + second + " : " + milisecond;
            }
             else {
                timer.textContent = hour + " : " + minute + " : 0 " + second + " : 0" + milisecond;
            }
        }
    }
    timerInterval = setInterval(timer, 10)
}
function stop() {
    clearInterval(timerInterval)
    document.getElementById("start").disabled = false;
    stoppedTime = Date.now() - (hour * 60 * 60 * 1000 + minute * 60 * 1000 + second * 1000);
}
function reset() {
    clearInterval(timerInterval);
    milisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    stoppedTime = 0;
    document.getElementById("timer").textContent = "00 : 00 : 00 : 00";
    document.getElementById("reset").disabled = false;
    document.getElementById("start").disabled = false;
}
