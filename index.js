let timer = document.querySelector("#timer");
let icon = document.querySelector('.timer_controls span')
let secCircle = document.querySelector('.sec_circle')
var hr = 0
var min = 0
var sec = 0
var stoptime = true;


window.onload = function () {
    playBtn = document.querySelector('.play_btn');
    resetBtn = document.querySelector('.reset_button');
    timer = document.querySelector("#timer");
    icon = document.querySelector('.timer_controls span')
    secCircle = document.querySelector('.sec_circle')
    playBtn.addEventListener('click',playPauseTimer);    
resetBtn.addEventListener('click',resetTimer);    

}



function playPauseTimer() {
    if(stoptime === true){
        stoptime = false;
        timerCycle();
        icon.innerHTML = "pause";
    }else{
        stoptime = true;
        icon.innerHTML = "play_arrow";
        
    }
}
function resetTimer() {
    icon.innerHTML = "play_arrow";
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    min =0;
    sec = 0;
}
setInterval(function() {
        secCircle.style.transform = `rotate(${6*sec}deg)`    
},1000);
function timerCycle() {
    if(stoptime === false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec +1;
        if(sec == 60){
            min = min+1;
            sec =0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }
        if(sec<10 || sec ==0){
            sec = '0'+sec;
        }
        if(min<10 ||min ==0){
            min = '0'+min;
        }
        if(hr<10|| hr ==0){
            hr = '0' + hr;
        }
        timer.innerHTML = hr + ':' +min + ':' +sec;
        setTimeout("timerCycle()",1000);
    }
}