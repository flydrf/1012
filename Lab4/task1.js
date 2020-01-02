function myFunction()
{
  var result = Math.random();

  var p = document.getElementById("mydata");

  if (result > 0.5) {
    p.innerHTML = "Yes";
  }
  else{
    p.innerHTML = "No";
  }

}
