function myFunction()
{
  var myDate = new Date();
  var day_list = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]
  var month_list = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
  var p = document.getElementById("mydata");
  var year = myDate.getFullYear();
  var month = month_list[myDate.getMonth()];
  var date = myDate.getDate();
  var day = day_list[myDate.getDay()];
  p.innerHTML = "Today is the "+date+" "+"("+day+")"+" "+month+" "+year;
}
