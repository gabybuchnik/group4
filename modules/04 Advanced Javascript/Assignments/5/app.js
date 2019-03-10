let startBtn = document.getElementById("timer-button-start");
let stopBtn = document.getElementById("timer-button-stop");
let resetBtn = document.getElementById("timer-button-reset");
let countdown = document.getElementById("countdown");
let startFrom = document.getElementById("start-from");
let timer = document.getElementById("timer");
let m = 0, s = 0;

const Counter = (() => {

    var interval;
    const start = () => {
        clearInterval(interval);
        if (countdown.checked && startFrom.value) {
            interval = setInterval(startCountDown, 1000);
        }
        else if (timer.checked) {
            interval = setInterval(startTimer, 1000);
        }
    }
    const stop = () => {
        clearInterval(interval);
    }
    const reset = () => {
        clearInterval(interval);
        if(timer.checked)
        {
            s = m = 0;
        }
       else{
           m = startFrom.value;
           s = 0;
       }
        setPrefix();
        document.getElementById("counter").innerHTML = m + ":" + s;
    }
    const startTimer = () => {
        setPrefix();
        document.getElementById("counter").innerHTML = m + ":" + s;
        s++;
        if (s === 60) {
            m++;
            s = 0;
        }
    }
    const startCountDown = () => {
        if (s <= 0) {
            m--;
            s = 60;
        }
        s--;
        setPrefix();
        document.getElementById("counter").innerHTML = m + ":" + s;
    }
    const setPrefix = () => {
        s <= 9 ? s = ("0" + s).slice(-2) : s;
        m <= 9 ? m = ("0" + m).slice(-2) : m;
    }
    return {
        start: start,
        stop: stop,
        reset: reset
    }
})();

const setDisable = () => {
    startFrom.setAttribute("disabled", "disabled");
}
const removeDisable = () => {
    startFrom.removeAttribute("disabled");
}
const changeValue = () => {
    m = startFrom.value;
}

startBtn.onclick = Counter.start;
stopBtn.onclick = Counter.stop;
resetBtn.onclick = Counter.reset;
timer.onchange = setDisable;
countdown.onchange = removeDisable;
startFrom.onchange = changeValue;


