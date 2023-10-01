let startTime;
let running = false;
let interval;

const timeDisplay = document.querySelector(".time-display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
    if (!running) {
        startTime = Date.now() - (interval || 0);
        interval = setInterval(updateTime, 1000);
        running = true;
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(interval);
        running = false;
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

function resetTimer() {
    stopTimer();
    timeDisplay.textContent = "00:00:00";
}

function updateTime() {
    const currentTime = new Date(Date.now() - startTime);
    const hours = currentTime.getUTCHours().toString().padStart(2, "0");
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}