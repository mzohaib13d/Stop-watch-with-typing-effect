var isStop = true;
var s = 0;
var minut = 0;
var hr = 0;

function pstart()
{
if(isStop == true)
{
    isStop = false;
    timer();
}
}

function timer(){
    if(isStop == false){
        s= parseInt(s);
        minut = parseInt(minut);
        hr = parseInt(hr);
        s++;
        if(s==60){
            s = 0;
            minut++;
        }
        if(minut == 60){
            minut = 0;
            hr++;
        }
        if(s<10){
            s = "0" + s;
        }
        if(minut<10){
            minut = "0" + minut;
        }
        if(hr<10){
            hr = "0" + hr;
        }
        stopwatch.innerHTML = hr + " : "  + minut +  "  :  " + s;
        setTimeout("timer()", 1000);
    }
}
function pstop(){
isStop = true;
}

function reset(){
isStop = true;
s = 0;
min = 0;
hr = 0;
stopwatch.innerHTML = "00 : 00 : 00";
}