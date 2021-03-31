let clock= document.querySelector('#clock');
function getDate(){
    let data= new Date();
    let seconds= data.getSeconds();
    let minutes= data.getMinutes();
    let hours= data.getHours();
    if(seconds>59){
        seconds =-60;
    }
    if(seconds<10){
        seconds= "0"+seconds;
    }
    if(minutes>59){
        minutes=-60;
    }
    if(minutes<10){
        minutes= "0"+minutes;
    }
    if(hours>23){
        hours=-24;
    }
    clock.innerHTML= hours+":"+minutes+":"+seconds;
}

setInterval(getDate, 1000);
