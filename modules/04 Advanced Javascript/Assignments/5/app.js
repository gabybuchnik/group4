var startBtn = document.getElementById("timer-button-start");
var stopBtn = document.getElementById("timer-button-stop");
var resetBtn = document.getElementById("timer-button-reset");
var countdown = document.getElementById("countdown");
var startFrom = document.getElementById("start-from");
var timer = document.getElementById("timer");
var m = 0, s = 0;

var Counter = (function () {

    var interval;
    function start() {
        clearInterval(interval);
        if (countdown.checked && startFrom.value) {
            interval = setInterval(startCountDown, 1000);
        }
        else if (timer.checked) {
            interval = setInterval(startTimer, 1000);
        }
    }
    function stop() {
        clearInterval(interval);
    }
    function reset() {
        clearInterval(interval);
        s = m = 0;
        setPrefix();
        document.getElementById("counter").innerHTML = m + ":" + s;
    }
    function startTimer() {
        setPrefix();
        document.getElementById("counter").innerHTML = m + ":" + s;
        s++;
        if (s === 60) {
            m++;
            s = 0;
        }
    }
    function startCountDown() {
        if (s <= 0) {
            m--;
            s = 60;
        }
        s--;
        setPrefix();
        document.getElementById("counter").innerHTML = m + ":" + s;
    }
    function setPrefix() {
        s <= 9 ? s = ("0" + s).slice(-2) : s;
        m <= 9 ? m = ("0" + m).slice(-2) : m;
    }
    return {
        start: start,
        stop: stop,
        reset: reset
    }
})();

function setDisable() {
    startFrom.setAttribute("disabled", "disabled");
}
function removeDisable() {
    startFrom.removeAttribute("disabled");
}
function changeValue() {
    m = startFrom.value;
}

startBtn.onclick = Counter.start;
stopBtn.onclick = Counter.stop;
resetBtn.onclick = Counter.reset;
timer.onchange = setDisable;
countdown.onchange = removeDisable;
startFrom.onchange = changeValue;


