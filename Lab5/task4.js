function addFunction(){
  var myDiv = document.getElementById("output");
  var addp = document.createElement("p");
  addp.innerHTML = document.getElementById("input").value;
  myDiv.appendChild(addp);
}

function deleteFunction(){
  var myDiv = document.getElementById("output");
  var myP = myDiv.getElementsByTagName("p");
  if(myP.length === 0){
    alert("No paragraph to delete!");
  }
  else{
    var lastP = myDiv.lastChild;
    myDiv.removeChild(lastP);
  }
}
