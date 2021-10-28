let time = 20
let breakTime = 10

const timer = document.querySelector('.timer .time')

let seconds = time;

const interval = setInterval(()=>{
    if(seconds <= 0){
        if(breakTime <= 0){
            clearInterval(interval)
        }   
        timer.innerHTML = breakTime--
    }else{
        timer.innerHTML = seconds--
    }
},1000)