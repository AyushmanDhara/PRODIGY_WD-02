let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let isRunning = false;

const hoursElement = document.querySelector('.text-hours');
const minutesElement = document.querySelector('.text-min');
const secondsElement = document.querySelector('.text-sec');
const millisecondsElement = document.querySelector('.text-msec');
const lapsContainer = document.querySelector('.Laps');

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 10);
        
    }
    
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        
    }
    
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    hoursElement.textContent = `${pad(hours)}:`;
    minutesElement.textContent = ` ${pad(minutes)} :`;
    secondsElement.textContent = ` ${pad(seconds)} :`;
    millisecondsElement.textContent = ` ${pad(milliseconds / 10)}`;
}

function pad(number) {
    return number < 10 ? `0${number}` : number;
}

function recordLap() {
    const lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds / 10)}`;
    const lapElement = document.createElement('div');
    lapElement.textContent = lapTime;
    lapsContainer.appendChild(lapElement);
}

function clearLaps() {
    lapsContainer.innerHTML = '';
}

document.querySelector('.button-p button:nth-child(1)').addEventListener('click', startTimer);
document.querySelector('.button-p button:nth-child(2)').addEventListener('click', stopTimer);
document.querySelector('.button-p button:nth-child(3)').addEventListener('click', recordLap);
document.querySelector('.button-p button:nth-child(4)').addEventListener('click', resetTimer);
document.querySelector('.button-a button').addEventListener('click', clearLaps);
