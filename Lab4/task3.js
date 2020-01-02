function myFunction(num)
{
  var p = document.getElementById("mydata");
  var sum = num;
  for (var n = 0; n < num; n++){
    sum=sum+n;
  }
  p.innerHTML = "Result = " + sum
}
