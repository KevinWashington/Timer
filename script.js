var seconds = "00"
var minutes = "00"
var hours = '00' 
var cron = 1000


function start(){
    //Activate the counter function every second.
    cron = setInterval(() => counter(), 1000)
}

//Time pause function
function pause(){
    clearInterval(cron)
} 

function stop(){
    var timer = document.getElementById("timer")
    clearInterval(cron)
    seconds = "00"
    minutes = "00"
    hours = "00"
    timer.innerHTML = `${hours}:${minutes}:${seconds}`
}

function counter(){
    var timer = document.getElementById("timer")
    //Function that will be activated each second.
    seconds++
    //When 60 seconds pass, add minute.
    if(seconds == 60){ 
        minutes++
        seconds = 0
        //2-digit checker
        minutes < 10 ? minutes = '0' + minutes : minutes = minutes
    }
    //When 60 minutes pass, add hour.
    if(minutes == 60){
        hours++
        minutes = "00"
        //2-digit checker
        hours < 10 ? hours = '0' + hours : hours = hours
    }
    //2-digit checker
    seconds < 10 ? seconds = '0' + seconds : seconds = seconds   
    //Refresh the counter every second    
    timer.innerHTML = `${hours}:${minutes}:${seconds}`
    }

