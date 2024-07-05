var i = 0;
function changeColor(){
    var css = 'bttn:hover{ background-color: #00ff00 }';
my_funct1();


      

};
function my_funct1(){
   
    document.body.style.backgroundColor = 'rgb('+Math.round(Math.random()*255)+ 
    ','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

     document.getElementById("bttn").style.borderColor = 'rgb('+Math.round(Math.random()*255)+ 
    ','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    document.getElementById("bttn").innerHTML = "YOU CLICKED ME " + (i+=1);

  
};










     