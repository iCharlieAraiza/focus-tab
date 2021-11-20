
// Define Pomodoro time
// Define Break time


// Define current Real time 

//Get the real time (mm);
// 


const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')


let pomodoroTimeValue = 10
let breaTimeValue = 30


let on = true;
let interval;
let currentTimer = pomodoroTimeValue;
let actualTime  = 0;
let breakTime = breaTimeValue;
breakSet = true;

const timerStartEvent = ()=>{
    let time;
    if(on){
        let currentTimerStart = Date.now();
        interval = setInterval(()=>{
            let time = (Date.now() - currentTimerStart);
            time = Math.floor(time / 1000)
            actualTime = currentTimer - time;
            console.log(calculateTime(actualTime))
            document.querySelector('title').textContent = calculateTime(actualTime)
            if(actualTime <= 0 && breakSet){
                currentTimer = breakTime
                currentTimerStart = Date.now()+10;
                breakSet = false
            }else if(actualTime === 0){
                breakSet = true;
                clearInterval(interval)
            }
        },1000)
    }else{
        currentTimer = actualTime;
        clearInterval(interval)
    }
    on = !on;
}


const calculateTime = value => {
    const sec = parseInt(value, 10); 
    let hours = Math.floor(sec / 3600); 
    let minutes = Math.floor((sec - hours * 3600) / 60); 
    let seconds = sec - hours * 3600 - minutes * 60;
    if (hours < 10) {      hours = '0' + hours;    }
    if ( (hours * 60) + minutes < 10 ) { minutes = `0${minutes}`}
    if (seconds < 10) {      seconds = '0' + seconds;    }
    if (hours == 0) {
    return minutes + ':' + seconds; // Return in MM:SS format
    } else {
    return  ( (hours * 60) + minutes) + ':' + seconds; // Return in HH:MM:SS format
    }
}


const resetTimer = () =>{
    currentTimer = pomodoroTimeValue
    actualTime = 0
    on = true
    clearInterval(interval)
}


startBtn.addEventListener('click', timerStartEvent)
stopBtn.addEventListener('click', resetTimer)
