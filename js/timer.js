
// Define Pomodoro time
// Define Break time


// Define current Real time 

//Get the real time (mm);
// 


const startBtn = document.querySelector('#start')

let on = true;
let interval;
let currentTimer = 60;
let actualTime  = 0;

const timerStartEvent = ()=>{
    let time;

    if(on){
        let currentTimerStart = Date.now();
        interval = setInterval(()=>{
            let time = (Date.now() - currentTimerStart);
            time = Math.floor(time / 1000)
            actualTime = currentTimer - time;
            console.log(currentTimer - time)
            document.querySelector('title').textContent = actualTime
        },1000)
    }else{
        currentTimer = actualTime;
        clearInterval(interval)
    }
    on = !on;
}


startBtn.addEventListener('click', timerStartEvent)


/*

let interval = ""


interval = setInterval(function() {
    timer.remainingTime = getRemainingTime(endTime);
    updateClock();

    total = timer.remainingTime.total;
    if (total <= 0) {
      clearInterval(interval);
    }
  }, 1000);

function getRemainingTime(endTime) {
    const currentTime = Date.parse(new Date());
    const difference = endTime - currentTime;
  
    const total = Number.parseInt(difference / 1000, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);
  
    return {
      total,
      minutes,
      seconds,
    };
  }

  */