
var sum = 0;
var min = 0;
var msecond = 0;
var hour = 0;
var gettime;

function startw(){
var date = new Date();    

var sec = date.getSeconds();
msecond += 1 ;
document.getElementById("msecond").innerHTML = msecond;
// sum += 1;

// document.getElementById("firp").innerHTML = sum;
if(msecond == 100){
    document.getElementById("msecond").innerHTML = "00";
    msecond = 0;
    sum += 1;
    document.getElementById("firp").innerHTML = sum;
}
if(sum==60){
    document.getElementById("firp").innerHTML = "00";
    sum = 0;
    min += 1;
    document.getElementById("min").innerHTML = min;
    if(min == 60){
        min = 0
   hour += 1;
   document.getElementById("min").innerHTML = "00";
        document.getElementById("hour").innerHTML = hour;
    }
}
gettime = setTimeout(function(){ startw() }, 10); 
document.getElementById("start").disabled = true;
}


function stopw(){
clearTimeout(gettime);

// document.getElementById("firp").innerHTML = "00";
// document.getElementById("min").innerHTML = "00";
// document.getElementById("hour").innerHTML = "00";
// document.getElementById("msecond").innerHTML = "00";
document.getElementById("start").disabled = false;
// msecond = 0;
// sum = 0;
// min = 0;

}
function cleard(){
    clearTimeout(gettime);

    document.getElementById("firp").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("msecond").innerHTML = "00";
    document.getElementById("start").disabled = false;
    msecond = 0;
    sum = 0;
    min = 0;
    
  

}