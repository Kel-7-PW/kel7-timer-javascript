var time = 0;
var running = 0;
var mins = 0;
var secs = 0;
var hours = 0; 

function startPause(){
    if(running == 0){
        running = 1;
        increment();
    document.getElementById("start").innerHTML = "Pause";
    }
    else{
        running = 0;
    document.getElementById("start").innerHTML = "Continue";  
    }
}

function stop(){
    running = 0;
    time = 0;
    saveResult();
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("output").innerHTML = "00:00:00";
}

function increment(){
    if(running == 1){
        setTimeout(function(){
            time++;
            mins = Math.floor(time/10/60);
            secs = Math.floor(time/10 % 60);
            hours = Math.floor(time/10/60/60); 
            if(mins < 10){
                mins = "0" + mins;
            } 
            if(secs < 10){
                secs = "0" + secs;
            }
            if(hours < 10){
                hours = "0" + hours;
            } 
            document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs;
            increment();
        },100)
    }
}

function saveResult(){
    localStorage.setItem("saveHours", hours);
    localStorage.setItem("saveMins", mins);
    localStorage.setItem("saveSecs", secs);

    document.getElementById("result").innerHTML = "Total Pengerjaan : " + hours + " jam " + mins + " menit " + secs + " detik." ;
    showHideLabel(1);
}

function showHideLabel(value){
    let result = document.getElementById("result");
    let hidden = result.getAttribute("hidden");
    if (value = 1) {
        result.removeAttribute("hidden");
    } else {
        result.setAttribute("hidden", "hidden");
    }
}