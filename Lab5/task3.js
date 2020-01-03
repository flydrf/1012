function myFunction(){
    if(allP[0].style.backgroundColor === "initial"){
        document.getElementById("button").innerHTML = 'Click to unhighlight';
        for (var i = 0; i < allP.length; i++) {
          allP[i].style.backgroundColor= "yellow";
        }
      }
      else{
        document.getElementById("button").innerHTML = 'Click to highlight';
        for (var i = 0; i < allP.length; i++) {
          allP[i].style.backgroundColor= "initial";
        }
      }
    }
