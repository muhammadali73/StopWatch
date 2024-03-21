let timerInterval;
function on(){
document.getElementById("alert").innerHTML = "You Are Online";
}
function off(){
document.getElementById("alert").innerHTML = "You Are Offline";
}
function start(){
    document.getElementById("start").disabled = true;
let second = 0
    let minute = 0
    let hour = 0

    function timer(){
        second++
        if(second===60){
            minute++;
            second = 0;
        }
        if(minute===60){
            hour++;
            minute=0;
        }
    updateDisplay();
    }
    function updateDisplay(){
        const timer = document.getElementById("timer");
        timer.textContent = hour + "0 : 0" + minute + " : " + "0" + second;
        if(second>9){
            timer.textContent = hour + "0 : 0" + minute + " : " + second;
        }
        if(minute>9){
            timer.textContent = hour + "0 : " + minute + " : " + "0" + second;
        }
    }
    timerInterval = setInterval(timer,1000)}
    function stop(){
        clearInterval(timerInterval)
    }
    function reset(){
        clearInterval(timerInterval);
        document.getElementById("timer").textContent = "00 : 00 : 00";
        document.getElementById("reset").disabled = false;
    }
