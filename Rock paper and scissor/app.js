


var Random = ["Rock", "Paper","Scissors"];
var userScore = 0 ;
var computerScore = 0;
var First = document.querySelector(".resultp");
var user_score = document.getElementById("user-score");
var comp_score = document.getElementById("computer-score");
console.log(First);
function first() {

    var MathR = Math.floor(Math.random() * 3) ;
  
    var firstValue = document.querySelector(".result").innerHTML;
    console.log(firstValue);
   
    if (Random[MathR] == "Rock") {

        First.innerHTML = "Rock (user) and  Rock (comp). <br>Draw!";

    }
    else if (Random[MathR] == "Paper") {
        First.innerHTML = "Rock (user) wrap up by Paper (comp). <br>You loss!";
        countcomp(1);

    }

    else if(Random[MathR] == "Scissors"){
        First.innerHTML = "Rock (user) beats Scissors (comp). <br>You win!";
        countt(1); 
    }

}
function second(){
    var MathR = Math.floor(Math.random() * 3) ;
   
    if (Random[MathR] == "Rock") {

        First.innerHTML = "Rock (user) wrap up by Paper (comp). <br>You win!";
       countt(1); 
    }
    else if (Random[MathR] == "Paper") {
        First.innerHTML = "Paper (user) and  Paper (comp). <br>Draw!";

    }

    else if(Random[MathR] == "Scissors"){
        First.innerHTML = "Paper (User) cut by Scissors (computer). <br> You loss!";
        countcomp(1);
      
    }
   


}
function Third(){
    var MathR = Math.floor(Math.random() * 3) ;
    
    if (Random[MathR] == "Rock") {

        First.innerHTML = "Scissors (user) beats by Rock (comp). <br>You loss!";
        countcomp(1)

    }
    else if (Random[MathR] == "Paper") {
        First.innerHTML = "Scissors (user) cut the paper (comp). <br>You win!";
        countt(1); 

    }

    else if(Random[MathR] == "Scissors"){
        First.innerHTML = "Scissors (user) and scissors (comp). <br>Draw!";

    }
   


}
function countt(x){
var t = userScore += x;
user_score.innerHTML = t;
// console.log(t);
console.log(sum+"user");
}


function countcomp(y){
  
    var t = computerScore += y;
    comp_score.innerHTML = t;
console.log(sum+"comp")
}