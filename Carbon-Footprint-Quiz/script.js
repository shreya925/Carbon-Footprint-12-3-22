 var count = 0;
function question1(val) {
 if(val == "never"){
   count = count + 1;
 }
 if(val == "rarely"){
   count = count + 2;
 } 
if(val == "sometimes"){
   count = count + 3;
 }
 if(val == "always"){
   count = count + 4;
 } 
 
  document.getElementById("result1").innerHTML = "Your score for this question is: " + count;

return count; 
}

function score() {
  document.getElementById("result").innerHTML = "Your score is: 20, Congratulations !!";
}

    