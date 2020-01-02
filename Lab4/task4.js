function myFunction()
{
  var first = Math.floor((Math.random()*6))+1;
  var second = Math.floor((Math.random()*6))+1;
  var p = document.getElementById("mydata");
  if(first==second){
    p.innerHTML = "Dice rolls are " +"\""+first+"\""+" "+"\""+second+"\"";
    alert("DOUBLES!")
  }
  else{
    p.innerHTML = "Dice rolls are " +"\""+first+"\""+" "+"\""+second+"\"";
  }
}
