function BMI(){

 var weight = document.getElementById("weight").value;
var height = document.getElementById("height").value;

document.getElementById("kg").innerHTML = weight + " kg";
document.getElementById("cm").innerHTML = height + " cm";
var bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);

 document.getElementById("weightu").innerHTML = bmi;


 if(bmi < 18.5){

    document.getElementById("charact").innerHTML = "Under weight"
    document.getElementById("charact").style.color = "red";
 }
 if(bmi < 24.9 && bmi > 18.5){

    document.getElementById("charact").innerHTML = "Normal weight"
    document.getElementById("charact").style.color = "green";
 }
 if(bmi < 29.9 && bmi > 25.5){

    document.getElementById("charact").innerHTML = "Over weight"
    document.getElementById("charact").style.color = "brown";
 }
 if(bmi >=30){

    document.getElementById("charact").innerHTML = "Obese weight"
    document.getElementById("charact").style.color = "brown";
 }
}
