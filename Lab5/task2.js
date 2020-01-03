var size = 12;

function myFunction(change){
  var p = document.getElementById("paragraph");

  if(change == 'green'){
    p.style.color = "green";
  }

  if(change == 'blue'){
    p.style.color = "blue";
  }

  if(change == 'blue'){
    p.style.color = "blue";
  }

  if(change == 'mono'){
    p.style.fontFamily = "monospace";
  }

  if(change == 'sansserif'){
    p.style.fontFamily = "sans-serif";
  }

  if(change == 'serif'){
    p.style.fontFamily = "serif";
  }

  if(change == 'sizeup'){
    size++;
    p.style.fontSize = size+"pt";
  }

  if(change == 'sizedown'){
    size--;
    p.style.fontSize = size+"pt";
  }

}
