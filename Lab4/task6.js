var countdown=21;
function myFunction()
{
  var p = document.getElementById("mydata");
  if(countdown>1){
    countdown--;
    p.innerHTML = countdown;
  }
  else{
    p.innerHTML = "BOOM!";
  }
}
